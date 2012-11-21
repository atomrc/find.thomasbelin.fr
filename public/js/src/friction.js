define(
    ['vect'],
    function(Vect) {
        var scale = 0.975;
        var frictionVect = new Vect(scale, scale);
        var friction = {
            frictionVect: frictionVect,
            apply: function(physicalElement) {
                physicalElement.applyFriction(this.frictionVect);
            }
        }

        return friction;
    }
);
