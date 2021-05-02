This project demonstrates how to incorporate JavaScript bundling into your Trio projects using Parcel and NPM scripts. Please note that you are not limited to just using Parcel. You are, in fact, free to use whatever JavaScript bundler you want.

To run this project:

1. Clone this project to your computer.
2. Open a terminal and make the directory you cloned this project into the current working directory.
3. From the terminal, run `npm install`. This will install this project's _development dependencies_ of which there are 2 - _concurrently_ and _parcel-bundler_.
4. Using your editor, examine the _package.json_ file, which is located in the project's root folder. Specifically please take notice of the 2 NPM scripts, _build_ and _release_.
    * The _build_ script is used during building your site for development. It instructs Trio to watch the source directory for any changes and when there are changes to build the site into the public folder icrementally. It also instruct Parcel to watch the source/jsBundle folder for any changes and when there are changes to build the JavaScript bundle _main.js_ and write it to the public/scripts folder.
    * The _release_ script is used when you are building your site for release. It instructs Trio to build the site for release:
5. From the command line please run the following to build the project for _development_.
```shell
 npm run build
```
6. From the command line please run the following to build the project's for _release_.
```shell
 npm run release
```
