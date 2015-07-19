// parse BLECAST_TM's peripheral data.
module.exports = function(peripheral) {
  if (peripheral.advertisement.localName !== "BLECAST_TM\u0000") {
    return null;
  }
  var d = peripheral.advertisement.manufacturerData;
  var c = (d.readUInt8(3) << 8) + d.readUInt8(2);
  var t = d.readInt8(4);
  if ((d.readUInt8(5) & 0x80) != 0) {
    t += 0.5;
  }
  return { address: peripheral.address, count: c, temp: t };
}
