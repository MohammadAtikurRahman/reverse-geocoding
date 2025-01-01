# rev-geocoding

`rev-geocoding` is a lightweight reverse geocoding package built on top of OpenStreetMap's Nominatim API. It allows you to convert latitude and longitude coordinates into human-readable addresses without requiring an API key.

---

## Features

- Uses OpenStreetMap's free Nominatim API.
- No API key required.
- Simple and easy-to-use API.
- Lightweight and efficient.

## Installation

```bash
npm install rev-geocoding

```

```Js
const ReverseGeocode = require('rev-geocoding');

const geocode = new ReverseGeocode();
geocode.getAddress(48.858844, 2.294351) // Eiffel Tower
  .then((address) => console.log(address))
  .catch((error) => console.error(error));


```

## Contributing

Contributions are welcome! If you find any issues or have feature requests, please feel free to open an issue or submit a pull request.

## License

This project is licensed under the ISC License.

## Author

Developed by **Md. Atikur Rahman**.

## Support

For any questions or support, you can reach out via [GitHub Issues](https://github.com/MohammadAtikurRahman/reverse-geocoding/issues).

---

Thank you for using **rev-geocoding**! We hope it simplifies your development process.