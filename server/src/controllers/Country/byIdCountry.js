const { Country, Activity } = require("../../db");

const byIdCountry = async (req, res)=>{
    const {id} = req.params
    const idMayus = id.toUpperCase()

    try {
        const country = await Country.findByPk(idMayus, {
            include: {
                model: Activity,
                attributes: ["id", "name", "difficulty", "duration", "season"],
                through: {
                    attributes: []
                }
            }
        });
        if (country) {
            res.status(200).json(country)
        } else {
            res.status(200).json({message: "doesnt exist"})
        }
    } catch (error) {
        res.status(500).json({error: "error "+error})
    }

}
module.exports = byIdCountry;