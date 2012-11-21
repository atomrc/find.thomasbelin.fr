define(
    ['vect'],
    function(Vect) {

        var PhysicalElement = function(domElement) {
            this.element = domElement;
            this.element.classList.add('physical-element');
            this.speed = new Vect(0, 0);
            this.position = new Vect(0, 0);
        }

        PhysicalElement.prototype = {
            element: null,
            speed: null,
            position: null,
            forces: [],

            move: function() {
                for(var i in this.forces) {
                    var force = this.forces[i];
                    force.apply(this);
                }
                this.position.add(this.speed);
            },

            // add a force that will apply on the element on each frame of the application
            addForce: function(force) {
                this.forces.push(force);
            },

            getPosition: function() {
                return this.position;
            },

            accelerate: function(vect) {
                this.speed.add(vect);
            },

            applyFriction: function(vect) {
                this.speed.scale(vect);
            },

            render: function() {
                var deltaX = this.position.x;
                var deltaY = this.position.y;
                this.element.style.left = deltaX + 'px';
                this.element.style.top = deltaY + 'px';
            }
        };

        return PhysicalElement;
    }
);
