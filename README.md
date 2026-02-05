# Setup Websites for Sabrina Rinaldi

First, make sure you install the required global dependencies.

`npm i -g gulp gulp-rename gulp-download gulp-clean-css gulp-uglify gulp-concat gulp-replace gulp-google-webfonts npm-run-all basic-ftp`

Then, open your preferred terminal application.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/sabrinarinaldi.git --recursive`

Open project directory, check for submodule updates and install local dependencies.

```
cd sabrinarinaldi
git submodule update --remote
npm i
npm run link
gulp
```

## [https://sabrinarinaldi.com/](https://sabrinarinaldi.com/) & [https://sabrinarinaldi.it/](https://sabrinarinaldi.it/)

Start Eleventy.

`npm run serve`

Open your browser to visit the local copy of the sites.

[http://localhost:8080/](http://localhost:8080/) (english)

[http://localhost:8081/](http://localhost:8081/) (italian)

## Build HTML Source Files

To generate the HTML source files for both sites in the `dist/` directory.

`npm run build`

## Deploy HTML to Host via FTP

To generate the HTML source files for both sites and ftp them up to the web host.

`npm run deploy`
