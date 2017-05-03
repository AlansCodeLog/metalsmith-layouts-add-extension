const metalsmith = require('metalsmith');
const should = require('should');
const addExtension = require("../")

describe('metalsmith-layouts-add-extension', function() {
    it('should not add extension', function (done) {
        metalsmith(__dirname)
        .source('./posts')
        .use(addExtension({
            layout_extension: ".added"
        }))
        .build(function(err, files) {
            files['Multiple Extensions.md'].layout.should.equal("index.extension1.extension2.html");
            done();
        });

    });
    it('should not add extension', function (done) {
        metalsmith(__dirname)
        .source('./posts')
        .use(addExtension({
            layout_extension: ".added"
        }))
        .build(function(err, files) {
            files['Regular Extension.md'].layout.should.equal("index.html");
            done();
        });

    });
    it('should add extension', function (done) {
        metalsmith(__dirname)
        .source('./posts')
        .use(addExtension({
            layout_extension: ".added"
        }))
        .build(function(err, files) {
            files['No Extension.md'].layout.should.equal("index.added");
            done();
        });

    });
    it('should force add extension', function (done) {
        metalsmith(__dirname)
        .source('./posts')
        .use(addExtension({
            layout_extension: ".added",
            force: true
        }))
        .build(function(err, files) {
            files['Regular Extension.md'].layout.should.equal("index.html.added");
            done();
        });
    });
    it('should not force add extension', function (done) {
        metalsmith(__dirname)
        .source('./posts')
        .use(addExtension({
            layout_extension: ".added",
            force: false
        }))
        .build(function(err, files) {
            files['Regular Extension.md'].layout.should.equal("index.html");
            done();
        });

    });
});
