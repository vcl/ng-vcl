var cpr = require('cpr');

cpr('components', 'dist', {
  overwrite: true,    
  filter: /^(?!.*.html$).*$/
}, function(err, files) {
    if(err) console.log(err);
});

cpr('components', 'dist/es', {
  overwrite: true,    
  filter: /^(?!.*.html$).*$/
}, function(err, files) {
    if(err) console.log(err);
});
