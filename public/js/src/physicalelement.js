define(
    ['vect'],
    function(Vect) {

        var PhysicalElement = function(domElement, position) {
            this.element = domElement;
            this.element.classList.add('physical-element');
            this.speed = new Vect(0, 0);
            this.position = new Vect(position.x, position.y);
            this.forces = [];
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

            setPosition: function(position) {
                this.position.x = position.x;
                this.position.y = position.y;
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

            render: function(ratio) {
                var deltaX = (this.position.x * ratio).toFixed(0);
                var deltaY = (this.position.y * ratio).toFixed(0);
                this.element.style.left = deltaX + 'px';
                this.element.style.top = deltaY + 'px';
            }
        };

        return PhysicalElement;
    }
);
