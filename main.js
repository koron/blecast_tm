var BlecastTM = require('./lib/blecast_tm.js');

var monitor = new BlecastTM();
monitor.on('data', function(data) {
  console.log('data:', data);
});
