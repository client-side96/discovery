# Discovery

My personal website made with love.

## Development Setup

To run the application, execute:

```
$ go run cmd/website/*
```

### Tailwind

To use Tailwind styles, download the [Standalone CLI](https://tailwindcss.com/blog/standalone-cli).
You can compile the output CSS file in watch mode with:

```
$ tailwindcli -i styles/tailwind.css -o static/tailwind.css --minify --watch
```
