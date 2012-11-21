define(
    ['vect'],
    function(Vect) {
        var gVect = new Vect(0, 0.98);
        var gravity = {
            acceleration : gVect,

            apply: function(physicalElement) {
                physicalElement.accelerate(this.acceleration);
            }
        }

        return gravity;
    }
);
