const ReverseGeocode = require('./index');

const geocode = new ReverseGeocode();
geocode.getAddress(23.80702381142832, 90.36356404885456) // Eiffel Tower
  .then((address) => console.log(address))
  .catch((error) => console.error(error));
