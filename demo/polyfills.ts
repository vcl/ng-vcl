import 'core-js/es7/reflect';
import 'zone.js/dist/zone';

if ('production' === ENV) {
} else {
  require('zone.js/dist/long-stack-trace-zone');
}
