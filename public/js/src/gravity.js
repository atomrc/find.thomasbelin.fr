define(
    ['vect', 'force'],
    function(Vect, Force) {
        var Gravity = function (options) {
            Force.call(this, options);
            this.acceleration = options.acceleration;
        }

        Gravity.prototype = Object.create(new Force(), {});

        return Gravity;
    }
);
