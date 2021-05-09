# About

This project demonstrates just one of many ways that you can incorporate JavaScript bundling into your Trio projects. Specifically, this approach uses Parcel and NPM scripts but please note that __Trio does not limit you to using just Parcel and NPM and in fact you are free to use whatever JavaScript bundler (e.g. Parcel, Browserify, Rollup.js, Webpack) and task runner (e.g. package.json scripts, Grunt, Gulp) that you prefer__.

<hr>

## Installation

1. Download this project's <a href="https://github.com/4awpawz/bundlewithparcel/archive/refs/heads/master.zip">zip file</a> to your computer and unpack it.

2. Open a terminal and make the folder you unpacked this project's zip file into the current working folder.

3. From the terminal, run the following to install this project's 2 _development dependencies_ - _concurrently_ and _parcel-bundler_:

```shell
npm install
```

## Scripting JavaScript Bundling

1. Using your editor, please examine the _package.json_ file, which is located in the project's root folder. Specifically please take notice of the 2 NPM scripts, _build_ and _release_:

```json
"scripts": {
    "parcel-watch": "parcel watch source/jsBundle/main.js --no-cache --out-dir public/scripts --public-url /scripts/",
    "trioBuild-I": "trio b -I",
    "trioBuild-i": "trio b -i",
    "build": "npm run trioBuild-i && concurrently --kill-others \"npm run trioBuild-I\" \"npm run parcel-watch\"",
    "release": "trio r && parcel build source/jsBundle/main.js --no-cache --out-dir release/scripts --public-url /scripts/ && trio c -m && trio s -r"
}
```

2. When you run the *build* script *to build the site for development* here is what happens:
    1. `npm run trioBuild-i` is called which calls `trio b -i` which instructs Trio to do a *one-off incremental build*. This is important because this guarantees that the `public` folder exists when Parcel executes.
    1. `concurrently` is called to run the remaining 2 items in the build script concurrently.
    1. `npm run trioBuild-I` is called which calls `trio b -I` (a shortcut for trio b -iws) which instructs Trio to *build the project incrementally any time a file in the source folder is changed* (excluding ignore files - see below) and to *serve the site in the browser*.
    1. `parcel-watch` is called which instructs Parcel to target the `source/jsBundle/main.js` file and to write the generated JavaScript bundle to the `public/scripts` folder. It also instructs Parcel to make the URL that it will embed in the JavaScript bundle file that points to the generated map file *relative to the public /scripts/ folder*.

```shell
 npm run build
```

3. When you run the *release* script *to build the site for release* here is what happens:
    1. The script first calls `trio r` which instructs Trio to *buid the site for release*.
    1. The script then calls `parcel build` which instructs Parcel to target the `source/jsBundle/main.js` file and to write the generated JavaScript bundle to the `release/scripts` folder. It also instructs Parcel to make the URL that it will embed in the JavaScript bundle file that points to the generated map file *relative to the release /scripts/ folder*.
    1. The script then calls `trio c -m` which instructs Trio to *cache bust the release folder* and to generate the *buster.manifest.json file*.
    1. The script then calls `trio s -r` which instructs Trio to *serve the site in the browser*.

```shell
 npm run release
```

## Declare Folders That Trio Should Ignore

__Please note that this feature requires Trio v6.0.1 or better.__

Finally, using your editor, please examine the _trio.json_ file. Specifically please take notice of the _ignore_ property. This property is used to declare one or more folders that users create in their project's _source_ folders for tasks unrelated to Trio's build and release workflows, such as for JavaScript bundling tasks which are driven by the user's inclusion of a task runner and JavaScript bundling application.

```json
{
    "ignore": "jsBundle"
}
```

If Trio were not to ignore these unrelated folders their content would _pollute Trio's metadata_ as well as possibly causing _unnecessary development builds_. In the case of this application, any changes made to any files located in the _jsBundle_ folder will be ignored by Trio and will be handled by Parcel via NPM package.json scripts.
