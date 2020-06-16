# FormGenerator

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Docker

`docker build -t webui . --no-cache`

Then

`docker run -d -t -p 4200:4200 --name=webui webui`
