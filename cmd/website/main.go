package main

import (
	"flag"
	"net/http"
	"strconv"
)

func main() {
	port := flag.Int("port", 4000, "Port to run the server on")
	staticDir := flag.String("static", "./static", "Directory to serve static files from")
	flag.Parse()

	mux := http.NewServeMux()

	mux.HandleFunc("/", homeHandler)

	fileServer := http.FileServer(http.Dir(*staticDir))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	addr := ":" + strconv.Itoa(*port)
	http.ListenAndServe(addr, mux)
}
