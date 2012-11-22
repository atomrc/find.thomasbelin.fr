/*
 * GET home page.
 */

exports.index = function(req, res){
    var links = {
        'doyoubuzz' : {
            url: 'http://doyoubuzz.com/thomas-belin_0',
            position: { x: 1000, y: 100 },
            size: 10
        },
        'twitter' : {
            url: 'https://twitter.com/ThomasBelin4',
            position: { x: 200, y: 500 },
            size: 10
        },
        'github' : {
            url: 'https://github.com/thomasbelin4',
            position: { x: 50, y: 100 },
            size: 10
        },
        'linkedin' : {
            url: 'http://www.linkedin.com/pub/thomas-belin/45/918/3b2',
            position: { x: 100, y: 50 },
            size: 10
        },
        'googleplus' : {
            url: 'https://plus.google.com/118010420630912086698',
            position: { x: 10, y: 10 },
            size: 10
        }
    };
    res.render('index', { links: links });
};
