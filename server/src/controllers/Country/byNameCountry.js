const axios = require("axios")

const byNameCountry = async (req, res)=>{
    const {name} = req.query
    try {
        const response = await axios("http://localhost:3001/countries")
        const filter = response.data.filter((c)=>c.name.toUpperCase().includes(name.toUpperCase()))
        if (filter.length>0) {
            res.status(200).json(filter)
        } else {
            res.status(200).json("Country NOT found")
        }
    } catch (error) {
        res.status(500).json({error: "server error"})
    }
}
module.exports = byNameCountry;