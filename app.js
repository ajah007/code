var Twitter = require('twitter');
var config = require('./config.js');
var T = new Twitter(config);

var params = {
    q: '#SOSNICARAGUA',
    count: 10,
    result_type: 'recent',
};

var rt = function () {
    T.get('search/tweets', params, function (err, data, response) {

        if (err) {
            console.log(err);
            return;
        }
        for (let i = 0; i < data.statuses.length; i++) {
            T.post('statuses/retweet/' + data.statuses[i].id_str, function (error, tweet, response) {
                if (!error) {
                    console.log(tweet.text);
                }else{
                    console.log(error);

                }
            });
        }
    });
}

rt();
setInterval(rt, 45 * 1000);