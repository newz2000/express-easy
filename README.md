# Simplify the creation of new Express.js Apps


This project aims to simplify the creation of new Express.js projects that adhere to best practices. When you use express-easy in your project, it uses conventions to pre-configure your application with common defaults, allowing your app to have far less configuration.

A typical starter express-easy application will have 80% less code than a standard express app and come pre-configured to facilitate TDD, sessions and HTML based templates. This allows beginners to get started quicker and experienced developers to focus on their code rather than configuration.

# WARNING: This is not stable yet
Please use the [Issue tracker](https://github.com/newz2000/express-easy/issues) to start a discussion and shape the implementation.

## Getting started

Install the module globally:
```bash
$ npm install -g express-easy-generator
```

Now create a new project:
```bash
$ express-easy new-project
$ cd new-project
```

Install dependencies and run:
```bash
$ npm install
$ npm start
```

Start adding your own code to app.js and marvel at how easy it is!

## Quick video overview
[![ScreenShot](https://s3.amazonaws.com/work.tekrs.com/video-cover.png)](https://www.youtube.com/watch?v=FV12Fpz9FwI&feature=youtu.be)


Report problems and feature requests on the [Issue tracker](https://github.com/newz2000/express-easy/issues).

## Project Roadmap


* __Version 0.1:__ Proof of concept / spike - no tests, unstable
* Version 0.2: Modularization and unit tests
* Version 0.3: Command line utility
* Version 0.4: Database support
* Version 0.5: Session support for MongoDB
* Version 0.6: SQL database support
* Version 0.7: Key/Value database support
* Version 0.8: Authentication support
* Version 0.9: API stability
* Version 1.0: Production ready - inclusion of example app layouts

## How to help

What are the most difficult things you've encountered with starting Express.js apps? (please file an issue with details)

What best practices do you feel make Express apps more maintainable? cf:

* [Javascript Best Practices](http://www.thinkful.com/learn/javascript-best-practices-1/)
* [Node.js Best Practices](http://blog.risingstack.com/node-js-best-practices/)
* Please suggest more to consider or discuss these listed above by filing an issue
* Help make the code better, write tests, debug, qa and use the module

## Created By

Hi, I'm Matthew Nuzum, a web developer and professional trainer who has taught classes on web design in general and web development with Node.js. 

I've watched users struggle to get started with Node.js and I'd like to make it easier. I'm helping do this by writing tutorials, creating training material, and providing in-person training.

I think we can do more by working with the tools.

I love the simplicity and flexibility of Express.js and would like to see projects that simplify common tasks without changing the nature or semantics. Projects created with express-simple will work just like any other Express.js project, including the use of existing tutorials.

	___ _______________ _____________   
	   |               |             )  » » » »»
	== | == EXPRESS == | ==  EASY  ==)   »»» »»» »»
	   |               |             )  » » » »»
	-O-^-O-O-------O-O-^-O-O------O-O= 
