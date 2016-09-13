var cpr = require('cpr');

cpr('src', 'dist', {
  overwrite: true,
  filter: /^(?!.*.html$).*$/
}, function(err, files) {
    if(err) console.log(err);
});
