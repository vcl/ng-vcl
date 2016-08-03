var cpr = require('cpr');

cpr('components', 'dist', {
    overwrite: true, //If the file exists, overwrite it
    filter: /^(?!.*.html$).*$/
}, function(err, files) {
    if(err) console.log(err);
});
