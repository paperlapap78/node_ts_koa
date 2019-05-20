# Rest API with nodejs, typescript and koa

## Using Async / Await

To use the async / await syntax, you can have to add `esnext.asynciterable` to the lib array in the `tsconfig.json` file.

## Libraries

### Koa
REST API. Made by the guys who created Express. Takes advantage of new ES6 feature of generator functions and allows 
to use async / await fetures.

Koa relies heavily on middleware, e.g. `koa-bodyparser` middleware will pare the request body to json, the `koa-logger`
middleware will log all incoming requests `koa-router` makes it easier to configure url mapping to actions.

### InversifyJS
A powerfull andn lightweigt inversion of controller container for JavaScript & Node.js aps powerd by TypeScript

see [http://inversify.io/](http://inversify.io/)

### tsc-watch
Server auto-restarts when code changes

### Class validator
Decorator based entities valiedation

### Pino logger

### Unit testing with Jest

### Test coverage

### tslint

### ts-node
TypeScript execution and REPL for node.js, with source map support

see [https://www.npmjs.com/package/ts-node](https://www.npmjs.com/package/ts-node)

#### Usage
```typescript
# Execute a script as `node` + `tsc`. 
ts-node script.ts
 
# Starts a TypeScript REPL. 
ts-node
 
# Execute code with TypeScript. 
ts-node -e 'console.log("Hello, world!")'
 
# Execute, and print, code with TypeScript. 
ts-node -p -e '"Hello, world!"'
 
# Pipe scripts to execute with TypeScript. 
echo "console.log('Hello, world!')" | ts-node
```

## Middleware

* koa-router
* koa-bodyparser
* Winston Logger
* JWT auth koa-jwt
* Helmet (security headers)

## Task Runner

### NPM

## Debugging 

## Docker compose



# Resources

* JWORKS Tech blog: [CREATING A REST API WITH NODEJS, TYPESCRIPT AND KOA](https://ordina-jworks.github.io/nodejs/2017/06/20/REST-api-NodeJS-koa.html)
* Github example: [node-typescript-koa-rest](https://github.com/javieraviles/node-typescript-koa-rest) 
* Koajs examples: [https://github.com/koajs/examples](https://github.com/koajs/examples)
* Typescript example: [typescript-node](https://github.com/Talento90/typescript-node/blob/master/package.json)