const axios = require("axios");
const { Country } = require("../../db");

const getAllCountry = async (req, res) => {
    try {
        const dataDB = await Country.findAll();
        
        if (dataDB.length === 0) {
            axios.get("http://localhost:5000/countries")
            .then(async ({ data }) => {
                const objCountry = data.map((c) => ({
                    id: c.cca3,
                    name: c.translations.spa.official,
                    image: c.flags.png,
                    continent: c.continents && c.continents.length > 0 ? c.continents[0] : null,
                    capital: c.capital && c.capital.length > 0 ? c.capital[0] : "",
                    subregion: c.subregion ? c.subregion : "",
                    area: c.area,
                    population: c.population,
                }));

                await Country.bulkCreate(objCountry);

                const updatedData = await Country.findAll();
                res.status(200).json(updatedData);
            })
            .catch((error) => {
                res.status(500).json({ error: "Error en axios al obtener países: " + error });
            });
        } else {
            res.status(200).json(dataDB);
        }
    } catch (error) {
        res.status(500).json({ error: "Error en la ruta de la petición GET /countries: " + error });
    }
};

module.exports = getAllCountry;