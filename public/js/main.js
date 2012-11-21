requirejs.config({
    baseUrl: 'js/src',
    paths: {
        app: ''
    }
});

require(
    ['application'],
    function(application) {
        application.init();
        application.run();
    }
);
