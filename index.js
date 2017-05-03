module.exports = plugin;

function plugin(opts){
    opts = opts || {};
    var layout_extension = opts.layout_extension
    return function(files, metalsmith, done){
        // console.log(util.inspect(files, false, null))
        setImmediate(done);
        Object.keys(files).forEach(function(file){
            var data = files[file];
            if (layout_extension) {
                if (typeof data.layout !== "undefined") {
                    var re = /(?:\.([^.]+))?$/;
                    var ext = re.exec(data.layout)[1];
                    if (typeof ext == "undefined" && (typeof opts.force == "undefined" || opts.force == false)) {
                        data.layout = data.layout + layout_extension
                    } else if (typeof opts.force !== "undefined" && opts.force == true) {
                        data.layout = data.layout + layout_extension
                    }
                }
            }
        })
    }
}
