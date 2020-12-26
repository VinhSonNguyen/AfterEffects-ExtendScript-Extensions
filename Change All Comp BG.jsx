// Loops through and changes all the composition backgrounds in the project to selected color from native OS colorpicker. 
function setAllCompBG(){
    var color = hexToAEColor($.colorPicker());
    for (var i = 1; i <= app.project.numItems; i++){
        if (app.project.item(i) instanceof CompItem){
            app.project.item(i).bgColor = color;
        }
    }
    function hexToAEColor(hex){
        var r = hex >> 16;var g = hex >> 8 & 0xFF;var b = hex & 0xFF;
        return [r/255,g/255,b/255];
    }
}
setAllCompBG();
