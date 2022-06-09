# Full Stack Dev (JavaScript) Assessment App

A simple web app with HTML, CSS, and JavaScript to evaluate full stack developer candidates

## Prerequisites

Please install the following software on your computer before continuing.
- a modern web browser (Chrome, Firefox, Safari, etc)
- [Node JS](https://nodejs.org/en/)

## Install

In your terminal, navigate to wherever you want to install this project and clone.

```bash
cd /path/to/install
git clone https://github.com/crankd/fsdev-recruit-app.git
```

Install the project dependencies.

```bash
npm install
```

## Run

Run the app.  

```bash
npm start
```

> Note: By default, the app runs on localhost (127.0.0.1) using port 8080.  If port 8080 is already in use on your machine, open the `./package.json` file in the root and change the following line to let the `http-server` find an available port:

```json
  "start": "http-server ./ -c-1 -p 0"
```

If you need to change any other `http-server` options, review the [configuration options](https://www.npmjs.com/package/http-server#available-options).

## View the app

To view the app in your preferred web browser, navigate to [http://localhost:8080](http://localhost:8080).  If you modified the `http-server` options for address of port, navigate to the URL and port you configured.

## Troubleshooting the install and launch

If you run into trouble in the install of launch, try these steps to remedy:

- If the `http-server` throws a 'path not found' error, you can run `http-server` on demand, with any custom configuration options using the command `npx http-server [path] [options]` and substituting the `path` and `options` as needed.   See all [Installation options for http-server](https://www.npmjs.com/package/http-server#installation).
- 

# Exercises

These will be provided to you during your interview.