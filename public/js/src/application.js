define(
    ['phygine'],
    function(Phygine) {
        //the object containing all the application
        var application = {
            //launches the application
            init: function() {
                var container = document.getElementById('physical-zone');
                this.container = new Phygine.PhysicalContainer(container);
                this.container.addForce(new Phygine.Gravity({acceleration: new Phygine.Vect(0, 1)}));
                this.container.addForce(new Phygine.Friction({acceleration: new Phygine.Vect(0.975, 0.975)}));
                var links = document.querySelectorAll('.link');
                for(var i=0; i < links.length; i++) {
                    var link = links.item(i);
                    var phyElement = new Phygine.PhysicalElement(link, {x:4000, y:2500}),
                        elaX = parseInt(getComputedStyle(link, null).getPropertyValue('left')),
                        elaY = parseInt(getComputedStyle(link, null).getPropertyValue('top'));
                    var elasticOption = {
                        position: { x: elaX, y: elaY },
                        size: link.dataset.size
                    };
                    var elastic = new Phygine.Elastic(elasticOption);
                    phyElement.addForce(elastic);
                    this.container.add(phyElement);
                }
            },

            run: function() {
                this.container.run();
            }
        };

        return application;
    }
);
