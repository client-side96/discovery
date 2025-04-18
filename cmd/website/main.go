package main

import (
	"flag"
	"net/http"
	"strconv"
)

type application struct {
	htmlDir string
}

func main() {
	port := flag.Int("port", 4000, "Port to run the server on")
	staticDir := flag.String("static", "./static", "Directory to serve static files from")
	htmlDir := flag.String("html", "./html", "Directory to serve HTML files from")
	flag.Parse()

	app := &application{
		htmlDir: *htmlDir,
	}

	mux := http.NewServeMux()

	mux.HandleFunc("/", app.homeHandler)

	fileServer := http.FileServer(http.Dir(*staticDir))
	mux.Handle("/static/", http.StripPrefix("/static", fileServer))

	addr := ":" + strconv.Itoa(*port)
	http.ListenAndServe(addr, mux)
}
