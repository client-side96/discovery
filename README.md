# Discovery

My personal website made with love.

## Development Setup

To run the application, execute:

```sh
$ go run cmd/website/*
```

### Tailwind

To use Tailwind styles, download the [Standalone CLI](https://tailwindcss.com/blog/standalone-cli).
You can compile the output CSS file in watch mode with:

```sh
$ tailwindcli -i styles/tailwind.css -o static/tailwind.css --minify --watch
```

### Hot reload

To enable hot reload, install `air`. Here you can find the [installation guide](https://github.com/air-verse/air).

Just start the app then with:

```sh
$ air
```
