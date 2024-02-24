const axios = require("axios");
const { Country } = require("../../db");

const getAllCountry = async (updateDatabase = false) => {
    const dataDB = await Country.findAll();

    if (dataDB.length === 0 || updateDatabase) {
        const { data } = await axios.get("http://localhost:5000/countries");
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

        if (updateDatabase) {
            await Country.bulkCreate(objCountry);
        }

        return objCountry;
    } else {
        return dataDB;
    }
};

module.exports = getAllCountry;
