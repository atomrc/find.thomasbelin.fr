
/*
 * GET home page.
 */

exports.index = function(req, res){
    var links = {
        //'doyoubuzz' : 'http://doyoubuzz.com/thomas-belin_0',
        'twitter' : 'https://twitter.com/ThomasBelin4',
        //'github' : 'https://github.com/thomasbelin4',
        //'linkedin' : 'http://www.linkedin.com/pub/thomas-belin/45/918/3b2',
        //'google+' : 'https://plus.google.com/118010420630912086698',
    };
    res.render('index', { links: links });
};
