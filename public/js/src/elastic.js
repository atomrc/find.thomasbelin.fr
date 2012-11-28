define(
    ['vect', 'Force'],
    function(Vect, Force) {
        var Elastic = function(options) {
            Force.call(this, options);
            this.acceleration = new Vect(0, 0);
            this.position = options.position;
            this.size = options.size;
            if(options.rigidity) 
                this.rigidity = options.rigidity;
            console.log(this.position);
        }

        Elastic.prototype = Object.create(new Force(), {
            position: {value: { x: 0, y: 0 }, writable:true},
            size: {value: 0, writable:true},
            rigidity: {value: 0.001, writable:true},

            _compute: {value: function(physicalElement) {
                var elementPosition = physicalElement.getPosition();
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
            }},
        });

        return Elastic;
    }
);
