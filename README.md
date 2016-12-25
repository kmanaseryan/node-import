# The problem

When you require a local module from some directory whereas the required module is in another directory,
then you have problem like this:

`../../../../../ ... /foo.js` 

A lot of dots and once you change the directory of this `foo.js` then you have
to change the all modules which requires this module

# Solution

Reinventing the ES6 `import` keyword

(We have to do this because node doesn't support `import` [yet])

# How to use?

First require `_import` and `_export` functions
```javascript
let _import = require('importme').import
let _export = require('importme').export
```
Then add in the your route module (or the module
which runs first when you start your app) your desired modules:
```javascript
_export({
    foo: './foo.js',
    bar: './bar.js',
    baa: './haa/baa.js'
})
```

then import your modules from anywhere:
```javascript
let foo = _import('foo')
let baa = _import('baa')
```
You can use with ES6 destructuring assignment syntax:
```javascript
let {foo, bar} = _import('foo', 'bar')
```
Or even you can use `from` like syntax, i.e. import functions from the module
```javascript
//./foo.js module
module.exports = {
    print: ()=>{
        console.log("I'm imported function from foo module")
    }
}
```
```javascript
//your app initiator module
let _export = require('importme').export;

_export({
    foo: './foo.js'
})
```
```javascript
//a module in some directory
let _import = require('importme').import

let print = _import('print').from('foo')
print() //I'm imported function from foo module
```

#
This is very small module yet, but there could be added a lot off 
nice features. If you would like to contribute, then you can open issue or make a pull request in 
[github](https://github.com/kmanaseryan/node-import), they would be appreciated!

