/*global Phygine, document*/
var application = (function (doc) {
    'use strict';
    return {
        init: function () {
            var container = doc.getElementById('physical-zone'),
                links = doc.querySelectorAll('.link'),
                link,
                phyElement,
                elasticOptions,
                elastic,
                i;
            this.container = new Phygine.PhysicalContainer(container);
            this.container.addForce(new Phygine.Gravity({acceleration: new Phygine.Vect(0, 1)}));
            this.container.addForce(new Phygine.Friction({acceleration: new Phygine.Vect(0.975, 0.975)}));
            for(i = 0; i < links.length; i++) {
                link = links.item(i);
                phyElement = new Phygine.PhysicalElement(link, {x: 4000, y: 2500});
                elasticOptions = {
                    position: {
                        x: parseInt(getComputedStyle(link, null).getPropertyValue('left'), 10),
                        y: parseInt(getComputedStyle(link, null).getPropertyValue('top'), 10)
                    },
                    size: link.dataset.size
                };
                elastic = new Phygine.Elastic(elasticOptions);
                phyElement.addForce(elastic);
                this.container.add(phyElement);
            }
        },

        run: function () {
            this.container.run();
        }
    };
}(document));

application.init();
application.run();
