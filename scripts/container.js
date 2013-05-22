function Box(CR) {  //CR is a container
	var grid=Project.states[Project.currentstate].grid;	
	CR.box=document.createElement('div');
	CR.box.width=[];
	for(var i=0;i<Project.states.length;i++) {
	CR.box.width[i]=Project.states[i].grid.columns;
	}
	CR.rows=Math.ceil(1/grid.rowratio);
	//CR.box.style.display="block";
	CR.box.style.cssFloat="left";
	CR.box.style.overflow="auto";
	setCRBox(CR);
	$('contbox').appendChild(CR.box);
}

function setCRBox(CR) {
	var grid=Project.states[Project.currentstate].grid;
	var gridWHratio=grid.width/grid.height;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	var bs=CR.box.style;
	bs.marginLeft=2*grid.gutters+"%";
	bs.marginTop=2*grid.gutters+"%";
	//bs.marginRight=grid.gutters+"%";
	//bs.marginBottom=grid.gutters+"%";
	if(CR.box.width[Project.currentstate]>grid.columns) {
		CR.box.width[Project.currentstate]=grid.columns;
	}
	bs.width=(CR.box.width[Project.currentstate]*cwidth +2*(CR.box.width[Project.currentstate]-1)*grid.gutters)+"%";
	bs.height=((cwidth*grid.rowratio)*CR.rows+(CR.rows-1)*2*grid.gutters)*gridWHratio+"%";
	bs.backgroundColor="#00FF00";
	
	var content=CR.content||"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
	CR.box.innerHTML=content;
}
