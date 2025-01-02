# Setup Websites for Sabrina Rinaldi

First, make sure you install the required global dependencies.

`npm i -g gulp gulp-rename gulp-concat gulp-uglify basic-ftp npm-run-all`

Then, open your preferred terminal application.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/sabrinarinaldi.git --recursive`

Check for submodule updates.

`git submodule update --remote`

## [https://www.sabrinarinaldi.com/](https://www.sabrinarinaldi.com/) & [https://www.sabrinarinaldi.it/](https://www.sabrinarinaldi.it/)

Start Eleventy.

`npm run start`

Open your browser and visit the local copies of the site.

[http://localhost:8080/](http://localhost:8080/) (english)

[http://localhost:8081/](http://localhost:8081/) (italian)

## Build HTML Source Files

To generate the HTML source files for both sites in the `dist/` directory.
Remember to run this command to save static assets before committing to GitHub.

`npm run build`

## Deploy HTML to Host via FTP

To generate the HTML source files for both sites and ftp them up to the web host.

`npm run deploy`
