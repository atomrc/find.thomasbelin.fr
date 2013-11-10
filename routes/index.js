/*
 * GET home page.
 */

exports.index = function(req, res){
    var links = {
        'doyoubuzz' : {
            url: 'http://doyoubuzz.com/thomas-belin_0',
            size: 20
        },
        'twitter' : {
            url: 'https://twitter.com/ThomasBelin4',
            size: 20
        },
        'github' : {
            url: 'https://github.com/thomasbelin4',
            size: 20
        },
        'linkedin' : {
            url: 'http://www.linkedin.com/pub/thomas-belin/45/918/3b2',
            size: 20
        },
        'googleplus' : {
            url: 'https://plus.google.com/118010420630912086698?rel=author',
            size: 20
        },
        'blog' : {
            url: 'http://blog.thomasbelin.fr',
            size: 20
        }
    };
    res.render('index', { links: links });
};
