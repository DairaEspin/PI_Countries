const { Activity } = require("../../db");
const { Op } = require("sequelize");

const getActivity = async (req, res) => {
  try {
    const { activityFilter } = req.query;
    let activity;
    if (activityFilter) {
      activity = await Activity.findAll({
        where: {
          nombre: {
            [Op.iLike]: `%${activityFilter}%`,
          },
        },
      });
    } else {
      activity = await Activity.findAll();
    }

    if (!activity || activity.length === 0) {
      return res
        .status(404)
        .json({ message: "No se encontraron actividades en la base de datos" });
    }

    const activityData = activity.map((act) => ({
      name: act.name,
      difficulty: act.difficulty,
      duration: act.duration,
      season: act.season,
      pais: act.pais
    }));
    res.json(activityData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getActivity;
