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
        "parcelBuild": "parcel watch source/jsBundle/main.js --no-cache --out-dir public/scripts --public-url /scripts/",
        "trioBuild": "trio b -I",
        "build": "concurrently --kill-others \"npm run trioBuild\" \"npm run parcelBuild\" ",
        "release": "trio r && parcel build source/jsBundle/main.js --no-cache --out-dir release/scripts --public-url /scripts/ && trio c -m && trio s -r"
  }
```

2. When you run the _build_ script, Trio will _watch the source folder for any changes_ and when there are changes Trio will _build the site incrementally for development into the public folder_ and _serve the development build to the browser_ . This script will also instruct Parcel to _watch the source/jsBundle folder for any changes_ and when there are changes it will _build the JavaScript bundle whose entry point is source/jsBundle/main.js_ and _write the bundle to the public/scripts folder_.

```shell
 npm run build
```

3. When you run the _release_ script, Trio will first _build the site for release into the release folder_. Then the script instructs Parcel to _build the JavaScript bundle whose entry point is source/jsBundle/main.js_ and _write the bundle to the release/scripts_ folder. Trio will then _cachebust the release folder_ and _serve the release build to the browser_.

```shell
 npm run release
```

## Declare Folders That Trio Should Ignore

4. Finally, using your editor, please examine the _trio.json_ file. Specifically please take notice of the _ignore_ property. This property is used to declare one or more folders that users create in their project's _source_ folders for tasks unrelated to Trio's build and release workflows, such as for JavaScript bundling tasks which are driven by the user's inclusion of a task runner and JavaScript bundling application. If Trio were not to ignore these unrelated folders their content would _pollute Trio's metadata_ as well as possibly causing _unnecessary development builds_. In the case of this application, any changes made to any files located in the _jsBundle_ folder will be ignored by Trio and will be handled by Parcel via NPM package.json scripts.

```json
{
    "ignore": "jsBundle"
}
```
