define(
    ['Vect', 'physicalElement'],
    function(Vect, PhysicalElement) {
        var PhysicalContainer = function(container) {
            this.container = container;
            this.height = parseInt(getComputedStyle(this.container, null).getPropertyValue('height'));
            this.width = parseInt(getComputedStyle(this.container, null).getPropertyValue('width'));
            this.container.classList.add('elasto-container');
            this.elements = [];
            this.forces = [];
            window.ondragstart = function() { return false; }
        }

        PhysicalContainer.prototype = {
            container: null,
            height: 0,
            width: 0,
            elements: [],
            forces: [],

            addForce: function(force) {
                this.forces.push(force);
            },

            add: function(physicalElement) {
                var randomX = parseInt(Math.random() * this.width);
                physicalElement.setPosition({x: randomX, y: 0});
                this.elements.push(physicalElement);
            },

            update: function() {
                for(var elIndex in this.elements) {
                    var element = this.elements[elIndex];
                    this._applyForces(element);
                    element.update();
                }
            },

            render: function() {
                for(var elIndex in this.elements) {
                    var element = this.elements[elIndex];
                    element.render();
                }
            },

            _applyForces: function(element) {
                for(var fi in this.forces) {
                    var force = this.forces[fi];
                    element.applyForce(force);
                }
            },
        };

        return PhysicalContainer;
    }
);
