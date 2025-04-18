package main

import "net/http"

func main() {
	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	http.ListenAndServe(":4000", mux)
}

func homeHandler(res http.ResponseWriter, req *http.Request) {
	if req.URL.Path != "/" {
		http.NotFound(res, req)
		return
	}

	if req.Method != http.MethodGet {
		http.Error(res, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}

	res.Write([]byte("Hello world"))
}
