package main

import "net/http"

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	fileServer := http.FileServer(http.Dir("./static"))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	http.ListenAndServe(":4000", mux)
}
