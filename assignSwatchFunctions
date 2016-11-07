// Assign color swatches their function
    function assignSwatchFunction(){
        for(var i = 0; i < colorSwatches.length; i++){

            // onClick forLoop closure
            colorSwatches[i].onClick = (function(index){
                return function(){
                    var keyState = ScriptUI.environment.keyboardState;
                    if(keyState.shiftKey){
                        var newColor = colorPicker(colorPalette[index]);
                        colorPalette[index] = newColor;
                        updateColorSwatch(colorSwatches[index], newColor);

                        // Save current color palette & base color to load on launch
                        saveColorPalette(colorPalette);
                        app.settings.saveSetting(scriptTitle, "Last base color", "[" + baseColorRGB.toString() + "]");
                    } else if (keyState.altKey){

                        // If a generated color swatch was removed, we need to remove it from colorSwatchGenerateredIndex[], and adjust all values that are greater by -1
                        var generateredIndex = colorSwatches.indexOf(this);

                        	//alert(colorSwatchesGeneratedIndexes.toString());
                        	if(colorSwatchesGeneratedIndexes.indexOf(generateredIndex) == -1){ // Did not remove a generated swatch
                        		//alert("Removing a NON generated one...");
                        		for(var i = 0; i < colorSwatchesGeneratedIndexes.length; i++){
                        			if(generateredIndex < colorSwatchesGeneratedIndexes[i]){
                        				colorSwatchesGeneratedIndexes[i] -= 1;
                        			}
                        		}
                        		//alert(colorSwatchesGeneratedIndexes.toString());
                        	} else { // Did remove a generated swatch
                        		//alert("Removing a generated one...");
                        		//alert("Before...\n\n" + colorSwatchesGeneratedIndexes.toString());
                        		colorSwatchesGeneratedIndexes.splice(colorSwatchesGeneratedIndexes.indexOf(generateredIndex),1);
                        		for(var i = 0; i < colorSwatchesGeneratedIndexes.length; i++){
                        			if(colorSwatchesGeneratedIndexes[i] > generateredIndex){
                        				colorSwatchesGeneratedIndexes[i] -= 1;
                        			}
                        		}
                        		//alert("After...\n\n" + colorSwatchesGeneratedIndexes.toString());
                        	}


                        // Remove the color swatch from UI and remove the color from colorPalette
                        removeColorSwatch(colorSwatches.indexOf(this),myPalette.grp.mainGroup.colorGroup);
     
                        //alert("About to save colorSwatchesGeneratedIndexes \n\n " + colorSwatchesGeneratedIndexes.toString());
                        app.settings.saveSetting(scriptTitle, "Last colorSwatchesGeneratedIndexes", "[" + colorSwatchesGeneratedIndexes.toString() + "]");
                        saveColorPalette(colorPalette);

                        refresh.call(myPalette);
                    } else {
                        changeFillStrokeColors(colorPalette[index], "Color " + (index+1));
                    }
                }
            })(i);
        }   
    } // End assignSwatchFunction()
