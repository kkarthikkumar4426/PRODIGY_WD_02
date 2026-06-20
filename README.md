# Stopwatch Web App

A simple stopwatch web app built with HTML, CSS, and JavaScript.

## Features

- Start, pause, reset stopwatch
- Record lap times
- Responsive UI with modern styling

## Files

- `index.html` - stopwatch UI structure
- `styles.css` - app styling and layout
- `script.js` - stopwatch logic and controls

## Run locally

Open `index.html` in a browser, or serve the folder with a local web server.

### Using PowerShell

1. Open a terminal in the project folder.
2. Run:

```powershell
cd "c:\Users\Asus\OneDrive - Vignan University\Desktop\WD_2"
python -m http.server 8000
```

3. Open this link in a browser:

```text
http://localhost:8000
```

> If `python` is not available, install Python or use a VS Code extension such as Live Server.

## Accessing from other devices

On this computer, use:

```text
http://localhost:8000
```

To access from another computer on the same network, you must run the server bound to your machine's network IP and allow port `8000` through the firewall. Then use:

```text
http://<your-local-ip>:8000
```

## Notes

This is a static client-side app, so no backend is required.
