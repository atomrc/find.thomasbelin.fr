requirejs.config({
    baseUrl: 'js/src',
    paths: {
        phygine: '../lib/phygine'
    }
});

require(
    ['application'],
    function(application) {
        application.init();
        application.run();
    }
);
