define(
    ['vect'],
    function(Vect) {
        var Elastic = function(x, y, size) {
            this.acceleration = new Vect(0, 0);
            this.position = new Vect(x, y);
            this.size = size;
        }

        Elastic.prototype = {
            acceleration: null,
            position: null,
            size: 0,
            rigidity: 0.0001,

            update: function(elementPosition) {
                var deltaX      = this.position.x - elementPosition.x;
                var deltaY      = this.position.y - elementPosition.y;

                var dist = Math.sqrt(
                    Math.pow(deltaX, 2) + Math.pow(deltaY, 2)
                );

                if(dist <= this.size) {
                    this.acceleration.y = 0;
                    this.acceleration.x = 0;
                    return;
                }
                var ratio = (dist - this.size) / this.size;

                this.acceleration.x = ratio * deltaX * this.rigidity;
                this.acceleration.y = ratio * deltaY * this.rigidity;
            },

            apply: function(physicalElement) {
                this.update(physicalElement.getPosition());
                physicalElement.accelerate(this.acceleration);
            }
        }

        return Elastic;
    }
);
