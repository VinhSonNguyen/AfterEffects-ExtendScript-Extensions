// Converts hex string to 0-1 decimal format for AE. Returns string of AE Color
function hexToAEColor(hexString){
    var bigInt = parseInt(hexString.replace("#",""), 16);
    var r = (bigInt >> 16) & 255;
    var g = (bigInt >> 8) & 255;
    var b = bigInt & 255;
    return [r/255,g/255,b/255];
} 



// Converts AE color to hex string. Parameters: AE color array. Returns hex color (string)
function aeColorToHex(aeColor){
    var r = aeColor[0] * 255; var g = aeColor[1] * 255; var b = aeColor[2] * 255;
    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}



// Converts AE color array to normal RGB array
function aeColorToRGB(aeColorArray){
	var r = aeColorArray[0]; var g = aeColorArray[1]; var b = aeColorArray[2];
	return [r*255,g*255,b*255];
}


// Converts RGB array to AE color format. Returns array in AE color format
function rgbToAEColor(rgbArray){
    var r = rgbArray[0]; var g = rgbArray[1]; var b = rgbArray[2];
    return [r/255,g/255,b/255];
} // End rgbToAEColor() function



// Converts RGB array to HSL array
function rgbToHSL(rgbArray){
    var r = rgbArray[0] / 255; var g = rgbArray[1] / 255; var b = rgbArray[2] / 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
    return [h, s, l];
} // End of rgbToHSL() function



// HSL to RGB. Returns RGB array
function hslToRGB(hslArray){
    var r,g,b,h,s,l;
    h = hslArray[0];
    s = hslArray[1];
    l = hslArray[2];

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}
