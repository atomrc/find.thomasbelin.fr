define(
    [],
    function() {
        if(true) {
            return  window.requestAnimationFrame       ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame    ||
                    window.oRequestAnimationFrame      ||
                    window.msRequestAnimationFrame     ||
                    function( callback ){
                        window.setTimeout(callback, 1000 / 60);
                    };
        }

        return function( callback ){
            window.setTimeout(callback, 1000);
        };

    }
);
