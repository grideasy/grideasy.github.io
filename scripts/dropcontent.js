function handleDragOver(evt) {		
   evt.stopPropagation();
   evt.preventDefault();
}


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
 
function handleOpenFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
	var f = files[0];
	if (f) 
	{
		var r = new FileReader();
		r.onloadend = function(e) {setProject(e.target.result) }
		r.readAsText(f);
	} 
	else 
	{ 
		alert("Failed to load file"); 
	}
}

function setProject(p) {
	var tmp;
	Project=JSON.parse(p);
	var elm=$("contbox").firstChild;
    var next = findNext(elm);
    while (next) {
        next.parentNode.removeChild(next);
        next = findNext(elm);
    }
	for(var i=0;i<Project.containers.length;i++) {
		CR=Project.containers[i];
		tmp=CR.image.src;
		CR.image.src=null;
		Box(CR);
		CR.image.src=tmp;
		if(CR.image.src!=null) {
			img=new Image();
			img.src=CR.image.src;
			Project.currentcontainer=CR;
			img.addEventListener('load',function() {showImg(this)},false);
			img.addEventListener('error',imgerror,false);
		}
	}
	$("menusaved").style.visibility="hidden";
}
