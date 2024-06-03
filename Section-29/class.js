


class Color{
    constructor(r,g,b,name){
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
        this.calchsl()
    }
    innerRGB(){
        const { r,g,b } = this
        return `${r},${g},${b}`
    }
    rgb(){
        return `rgb(${this.innerRGB()})`
    }
    rgba(a=1.0){
        return `rgba(${this.innerRGB()},${a})`
    }
    hex(){
        const { r,g,b } = this
        return '#' + ( ( 1 << 24 ) + ( r << 16 ) + ( g << 8 ) + b ).toString(16).slice(1)
    }
    hsl(){
        const { h,s,l } = this 
        return `hsl(${h},${s}%,${l}%)`
    }
    calchsl() {
        // see https://en.wikipedia.org/wiki/HSL_and_HSV#Formal_derivation
        // convert r,g,b [0,255] range to [0,1]
        let { r,g,b } = this
        r = r / 255,
        g = g / 255,
        b = b / 255;
        // get the min and max of r,g,b
        var max = Math.max(r, g, b);
        var min = Math.min(r, g, b);
        // lightness is the average of the largest and smallest color components
        var lum = (max + min) / 2;
        var hue;
        var sat;
        if (max == min) { // no saturation
            hue = 0;
            sat = 0;
        } else {
            var c = max - min; // chroma
            // saturation is simply the chroma scaled to fill
            // the interval [0, 1] for every combination of hue and lightness
            sat = c / (1 - Math.abs(2 * lum - 1));
            switch(max) {
                case r:
                    hue = (g - b) / c;
                    hue = ((g - b) / c) % 6;
                    hue = (g - b) / c + (g < b ? 6 : 0);
                    break;
                case g:
                    hue = (b - r) / c + 2;
                    break;
                case b:
                    hue = (r - g) / c + 4;
                    break;
            }
        }
        hue = Math.round(hue * 60); // °
        sat = Math.round(sat * 100); // %
        lum = Math.round(lum * 100); // %
        this.h = hue
        this.s = sat
        this.l = lum
    }
}

const pink = new Color(234,123,231,'white') 
