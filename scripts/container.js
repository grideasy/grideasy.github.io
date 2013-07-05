function Box(CR) {  //CR is a container
	var grid=Project.states[Project.currentstate].grid;	
	CR.box=document.createElement('span');
	CR.box.container=CR;
	$('contbox').appendChild(CR.box);
	setCRBox(CR);
}

function setCRBox(CR) {
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var gridWHratio=grid.width/grid.height;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	var bs=CR.box.style;
	bs.display="block";
	bs.cssFloat="left";
	bs.overflow="auto";
	if(CR.style.centred) {
		var offset=((100-(CR.columns[name]*cwidth+(CR.columns[name]-1)*2*grid.gutters))/2);
		bs.marginLeft=(offset-parseFloat($("leftspacer").style.width))+"%";
		bs.marginRight=offset+"%";
	}
	else {
		bs.marginLeft=2*grid.gutters+"%"; 
		bs.marginRight="0%"
	}
	bs.marginTop=2*grid.gutters+"%";
	if(CR.columns[name]>grid.columns) {
		CR.columns[name]=grid.columns;
	}
	bs.width=(CR.columns[name]*cwidth +2*(CR.columns[name]-1)*grid.gutters)+"%";
	bs.height=((cwidth*grid.rowratio)*CR.rows[name]+(CR.rows[name]-1)*2*grid.gutters)*gridWHratio+"%";
	bs.backgroundColor=CR.style.backgroundColor;
	CR.text=CR.text||"\t\tLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
	textToHTML(CR);
	CR.box.innerHTML=CR.content;console.log(CR.content);
	setTagStyles(CR,"h1");
	setTagStyles(CR,"h2");
	setTagStyles(CR,"p");
	CR.box.addEventListener("mouseover", function() {this.style.opacity=0.6}, false);
	CR.box.addEventListener("mouseout", function() {this.style.opacity=0.4}, false);
	CR.box.addEventListener("click", function() {setContainer(this)}, false);
	if(CR.box.style.opacity==1) {
		CR.box.addEventListener("mouseout", function() {this.style.opacity=1}, false);
		CR.box.addEventListener("mouseover", function() {this.style.opacity=1}, false);
	}
}

function setContainer(box) {
	if(Project.currentcontainer!=null) {
		var oldbox=Project.currentcontainer.box;
		oldbox.style.opacity=0.4;
		oldbox.addEventListener("mouseover", function() {this.style.opacity=0.6}, false);
		oldbox.addEventListener("mouseout", function() {this.style.opacity=0.4}, false);
	}
	Project.currentcontainer=box.container;
	setContEdit();
	box.style.opacity=1;
	box.addEventListener("mouseout", function() {this.style.opacity=1}, false);
	box.addEventListener("mouseover", function() {this.style.opacity=1}, false);
}

function setTagStyles(CR,tag) {	
	var tags=CR.box.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++) {
		for(var style in CR.style[tag]) {
			tags[i].style[style]=CR.style[tag][style];
		}
	}
}
