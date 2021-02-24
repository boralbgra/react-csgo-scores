const HLTV = require('hltv-api').default
const Streams = require('../scripts/getStreams');

const getNews = async (req, res) => {
    const news = await HLTV.getNews();
    res.json(news);
}

const byDate = async (req, res) => {
    const matches = await HLTV.getMatches();
    const results = await HLTV.getResults();
    const array = [];
    const result = [];

    matches.forEach(match => {
        array.push(match)
    });

    results.forEach(result => {
        array.push(result)
    });

    array.forEach(item => {
        console.log(item.time.substring(0, 10))
        if (item.time.substring(0, 10) === req.params.date) {
            result.push(item);
        }
    })

    res.json(result);
}

const getEvents = async (req, res) => {
    const matches = await HLTV.getMatches();
    const results = await HLTV.getResults();
    const array = [];
    const send = [];

    matches.forEach(match => {
        array.push(match)
    });

    results.forEach(result => {
        array.push({
            time: result.time,
            link: result.matchId,
            event: {
                name: result.event
            },
            teams: [
                result.team1,
                result.team2
            ],
        })
    });

    array.forEach(event => {
        if (event.event.name.length > 0 && !send.some(eventC => eventC.event === event.event.name)) {
            let xd = {
                event: event.event.name,
                crest: event.event.crest
            }
            send.push(xd);
        }
    })

    res.json(send);
}

const getEventsByDate = async (req, res) => {
    const matches = await HLTV.getMatches();
    const results = await HLTV.getResults();
    const array = [];
    const send = [];

    matches.forEach(match => {
        array.push(match)
    });

    results.forEach(result => {
        array.push({
            time: result.time,
            link: result.matchId,
            event: {
                name: result.event
            },
            teams: [
                result.team1,
                result.team2
            ],
        })
    });

    array.forEach(event => {
        if (event.event.name.length > 0 && event.time.substring(0, 10) === req.params.date && !send.some(eventC => eventC.event === event.event.name)) {
            let xd = {
                event: event.event.name,
                crest: event.event.crest
            }
            send.push(xd);
        }
    })

    res.json(send);
}

const filterByEventByDate = async (req, res) => {
    const matches = await HLTV.getMatches();
    const results = await HLTV.getResults();

    const array = [];
    const send = [];

    matches.forEach(match => {
        array.push({
            id: match.id,
            link: match.link,
            time: match.time,
            event: {
                name: match.event.name,
                crest: match.event.crest
            },
            stars: match.stars,
            map: match.map,
            teams: [
                {
                    name: match.teams[0].name,
                    crest: match.teams[0].crest
                },
                {
                    name: match.teams[1].name,
                    crest: match.teams[1].crest
                },
            ],
            unplayed: true
        })
    });

    results.forEach(result => {
        array.push({
            time: result.time,
            link: result.matchId,
            event: {
                name: result.event
            },
            teams: [
                result.team1,
                result.team2
            ],
            unplayed: false
        })
    });

    Promise.all(array.map(async (event) => {
        if (event.event.name !== undefined && event.event.name.length > 0 && event.event.name.replace(/ /g, '').replace("/", "").replace("#", "").replace("-", "") === req.params.event && event.time.substring(0, 10) === req.params.date) {
            if (event.unplayed) {
                var streamList;
                await Streams.getStreams(event.link, (res) => {
                    streamList = res;
                });

                return {
                    time: event.time,
                    link: event.link,
                    event: {
                        name: event.event
                    },
                    teams: [
                        event.teams[0],
                        event.teams[1]
                    ],
                    stream: streamList,
                    unplayed: event.unplayed
                }

            } else {
                return event;
            }
        }
    })).then((values) => {
        values.forEach(value=> {
            if(value != null)
                send.push(value);
        })
        res.json(send)
    })
}

const getResults = async (req, res) => {
    const results = await HLTV.getResults();
    res.json(results);
}

const getMatches = async (req, res) => {
    const matches = await HLTV.getMatches();
    res.json(matches);
}

module.exports = {
    getNews,
    byDate,
    getEvents,
    getEventsByDate,
    filterByEventByDate,
    getResults,
    getMatches
};