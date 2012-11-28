define(
    ['vect', 'Force'],
    function(Vect, Force) {
        var Elastic = function(options) {
            Force.call(this, options);
            this.acceleration = options.acceleration;
        }

        Elastic.prototype = Object.create(new Force(), {

            _apply: {value: function(physicalElement) {
                physicalElement.applyFriction(this.acceleration);
            }},
        });

        return Elastic;
    }
);
