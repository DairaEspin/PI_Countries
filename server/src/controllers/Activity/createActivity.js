const { Activity, Country } = require("../../db");

 const createActivity = async (req, res) => {
  try {
     const { name, difficulty, duration, season, pais } =
      req.body;

    const newActivity = await Activity.create({      
        name,       
        difficulty:Number(difficulty),
        duration,
        season,
     });

      const country = await Country.findAll({
        where: { name: pais },
            });

     if (!country || country.length === 0) {
        return res
         .status(404)
          .json({ message: "Country NOT found", success: false });
      }

     // Asocia la actividad al país encontrado.
      await newActivity.setCountries(country);

      res
        .status(201)
        .json({ message: "Created Successfully", success: true });
    } catch (error) {
      console.error("Error Create:", error);
      res
        .status(500)
        .json({ error: "Server Error", success: false });
    }
  };

 module.exports = createActivity;


 //  const {Activity, Country} = require("../../db")

//  const createActivity = async (req, res)=>{
//     const {name, difficulty, duration, season, country} = req.body
//     try {
//           let [activity, created] = await Activity.create({
//              where: { name },
//              defaults: {name, difficulty, duration, season}
//           });
//          if (created) {
//              await activity.addCountry(country.toUpperCase())
//              res.status(201).json("succesfully");
//          } else {
//              res.status(200).json("already exist");
//          }
//       } catch (error) {
//          res.status(500).json({error: "server error "+error})
//       }
//   }
//   module.exports = createActivity;