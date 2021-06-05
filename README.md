# p5js-boilerplate

Write Processing just like you would in the native Processing IDE, except it works in your browser and you can put your sketch in the web. The only difference is that you write code in Javascript instead of Java.

## What it is

This repository serves as a template for writing responsive [Processing](https://processing.org/) code for web browsers. It is based on the [p5js](http://p5js.org/) framework for Javascript. The template is ready to go, so you can instantly start writing code for your project and don't have to worry about the environment. You only have to work on one file and still have a working environment. By default, the HTML canvas displaying the code gets scaled full page and resizes with the browser window. Debugging works just as fine as in the native Processing environment when you use your browser console.

As this boilerplate code is meant to serve for experiments, none of the code is minified.

## How to

1. [Download](https://github.com/bsplt/p5js-boilerplate/archive/master.zip) or clone the git.
2. Write your Processing code into `/js/main.js`. You can follow the p5js [workflow](http://p5js.org/get-started/) or write Javascript your style.
3. Change `index.html` to your requirements (or do nothing to it). You can write HTML as you like and still have the Processing sketch in the background.
4. Launch your `index.html` and have fun.

## Included frameworks

Versions used in this compilation:

- [p5.js](http://p5js.org/) v1.3.1 (minimized)
- [normalize.css](https://github.com/anishathalye/?normalize) v8.0.1
- structure and HTML based on [HTML5 Boilerplate](https://html5boilerplate.com/) v8.0.0s
