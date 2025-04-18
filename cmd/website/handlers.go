package main

import (
	"net/http"
	"text/template"
)

func (app *application) homeHandler(res http.ResponseWriter, req *http.Request) {
	if req.URL.Path != "/" {
		http.NotFound(res, req)
		return
	}

	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	files := []string{
		app.htmlDir + "/home.page.html.tmpl",
		app.htmlDir + "/page.layout.html.tmpl",
	}

	tmpl, err := template.ParseFiles(files...)
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
