// const axios = require("axios");
// const { Country } = require("../../db");
// const URL = "http://localhost:5000/countries";

// const postApi = async (req, res) => {
//   try {
//     const response = await axios.get(`${URL}`);
//     const countriesData = response.data;

//     const countryCreate = countriesData.map((coun) => ({
//       id: coun.cca3,
//       name: coun.name.common,
//       image: coun.flags.png,
//       continent:
//         coun.continent.length > 0 ? coun.continent[0] : "Desconocido",
//       capital:
//         coun.capital && coun.capital.length > 0
//           ? coun.capital[0]
//           : "Desconocida",
//       population: coun.population,
//     }));

//     const newCountry = await Country.bulkCreate(countryCreate);
//     res.status(200).json({ message: "Países guardados exitosamente" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = postApi;