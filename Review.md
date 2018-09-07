# Review Questions

## What is Node.js?

Node.js is a runtime environment that can run Javascript outside of the browser. It is asyncrones & has tons of packages on npm that could be used to further enhance what you can do with it. 

## What is Express?

Express is a web framework that add functionality to your node.js server in the form of allowing you to use middleware & convienience helpers which can be used to simplify some common tasks

## Mention two parts of Express that you learned about this week.

Middleware & Routing

## What is Middleware?

Middleware is a peice of code that you can hook onto the server and before your request goes through all the way it can intercept it and do something different with the information requested or pass it to another middleware. 

## What is a Resource?

Everything is a resource that can be accessed by a unique URI if you are using REST architecture.

## What can the API return to help clients know if a request was successful?

A success status code (somewhere in the (200's)) & a message indicating that the request was successful. 

## How can we partition our application into sub-applications?

You have to create new files. In this case a file for the actionModel & projectModel as well as an index.js. In the index.js you have to use a command along thee lines of 

server.use('/projectModel', projectModel);

then in the projectModel.js we would need to import express, create router = express.Router(); & then export it at the bottom with module.exports = router.

That should hook it up. 

## What is express.json() and why do we need it?
It is used in order to read the data from the request body that express adds to the req object. 
