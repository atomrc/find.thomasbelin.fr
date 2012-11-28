define(
    ['Vect'],
    function(Vect) {
        var Force = function(options) {
            this.options = options;
            this.acceleration = new Vect(0, 0);
            this.init();
        };

        Force.prototype = {
            acceleration: null,

            init: function() {},

            apply: function(physicalElement) {
                this._compute(physicalElement);
                this._apply(physicalElement);
            },

            //compute the new acceleration depending on the position of the physical element
            _compute: function (physicalElement) {},

            _apply: function (physicalElement) {
                physicalElement.accelerate(this.acceleration);
            },
        };

        return Force;
    }
);
