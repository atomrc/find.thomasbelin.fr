define(
    ['vect'],
    function(Vect) {

        var PhysicalElement = function(domElement, position) {
            this.element = domElement;
            this.element.classList.add('physical-element');
            this.speed = new Vect(0, 0);
            this.position = new Vect(position.x, position.y);
            this.size = {};
            this.forces = [];
            this.initEvents();
        }

        PhysicalElement.prototype = {
            element: null,
            speed: null,
            position: null,
            forces: [],
            freezed: false,
            clientPosition: null,

            initEvents: function() {
                var followClient = (function(e) {
                    var newPosition     = new Vect(e.clientX, e.clientY);
                    var diff            = this.clientPosition.subtract(newPosition);
                    this.position       = this.position.subtract(diff);
                    this.clientPosition = newPosition;
                }).bind(this);

                var freeze = (function(e) {
                    this.freeze(e.clientX, e.clientY);
                    document.addEventListener('mousemove', followClient);
                }).bind(this);

                var unfreeze = (function(e) {
                    this.unfreeze();
                    document.removeEventListener('mousemove', followClient);
                }).bind(this);

                this.element.addEventListener('mousedown', freeze);
                this.element.addEventListener('mouseup', unfreeze);
            },

            freeze: function(x, y) {
                this.freezed = true;
                this.speed.x = 0;
                this.speed.y = 0;
                this.clientPosition = new Vect(x, y);
            },

            unfreeze: function() {
                this.freezed = false;
            },

            applyForce: function(force) {
                if(!this.freezed) {
                    force.apply(this);
                }
            },

            update: function() {
                for(var i in this.forces) {
                    var force = this.forces[i];
                    this.applyForce(force);
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

            render: function() {
                var deltaX = this.position.x.toFixed(0);
                var deltaY = this.position.y.toFixed(0);
                this.element.style.left = deltaX + 'px';
                this.element.style.top = deltaY + 'px';
            }
        };

        return PhysicalElement;
    }
);
