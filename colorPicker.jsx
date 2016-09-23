// Initiates color picker, returns RGB array
function colorPicker(){
     var initialRGB = [1,1,1];
     var colorInt = 255 * (65536 * initialRGB[0] + 256 * initialRGB[1] + initialRGB[2]);
     var c = $.colorPicker(colorInt);    
     if (c == -1) return;                
     var r = ((c >> 16) & 0xFF) ;
     var g = ((c >> 8) & 0xFF) ;
     var b = (c & 0xFF) ;
     return [r,g,b]
 } // End colorPicker() function
