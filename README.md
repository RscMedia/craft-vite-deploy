<a href="https://craftcms.com/" rel="noopener" target="_blank"><img width="247" height="60" src="https://craftcms.com/craftcms.svg" alt="Craft CMS"></a>

<br>

[Craft](https://craftcms.com/) is a flexible, user-friendly CMS for creating custom digital experiences on the web and beyond.

In technical terms, it’s a self-hosted PHP application backed by a MySQL or Postgres database. Read more in the [official documentation](https://craftcms.com/docs).

__Psst!__ Looking for the Craft source code? Need to file a bug report or feature request? Check out [`craftcms/cms`](https://github.com/craftcms/cms).

# This starter is built in with Vite.

To get started clone the repo to your local.

`git clone git@github.com:RscMedia/craft-vite-deploy.git`

cd into the directory:

`cd craft-vite-deploy`

then run composer:

`composer install`

Then run NPM:

`npm i`

**Make sure you update the Vite settings in the .env file - using the .env.example.dev as a guide.**

## Create your local database and then run...

`php craft setup`

Add all the details you require:

After that has finished run:

`php craft plugin/install vite`

then:

`npm run build`

This will create your first build, creating a vite manifest file so you are ready to rock.

To run the dev environment start:

`npm run dev`

This will enable hot loading and reloading when changes are made.
