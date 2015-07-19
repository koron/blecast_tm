var events = require('events');
var util = require('util');

var noble = require("noble");

var parse = require('./parse.js');

noble.on('stateChange', function(state) {
  if (state === 'poweredOn') {
    noble.startScanning([], true);
  }
});

function BlecastTM() {
  var that = this;
  noble.addListener('discover', function(peripheral) {
    var d = parse(peripheral);
    if (d !== null) {
      that.emit('data', d);
    }
  });
}

util.inherits(BlecastTM, events.EventEmitter);

BlecastTM.prototype.noble = function() {
  return noble;
}

module.exports = BlecastTM;
