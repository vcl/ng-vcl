var cpr = require('cpr');

// Copy each html file from src to dist
// Keep folder structure
cpr('src', 'dist', {
  overwrite: true,
  filter: /^(?!.*.html$).*$/
}, function(err, files) {
    if(err) console.log(err);
});

// Copy package.json to dist
cpr('package.json', 'dist/', {
  overwrite: true,
}, function(err, files) {
  if(err) console.log(err);
});
