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

function openTextFile() {
	setProject($("notDnD").value);
}

function setProject(p) {
	var tmp;
	cleargridbox();
	var curstate=Project.currentstate;
	Project=JSON.parse(p);
	Project.currentstate=curstate;
	var elm=$("contbox").firstChild;
    var next = findNextSpan(elm);  //topspacer
    next=findNextSpan(next); //leftspacer
    next=findNextSpan(next); //first container if any exist
    while (next) {   	
        next.parentNode.removeChild(next);
        next = findNextSpan(elm);  //topspacer
    	next=findNextSpan(next); //leftspacer
    	next=findNextSpan(next); //first container if any exist
    }
	for(var i=0;i<Project.containers.length;i++) {
		CR=Project.containers[i];
		tmp=CR.image.src;
		CR.image.src=null; //so that Box does not try to deal with an unloaded image
		Box(CR);
		CR.box.style.opacity=0.4;
		CR.image.src=tmp; //reset image source
		if(CR.image.src!=null) {
			img=new Image();
			img.src=CR.image.src;
			img.container=CR
			img.addEventListener('load',function() {showContImg(this)},false);
			img.addEventListener('error',imgerror,false);
		}
	}
	currentcontainers=[CR];
	setContainer(false,CR.box);
	setContEdit();
	buildGrid(1);
	$("menusaved").style.visibility="hidden";
	$("menusavednotDnD").style.visibility="hidden";
}

function showContImg(img) {
	img.container.image.src=img.src;
	img.container.image.object=img;
	textToHTML(img.container);
	delete img["container"];
}
