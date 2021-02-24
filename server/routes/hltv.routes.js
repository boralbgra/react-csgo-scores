const express = require('express');
const router = express.Router();

const hltvCtrl = require('../controllers/hltv.controller')

/**
 * @description /, gets news from HLTV
 * @param {*} rute
 * @param {function()} getNews
 */
router.get('/news', hltvCtrl.getNews);

/**
 * @description /, filters everything by Date
 * @param {*} rute
 * @param {function()} byDate
 */
router.get('/byDate/:date', hltvCtrl.byDate);

/**
 * @description /, gets currents events
 * @param {*} rute
 * @param {function()} getEvents
 */
router.get('/events', hltvCtrl.getEvents);

/**
 * @description /, gets currents events by date
 * @param {*} rute
 * @param {function()} getEventsByDate
 */
router.get('/events/:date', hltvCtrl.getEventsByDate);

/**
 * @description /, get all matches by event and by date
 * @param {*} rute
 * @param {function()} filterByEventByDate
 */
router.get('/filter/:event/:date', hltvCtrl.filterByEventByDate);

/**
 * @description /, gets currents results
 * @param {*} rute
 * @param {function()} getResults
 */
router.get('/results', hltvCtrl.getResults);

/**
 * @description /, gets currents matches
 * @param {*} rute
 * @param {function()} getMatches
 */
router.get('/matches', hltvCtrl.getMatches);


module.exports = router;
