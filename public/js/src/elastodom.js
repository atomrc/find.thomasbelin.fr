define(
    ['physicalelement'],
    function(PhysicalElement, gravity) {
        var ElastoDom = function(container) {
            this.container = container;
            this.container.classList.add('elasto-container');
        }

        ElastoDom.prototype = {
            container: null,
            elements: [],

            add: function(elasticElement) {
                this.elements.push(elasticElement);
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
