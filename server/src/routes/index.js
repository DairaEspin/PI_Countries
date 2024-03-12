const { Router } = require("express");

const getAllCountries = require ('../controllers/Country/getAllCountry');
const createActivity = require ('../controllers/Activity/createActivity');
const getActivity = require ('../controllers/Activity/getActivity');
const byNameCountry = require ('../controllers/Country/byNameCountry');
const byIdCountry = require ('../controllers/Country/byIdCountry');

const router = Router();

router.get('/countries', getAllCountries);
router.post('/create', createActivity);
router.get('/activity', getActivity);
router.get('/name', byNameCountry);
router.get('/:id', byIdCountry);

module.exports = router;