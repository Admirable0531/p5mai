# p5mai

A [p5.js](https://p5js.org/) sketch that parses maimai `maidata.txt` chart files and renders the note pattern as a visual timeline.

## How it works

`sketch.js` loads a `maidata.txt` chart, parses its timing/note data, and draws it to a canvas — a quick way to preview a chart's shape without opening the game.

## Run locally

Open `index.html` in a browser, or serve the folder with any static file server. It loads p5.js from `libraries/` and `maidata.txt` from the repo root.
