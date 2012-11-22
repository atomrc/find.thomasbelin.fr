define(
    ['vect'],
    function(Vect) {
        var GravityField = function(x, y, size) {
            this.acceleration = new Vect(0, 0);
            this.position = new Vect(x, y);
            this.size = size;
        }

        GravityField.prototype = {
            acceleration: null,
            position: null,
            size: 1,

            update: function(elementPosition) {
                var deltaX = this.position.x - elementPosition.x;
                var deltaY = this.position.y - elementPosition.y;

                var dist = Math.sqrt(
                    Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
                );

                var force = Math.min(this.size / dist, this.size);

                this.acceleration.x = force * deltaX;
                this.acceleration.y = force * deltaY;
            },

            apply: function(physicalElement) {
                this.update(physicalElement.getPosition());
                physicalElement.accelerate(this.acceleration);
            }
        }

        return GravityField;
    }
);
