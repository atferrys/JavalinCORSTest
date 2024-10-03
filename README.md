## Server
You may run the test server via `.\gradlew run`.
It will start up a basic Javalin server on port `93` with a `GET` handler on `/check` that returns the current time.

It also has the `reflectClientOrigin` CORS rule enabled as suggested.

## Client
You may run two instances of the test clients (basic Vite+React applications) via `vite --port 5173` and `vite --port 5174`.

It will start up two simple applications that perform a request to the server endpoint.