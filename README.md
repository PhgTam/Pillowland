[README.md](https://github.com/user-attachments/files/34696407/README.md)
# Pillowland

## Project Overview

Pillowland is a browser game inspired by childhood pillow fights and blanket forts. Choose a plush opponent, customize your fort, and dodge or hit flying pillows in a hand-drawn bedroom. Camera Mode turns your hand into the controller. Move it left or right to steer, aim the on-screen dot at a pillow, then pinch your thumb and index finger together to hit it.

## Key Features

- **Camera Mode – Hard** offers one-hand tracking, a mirrored preview, and an illustrated pinch tutorial with optional practice. Release the pinch before striking again.
- **Mouse & Keyboard Mode** uses **A** and **D** to move and a mouse click to hit a pillow.
- **Pillow fights** feature three plush opponents, timed rounds, scoring, lives, and unlockable pillows. Both control modes share the same battle rules.
- **Fort customization** lets you choose a tall tent or low canopy and select sage or rose.
- **English and Vietnamese** interfaces, ambient music, and a sound toggle.

## Technologies Used

- **HTML, CSS, and vanilla JavaScript** for the interface and game logic, with **Canvas 2D** for the illustrated scene and gameplay.
- **MediaDevices `getUserMedia()`** for webcam access. **MediaPipe Tasks Vision** uses a bundled FP16 Hand Landmarker model and WebAssembly to track the hand in the browser. The game tries GPU processing first and falls back to CPU processing.
- **Browser audio** for music and click sounds, and **`localStorage`** for unlocked pillows.
- **Node.js** built-in modules for the optional local server. The static website requires no npm packages or build step.

## Project Structure

```text
Pillowland/
├── README.md
├── index.html              Page and game interface
├── favicon.ico
├── Start Pillowland.cmd    Windows launcher
├── serve-pillowland.cjs    Local HTTP server
├── css/
│   └── pillowland.css
├── js/
│   └── pillowland.js
├── images/                 Illustrations loaded by the game
├── audio/
│   ├── ambient.mp3
│   └── mouse-click.mp3
├── fonts/                  Pacifico font and license
├── mediapipe/
│   ├── js/                 Vision runtime
│   ├── models/             Hand Landmarker model
│   ├── wasm/               WebAssembly binaries and loaders
│   └── LICENSE.txt
└── public/
    └── assets/             Original images and sounds
```

## Installation & Setup

1. Download or clone the full project, keeping its folder structure intact. The local launcher needs Node.js. On Windows it uses Node.js from your PATH or the Codex desktop runtime if available.
2. On Windows, double-click **Start Pillowland.cmd**. Alternatively, with Node.js installed, open a terminal in the project root and run `node serve-pillowland.cjs`.
3. Open the address printed in the terminal in Chrome or Edge. It looks like `http://127.0.0.1:<port>/`. The launcher chooses an available port each time, so use the exact address it prints.
4. Keep the terminal open while playing. Press **Ctrl+C** to stop the server.

Use the local HTTP address for Camera Mode. Opening `index.html` directly uses a `file://` address, which Pillowland rejects for Camera Mode. The loopback server gives the browser a secure local context and serves MediaPipe's module, model, and WebAssembly files. All runtime assets are local, so an internet connection is unnecessary once the project is on your computer.

## Camera Permissions

1. In Chrome or Edge, reach the control selection screen and choose **Camera Mode – Hard**. When the browser asks for camera access, choose **Allow**.
2. Hold one hand in view of the webcam. Practice until the preview reports a detected pinch, or select **Start camera battle** once the camera is ready.
3. If you previously blocked access, open the site information icon beside the address. In Chrome, choose **Site settings** and allow **Camera**. In Edge, open the site's permissions and allow **Camera**. Reload the game and select Camera Mode again. [Chrome camera help](https://support.google.com/chrome/answer/2693767) · [Edge camera help](https://support.microsoft.com/en-gb/windows/privacy/windows-camera-microphone-and-privacy)

If the camera still fails, check that your webcam is connected and enabled, close other apps using it, and allow camera access for desktop apps in your operating system's privacy settings. Use the printed loopback address locally or HTTPS when hosted. If the preview works but tracking fails, check that the full `mediapipe/` folder is present and try again in good lighting with one hand visible. Mouse & Keyboard Mode is available without camera permission.

## Deployment

1. Commit `index.html`, `favicon.ico`, and the `css/`, `js/`, `images/`, `audio/`, `fonts/`, and `mediapipe/` folders to your GitHub repository. Keep their names and capitalization as shown in the project.
2. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select the branch containing these files, select **/(root)**, and save. Open the site URL shown in Pages once deployment finishes. [GitHub Pages publishing guide](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
3. Use the published **HTTPS** URL for Camera Mode and allow camera access for that site. Relative asset paths support a GitHub Pages project subdirectory. The local Node.js launcher is only needed for local serving.

## Running the Website Locally

To experience the full functionality of Pillowland, including Camera Mode and hand tracking, please run the website through a local server.

**Instructions:**
1. Double-click `Start Pillowland.cmd`.
2. Wait for the local server to start.
3. Open the `http://127.0.0.1:...` address displayed in the terminal using Google Chrome or Microsoft Edge.
4. Allow camera access when prompted.
5. Select Camera Mode to begin interacting with the game.

**Important:** Opening `index.html` directly by double-clicking it may prevent camera access due to browser security restrictions. Please use the local server launcher instead.
