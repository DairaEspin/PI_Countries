const {Activity, Country} = require ("../../db");

const getActivity = async (req, res)=>{
    try {
        const data = await Activity.findAll({
            include: {
                model: Country,
                attributes: ["id"],
                through: {
                attributes: []
                }
            }
        })
        if (data.length>0) {
            res.status(200).json(data)
        } else {
            res.status(200).json("Doesnt exist")
        }
    } catch (error) {
        res.status(500).json({error: "server error "+error})
    }
}
module.exports = getActivity;