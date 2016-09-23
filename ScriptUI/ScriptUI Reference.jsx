
var myWin = new Window("palette", "My Window", undefined);  
  myWin.orientation = "row";  
  
  
var groupOne = myWin.add("group", undefined, "GroupOne");  
  groupOne.orientation = "column";  
  groupOne.add("button", undefined, "Button");  
  groupOne.add("checkbox", undefined, "CheckBox");  
  groupOne.add("radiobutton", undefined, "RadioButton");  
  var dd = groupOne.add("dropdownlist", undefined, ["Item 1", "Item 2", "Item 3"]);  
  dd.selection = 2;  
  var pb = groupOne.add("progressbar", undefined, "ProgressBar");  
  pb.value = 50;  
  
  
var groupTwo = myWin.add("group", undefined, "GroupTwo");  
  groupTwo.orientation = "column";  
  //groupTwo.add("iconbutton", undefined, "~/Desktop/Alert.png", "IconButton");  
  //groupTwo.add("image", undefined, "~/Desktop/Alert.png");  
  groupTwo.add("statictext", undefined, "My custom text");  
  groupTwo.add("edittext", undefined, "My default text");  
  var s = groupTwo.add("slider", undefined, "Slider");  
  s.value = 60;  
  groupTwo.add("scrollbar", undefined, "Scrollbalr");  
  
  
var panelOne = myWin.add("panel", undefined, "My panel");  
  panelOne.add("button", undefined, "Button 1");  
  panelOne.add("button", undefined, "Button 2");  
  panelOne.add("button", undefined, "Button 3");  
  panelOne.add("button", undefined, "Button 4");  
  
  
var myTab = myWin.add("tabbedpanel", undefined, "");  
  var tabContent1 = myTab.add("tab", undefined, "Tab1");  
  tabContent1.add("button", undefined, "My button in the tab");  
  var tabContent2 = myTab.add("tab", undefined, "Tab2");  
  tabContent2.add("radiobutton", undefined, "My radio button");  
  var tabContent3 = myTab.add("tab", undefined, "Tab3");  
  
  
var groupThree = myWin.add("group", undefined, "GroupThree");  
  groupThree.orientation = "column";  
  groupThree.add("listbox", undefined, ["Item 1", "Item 2", "Item 3"]);  
  var myMultiColumnList = groupThree.add("listbox", undefined, "My Listbox",{  
     numberOfColumns: 3,  
     showHeaders: true,  
     columnTitles: ["Column 1", "Column 2", "Column 3"]  
  });  
  var myItems = myMultiColumnList.add("item", "Item 1");  
  myItems.subItems[0].text = "Item 2";  
  myItems.subItems[1].text = "Item 3";  
  
  
var groupFour = myWin.add("group", undefined, "GroupFour");  
  groupFour.orientation = "column";  
  var myTree = groupFour.add("treeview", undefined, ["Item 1", "Item 2", "Item 3"], "MyTreeView");  
  
  
  var myMultiTree = groupFour.add("treeview", [0, 0, 200, 75], "My Tree View");  
  var myTreeItems = myMultiTree.add("node", "Item 1");  
  var myNode = myTreeItems.add("node", "Item 2");  
  myNode.add("item", "Item 3");  
  
myWin.center()  
myWin.show();  
