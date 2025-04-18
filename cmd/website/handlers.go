package main

import (
	tpl "html/template"
	"net/http"
	"os"
	"text/template"
)

func LoadSVG(path string) tpl.HTML {
	b, err := os.ReadFile(path)
	if err != nil {
		return ""
	}

	return tpl.HTML(string(b))
}

func (app *application) homeHandler(res http.ResponseWriter, req *http.Request) {
	if req.URL.Path != "/" {
		http.NotFound(res, req)
		return
	}

	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	funcMap := make(map[string]any)
	funcMap["LoadSVG"] = LoadSVG

	files := []string{
		app.htmlDir + "/home.page.html.tmpl",
		app.htmlDir + "/page.layout.html.tmpl",
		app.htmlDir + "/header.component.html.tmpl",
		app.htmlDir + "/navigation.component.html.tmpl",
		app.htmlDir + "/footer.component.html.tmpl",
	}

	tmpl, err := template.New("home.page.html.tmpl").Funcs(template.FuncMap(funcMap)).ParseFiles(files...)
	if err != nil {
		http.Error(res, "Internal error", http.StatusInternalServerError)
		return
	}

	err = tmpl.Execute(res, nil)
	if err != nil {
		http.Error(res, "Internal error", http.StatusInternalServerError)
		return
	}
}
