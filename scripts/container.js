function Box(CR) {  //CR is a container
	var grid=Project.states[Project.currentstate].grid;	
	CR.box=document.createElement('div');
	CR.box.width=[];	
	for(var i=0;i<Project.states.length;i++) {
	CR.box.width[i]=Project.states[i].grid.columns;
	}
	$('contbox').appendChild(CR.box);
	setCRBox(CR);
}

function setCRBox(CR) {
	var grid=Project.states[Project.currentstate].grid;
	var gridWHratio=grid.width/grid.height;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	CR.rows=Math.ceil(1/grid.rowratio);
	var bs=CR.box.style;
	bs.cssFloat="left";
	bs.overflow="auto";
	bs.marginLeft=2*grid.gutters+"%";
	bs.marginTop=2*grid.gutters+"%";
	if(CR.box.width[Project.currentstate]>grid.columns) {
		CR.box.width[Project.currentstate]=grid.columns;
	}
	bs.width=(CR.box.width[Project.currentstate]*cwidth +2*(CR.box.width[Project.currentstate]-1)*grid.gutters)+"%";
	bs.height=((cwidth*grid.rowratio)*CR.rows+(CR.rows-1)*2*grid.gutters)*gridWHratio+"%";
	bs.backgroundColor=CR.styles.backgroundColor;
	
	var content=CR.content||"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
	CR.box.innerHTML=content;
	setTagStyles(CR,"h1");
	setTagStyles(CR,"h2");
	setTagStyles(CR,"p");
	CR.box.addEventListener("mouseover", function() {this.style.opacity=0.6}, false);
	CR.box.addEventListener("mouseout", function() {this.style.opacity=0.4}, false);
	CR.box.addEventListener("click", function() {setContainer(this)}, false);
}

function setContainer(box) {
	if(Project.currentcontainer!=null) {
		var oldbox=Project.currentcontainer;
		oldbox.style.opacity=0.4;
		oldbox.addEventListener("mouseover", function() {this.style.opacity=0.6}, false);
		oldbox.addEventListener("mouseout", function() {this.style.opacity=0.4}, false);
	}
	Project.currentcontainer=box
	box.style.opacity=1;
	box.addEventListener("mouseout", function() {this.style.opacity=1}, false);
	box.addEventListener("mouseover", function() {this.style.opacity=1}, false);
}

function setTagStyles(CR,tag) {	
	var tags=CR.box.getElementsByTagName(tag);
	for(var i=0;i<tags.length;i++) {
		for(var style in CR.styles[tag]) {
			console.log(i,tags[i].innerHTML);
			console.log(i,style, CR.styles[tag][style]);
			//tags[i].setAttribute(style, CR.styles[tag][style]);
			tags[i].style[style]=CR.styles[tag][style];
			console.log(i,tags[i].style.color);
		}
	}
}
