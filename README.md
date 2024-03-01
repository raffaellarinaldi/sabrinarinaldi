# Setup Websites for Sabrina Rinaldi

First, make sure you install the required global dependencies.

`npm i -g gulp gulp-rename gulp-concat gulp-uglify basic-ftp npm-run-all`

Then, open your preferred terminal application.

```
mkdir /your/preferred/project/location/
cd /your/preferred/project/location/
```

Copy the code out of the GitHub repository.

`git clone https://github.com/raffaellarinaldi/sabrinarinaldi.git sabrinarinaldi`

Add 11tybase as submodule (only required on first setup).

```
cd sabrinarinaldi
git submodule add https://github.com/raffaellarinaldi/11tybase.git src/common/base
```

Check for updates.

```
cd src/common/base
git pull origin master
```

## [https://www.sabrinarinaldi.com/](https://www.sabrinarinaldi.com/) & [https://www.sabrinarinaldi.it/](https://www.sabrinarinaldi.it/)

Start Eleventy.

`npm run start`

Open your browser and visit the local copies of the site.

[http://localhost:8080/](http://localhost:8080/) (english)

[http://localhost:8081/](http://localhost:8081/) (italian)

## Build HTML Source Files

To generate the HTML source files for both sites in the `dist/` directory.

`npm run build`

## Deploy HTML to Host via FTP

To generate the HTML source files for both sites and ftp them up to the web host.

`npm run deploy`
