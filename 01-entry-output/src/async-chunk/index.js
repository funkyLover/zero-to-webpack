
console.log('load chunk async!');

import('./async.js').then(function (f) {
  f();
});
