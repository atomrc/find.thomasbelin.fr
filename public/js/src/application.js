define(
    ['physical-container', 'physical-element', 'vect', 'elastic', 'gravity', 'friction', 'requestanimationframe'],
    function(PhysicalContainer, PhysicalElement, Vect, Elastic, Gravity, Friction, requestAnimationFrame) {
        //the object containing all the application
        var application = {
            container: null,
            rAF:null,
            //launches the application
            init: function() {
                this.rAF = requestAnimationFrame.bind(window);
                var container = document.getElementById('physical-zone');
                this.container = new PhysicalContainer(container);
                this.container.addForce(new Gravity({acceleration: new Vect(0, 1)}));
                this.container.addForce(new Friction({acceleration: new Vect(0.975, 0.975)}));
                var links = document.querySelectorAll('.link');
                for(var i=0; i < links.length; i++) {
                    var link = links.item(i);
                    var phyElement = new PhysicalElement(link, {x:4000, y:2500}),
                        elaX = parseInt(getComputedStyle(link, null).getPropertyValue('left')),
                        elaY = parseInt(getComputedStyle(link, null).getPropertyValue('top'));
                    var elasticOption = {
                        position: { x: elaX, y: elaY },
                        size: link.dataset.size
                    };
                    var elastic = new Elastic(elasticOption);
                    phyElement.addForce(elastic);
                    this.container.add(phyElement);
                }
            },

            run: function() {
                this.container.update();
                this.container.render();
                this.rAF(this.run.bind(this));
            }
        };

        return application;
    }
);
