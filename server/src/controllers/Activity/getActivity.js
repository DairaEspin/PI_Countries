const { Activity, Country } = require("../../db");
const { Op } = require("sequelize");

const getActivity = async (req, res) => {
  try {
    const { activityFilter } = req.query;
    let activities;
    if (activityFilter) {
      activities = await Activity.findAll({
        where: {
          name: {
            [Op.iLike]: `%${activityFilter}%`,
          },
        },
        include:{
          model: Country,
          attributes: ["name", "id"],
          through: {
            attributes: [],
          },
         },
      });
      // activities.addCountry();
    } else {
      activities = await Activity.findAll();
    }

    if (!activities || activities.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron actividades en la base de datos" });
    }

    const activityData = activities.map((act) => ({
      name: act.name,
      difficulty: act.difficulty,
      duration: act.duration,
      season: act.season,
      id: act.id,
    }));
    res.json(activityData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivity;
