# metalsmith-layouts-add-extension
A Metalsmith plugin that appends any given extension to the layout property of any post that does not already have an extension. This makes it easy to automatically fix any imported posts that might not have an extension appended, or quickly switch the extension of all posts to test a different templating language.

## Installation
```
npm install metalsmith-layouts-add-extension
```
## Usage

```javascript
var metalsmith = require('metalsmith');
var addExtension = require('metalsmith-layouts-add-extension');
var layouts = require('metalsmith-layouts');

// Plugin should be used before metalsmith-layouts
metalsmith
    .use(addExtension({
        layout_extension: ".html",
        //optional force option will add extension to all files that specify a layout property
        //force: true
    }))
    .use(layouts());
```

This will turn any files that have a layout property without an extension like:
```haml
layout: index
```
to

```haml
layout: index.html
```

but any of the following would be left alone:
```haml
layout: index.html
layout: index.extension1.extension2.html
```
unless the force option is used:
```javascript
.use(addExtension({
    layout_extension: ".html",
    force: true
}))
```
