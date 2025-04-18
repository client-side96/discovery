package main

import (
	"net/http"
	"text/template"
)

func homeHandler(res http.ResponseWriter, req *http.Request) {
	if req.URL.Path != "/" {
		http.NotFound(res, req)
		return
	}

	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	tmpl, err := template.ParseFiles("./html/home.page.tmpl")
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
