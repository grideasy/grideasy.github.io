function $(id) {
	return document.getElementById(id);
}

function main() {
	var dfs=getDefaultFontSize();
	Project.default_breaks.push(960/dfs);
	setStates();
	buildGrid();
}

function getDefaultFontSize() {
 	parent=document.body;
 	var M=$('defaultEm');
 	var fs=M.offsetHeight;
	parent.removeChild(M);
 	return fs;
}

function setStates() {
	for(var i=0;i<Project.default_breaks.length;i++) {
		state=new State();
		state.grid.width=Project.default_breaks[i];
		state.grid.height=0.5625*state.grid.width;
		Project.states.push(state);
	}
}

function buildGrid() {
	var col;
	var grid=Project.states[Project.currentstate].grid;
	$("gridbox").style.width=grid.width+"em";
	setBox("topmargin",0,0,100,grid.topMargin,'#999999');
	setBox("leftmargin",0,0,grid.sideMargins,100,'#999999');
	setBox("rightmargin",100-grid.sideMargins,0,grid.sideMargins,100,'#999999');
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage
	var cwidth=(100-totalHorSpace)/grid.columns //percentage
	var cleft=grid.sideMargins+grid.gutters;
	var ctop=grid.topMargin+grid.gutters;
	var cheight=100-ctop;
	for (var i=0;i<grid.columns;i++) {
		col=document.createElement('div');
		col.id="col"+i;
		$('gridbox').appendChild(col);
		setBox(col.id,cleft,ctop,cwidth,cheight,'#F0AA8C');
		cleft+=cwidth+2*grid.gutters;
	}
	
	function setBox(id,left,top,width,height,colour) {
		var box=$(id).style;
		box.left=(left*grid.width/100)+"em";
		box.top=(top*grid.height/100)+"em";
		box.width=(width*grid.width/100)+"em";
		box.height=(height*grid.height/100)+"em";
		box.backgroundColor=colour;
	}
}

