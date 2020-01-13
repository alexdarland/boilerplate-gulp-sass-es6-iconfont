# Boilerplate - Gulp, Sass, ES6, Iconfont
> For a more effective frontend process

## What is this? 
This boilerplate is a basic frontend setup that you can download and use as a starting point in your projects.
It will hopefully encourage a well structured architecture and create an effective workflow.
It's based upon years of trial and error and includes my personal favorite ways of building great web experiences.
Even if you don't end up using this for your project, it will hopefully give you some inspiration or ideas that you can use! :)

I have intentionally left some things quite bare, so that each new project can build upon this structure without too much refactoring. 

## Features
- Folder manipulation
- Asset management
- Sass processing
- ES6 trans-compilation
- Icon-font generation

## Requirments
- [Nodejs](https://nodejs.org/en/): "~6.7.0"
- [gulp-cli](https://github.com/gulpjs/gulp-cli): "~3.9.1"


## Installation
- Install Nodejs
- Navigate to the project root folder and run the following commands
```
npm i -g gulp-cli
npm i
```

## Commands
#### Development `gulp`
This will build a package with uncompressed and source-mapped files.

#### Production `gulp --env production`
This will build a package with compressed and un-mapped files.
