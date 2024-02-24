const {Activity, Country} = require("../../db")

const createActivity = async (req, res)=>{
    const {name, difficulty, duration, season, country} = req.body
    try {
        let [activity, created] = await Activity.findOrCreate({
            where: { name },
            defaults: {name, difficulty, duration, season}
        });
        if (created) {
            await activity.addCountry(country.toUpperCase())
            res.status(201).json("succesfully");
        } else {
            res.status(200).json("already exist");
        }
    } catch (error) {
        res.status(500).json({error: "server error "+error})
    }
}
module.exports = createActivity;