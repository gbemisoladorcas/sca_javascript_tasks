//close button
var MyList = document.getElementsByTagName('li');
var index;
for(index = 0; index < MyList.length; index++){
  var aSpanTag = document.createElement("SPAN");
  var someTxt = document.createTextNode("\u00D7");
  aSpanTag.className = "close";
  aSpanTag.appendChild(someTxt);
  MyList[index].appendChild(aSpanTag);
}


var closeButton = document.getElementsByClassName("close");
for(i = 0; i < closeButton.length; i++){
  closeButton[i].onclick = function(){
    var theDiv = this.parentElement;
    theDiv.style.display = "none"; 
  }
}
//Adding to the list
function createNewElement(){
  var li = document.createElement('li');
  var theInputValue = document.getElementById("myInput").value;
  var textNode = document.createTextNode(theInputValue);
  li.appendChild(textNode);

  if (theInputValue === '') {
    alert("It is empty, write something")
  } else {
    document.getElementById("myList").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var thePanTag = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  thePanTag.className = "close";
  thePanTag.appendChild(txt);
  li.appendChild(thePanTag);


}

