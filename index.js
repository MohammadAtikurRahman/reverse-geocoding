const axios = require('axios');

class ReverseGeocode {
  constructor() {
    this.apiUrl = 'https://nominatim.openstreetmap.org/reverse';
  }

  async getAddress(lat, lng) {
    if (!lat || !lng) throw new Error('Latitude and Longitude are required');
    try {
      const response = await axios.get(this.apiUrl, {
        params: {
          lat: lat,
          lon: lng,
          format: 'json',
        },
      });

      if (response.data && response.data.display_name) {
        return response.data.display_name; // Return the formatted address
      } else {
        throw new Error('No results found for the given coordinates');
      }
    } catch (error) {
      throw new Error(`Error fetching address: ${error.message}`);
    }
  }
}

module.exports = ReverseGeocode;
