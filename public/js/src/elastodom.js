define(
    ['physicalelement'],
    function(PhysicalElement) {
        var ElastoDom = function(container, ratio) {
            this.container = container;
            this.height = parseInt(getComputedStyle(this.container, null).getPropertyValue('height'));
            this.width = parseInt(getComputedStyle(this.container, null).getPropertyValue('width'));
            this.container.classList.add('elasto-container');
            this.ratio = ratio;
        }

        ElastoDom.prototype = {
            container: null,
            height: 0,
            width: 0,
            elements: [],

            add: function(physicalElement) {
                var randomX = parseInt(Math.random() * this.width) / this.ratio;
                var randomY = 0; //parseInt(Math.random() * this.height) / this.ratio;
                physicalElement.setPosition({x: randomX, y: randomY});
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
                    element.render(this.ratio);
                }
            }
        };

        return ElastoDom;
    }
);
