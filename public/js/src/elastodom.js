define(
    ['physicalelement'],
    function(PhysicalElement) {
        var ElastoDom = function(container) {
            this.container = container;
            this.height = parseInt(getComputedStyle(this.container, null).getPropertyValue('height'));
            this.width = parseInt(getComputedStyle(this.container, null).getPropertyValue('width'));
            this.container.classList.add('elasto-container');
        }

        ElastoDom.prototype = {
            container: null,
            height: 0,
            width: 0,
            elements: [],

            add: function(physicalElement) {
                var randomX = parseInt(Math.random() * this.width);
                physicalElement.setPosition({x: randomX, y: 0});
                this.elements.push(physicalElement);
            },

            update: function() {
                for(var elIndex in this.elements) {
                    var element = this.elements[elIndex];
                    element.move();
                }
            },

            render: function() {
                for(var elIndex in this.elements) {
                    var element = this.elements[elIndex];
                    element.render();
                }
            }
        };

        return ElastoDom;
    }
);
