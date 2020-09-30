const Bumblebee = require('bumblebee-hotword-node');

const bumblebee = new Bumblebee();
bumblebee.addHotword('bumblebee');

bumblebee.on('hotword', function (hotword) {
  console.log('Hotword Detected:', hotword);
});

bumblebee.start();

