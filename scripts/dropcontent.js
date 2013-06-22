function handleDragOver(evt) {		
   evt.stopPropagation();
   evt.preventDefault();
}
/*
function handleBodyDrop(evt) {	
	evt.stopPropagation();
    evt.preventDefault();
}
*/
function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
	var f = files[0];
	if (f) 
	{
		var r = new FileReader();
		r.onloadend = function(e) {extract(e.target.result) }
		r.readAsText(f);
	} 
	else 
	{ 
		alert("Failed to load file"); 
	}
}


 function extract(a) {
	 $('text_zone').value=a;
 }