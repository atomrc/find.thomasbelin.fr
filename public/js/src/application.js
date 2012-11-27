define(
    ['elastodom', 'physicalelement', 'elastic', 'gravity', 'friction', 'requestanimationframe'],
    function(ElastoDom, PhysicalElement, Elastic, gravity, friction, requestAnimationFrame) {
        //the object containing all the application
        var application = {
            container: null,
            rAF:null,
            //launches the application
            init: function() {
                this.rAF = requestAnimationFrame.bind(window);
                var ratio = 0.1;
                var container = document.getElementById('physical-zone');
                this.container = new ElastoDom(container, ratio);
                var links = document.querySelectorAll('.link');
                for(var i=0; i < links.length; i++) {
                    var link = links.item(i);
                    var phyElement = new PhysicalElement(link, {x:4000, y:2500});
                    var elaX = parseInt(getComputedStyle(link, null).getPropertyValue('left')) / ratio;
                    var elaY = parseInt(getComputedStyle(link, null).getPropertyValue('top')) / ratio;
                    var elastic = new Elastic(elaX, elaY, link.dataset.size);
                    phyElement.addForce(elastic);
                    phyElement.addForce(gravity);
                    phyElement.addForce(friction);
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
