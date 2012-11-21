define(
    [],
    function() {
        // Simple Vector Class
        var Vect = function(x, y) {
            this.x = x;
            this.y = y;
        }

        Vect.prototype.add = function(v) {
            this.x += v.x; 
            this.y += v.y;
        }

        Vect.prototype.subtract = function(v) {
            this.x -= v.x; 
            this.y -= v.y;
        }

        Vect.prototype.scale = function(v) {
            this.x *= v.x;
            this.y *= v.y;
        }

        Vect.prototype.length = function() {
            return Math.sqrt((this.x * this.x) + (this.y * this.y));
        }

        Vect.prototype.normalize = function() {
            var iLen = 1 / this.length();
            return new Vect(this.x * iLen, this.y * iLen);
        }

        return Vect;
    }
);
