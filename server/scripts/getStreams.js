const axios = require('axios');
const cheerio = require('cheerio');

async function getStreams(link, cb) {
    var result = [];
    await axios.get('https://www.hltv.org' + link)
        .then(function (response) {
            let $ = cheerio.load(response.data);
            const allStreams = $('.streams');
            allStreams.map((_i, element) => {
                const el = $(element);
                const xd = el.find('.stream-box-embed').attr('data-stream-embed')
                const link = xd.substring(34, xd.indexOf('&autoplay'))
                result.push(link)
            })
            cb(result);
        })
        .catch(function (error) {
            console.log(error);
        })
}

module.exports = {
    getStreams
}
