define(
    ['elastodom', 'physicalelement', 'elastic', 'gravity', 'friction', 'requestanimationframe'],
    function(ElastoDom, PhysicalElement, Elastic, gravity, friction, requestAnimationFrame) {
        //the object containing all the application
        var application = {
            container: null,
            //launches the application
            init: function() {
                var container = document.getElementById('container');
                this.container = new ElastoDom(container);
                var links = document.querySelectorAll('.link');
                for(var i=0; i < links.length; i++) {
                    var link = links.item(i);
                    var phyElement = new PhysicalElement(link);
                    phyElement.addForce(new Elastic(link.dataset.x, link.dataset.y, link.dataset.size));
                    phyElement.addForce(gravity);
                    phyElement.addForce(friction);
                    this.container.add(phyElement);
                }
            },

            run: function() {
                this.container.update();
                this.container.render();
                requestAnimationFrame(this.run.bind(this));
            }
        };

        return application;
    }
);
