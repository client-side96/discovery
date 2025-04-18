package main

import "net/http"

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":4000", mux)
}
