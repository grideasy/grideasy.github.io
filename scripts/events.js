
function addListeners() {

	// Grid Menu listeners *****************************
	$('butgrid').addEventListener('click', gridmenu, false);
	$('Ncols').addEventListener('change', function() {setNcols(this)}, false);
	$('TMarg').addEventListener('change', function() {setTMarg(this)}, false);
	$('SMargs').addEventListener('change', function() {setSMargs(this)}, false);
	$('Gutts').addEventListener('change', function() {setGutts(this)}, false);
	$('rowH').addEventListener('change', function() {setrowH(this)}, false);
	$('rowsonoff').addEventListener('change', function() {setrowsonoff(this)}, false);
	
	$("butcontainer").addEventListener('click', containermenu, false);
	$("butcontent").addEventListener('click', contentmenu, false);
	$("butstate").addEventListener('click', statemenu, false);
	
	//Container menu listeners ***************************************************
	//$("States").addEventListener('change', function() {setTheState(this)});
	//$("editstates").addEventListener('click', function() {$("stateedit").style.visibility="visible"}, false);
	//$("addstate").addEventListener('click', addrow, false);
	//$("delstate").addEventListener('click', delrow, false);
		
	//State menu listeners ***************************************************
	$("States").addEventListener('change', function() {setTheState(this)}, false);
	$("editstates").addEventListener('click', function() {$("stateedit").style.visibility="visible"}, false);
	$("addstate").addEventListener('click', addrow, false);
	$("delstate").addEventListener('click', delrow, false);
	
	//drop_zone listeners *************************************************
	if(window.File && window.FileReader && window.FileList && window.Blob) {
		dropZone = $('drop_zone');
		dropZone.value="";
		dropZone.addEventListener('dragover', handleDragOver, false);
		dropZone.addEventListener('drop', handleFileSelect, false);
		dropZone.addEventListener('click', storeCursorPosition, false);
		dropZone.addEventListener('keyup', storeCursorPosition, false);
	}
	else {
		

	}
	
	//**************all menus************************
	var closers=getElementsByClassName("close");
	for(var i=0; i<closers.length; i++)
	{
		closers[i].addEventListener('click', clearAllMenus, false);
	}
}

//event listener functions ****************************

//drop_zone listeners **********************************************************
function storeCursorPosition() {
	var dropZone=$('drop_zone');
	dropZone.cursor=dropZone.selectionStart;
	var upto=dropZone.value.slice(0,dropZone.cursor);
	var after=dropZone.value.slice(dropZone.cursor+1);
	var re=/\n/g;
	var uarray=re.exec(upto);
	dropZone.first=re.lastIndex;
	re=/\n/;
	dropZone.last=after.search(re)+dropZone.cursor;
	console.log(dropZone.first,dropZone.last);
}
//grid menu listeners _______________________
function gridmenu() {
	clearAllMenus();
	$('menugrid').style.visibility="visible";
	$('butgrid').style.height='50px';
}

function setNcols(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.columns=parseInt(item.options[item.selectedIndex].text);
	buildGrid();
}

function setTMarg(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.topMargin=parseInt(item.options[item.selectedIndex].text);
	buildGrid();
}

function setSMargs(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.sideMargins=parseInt(item.options[item.selectedIndex].text);
	buildGrid();
}

function setGutts(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.gutters=parseFloat(item.options[item.selectedIndex].text);
	buildGrid();
}

function setrowsonoff(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.rowson=item.checked;
	buildGrid();
}

function setrowH(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.rowratio=parseFloat(item.options[item.selectedIndex].text);
	buildGrid();
}

//state menu listeners *************************************

function statemenu() {
	clearAllMenus();
	$('menustate').style.visibility="visible";
	$('butstate').style.height='50px';
}

function setTheState(item) {
	var ratios=[]
	ratios[25]=0;
	ratios[50]=1;
	ratios[62]=2;
	ratios[100]=3;
	ratios[162]=4;
	cleargridbox();
	Project.currentstate=item.selectedIndex;
	var grid=Project.states[Project.currentstate].grid;
	//Grid Menu Options Set *********************************************
	$('Ncols').options[grid.columns-1].selected="selected";
	$('TMarg').options[grid.topMargin-1].selected="selected";
	$('SMargs').options[grid.sideMargins-1].selected="selected";
	$('Gutts').options[Math.floor(grid.gutters)].selected="selected";
	$('rowH').options[ratios[grid.rowratio*100]].selected="selected";
	$('rowsonoff').checked=grid.rowson;
	
	buildGrid();
}

function addrow() {
	if(Project.states.length>7) {
		alert("Maximum of 8 states already reached.");
		return;
	}
	var r=parseInt($("addstate").row);
	var state=new State();
	state.name="New_State"+(Project.nsc++);
	state.grid.width=Math.round((Project.states[r].grid.width+Project.states[r+1].grid.width)*50)/100;
	state.grid.height=Project.height/Project.dfs;;
	state.grid.columns=Project.states[r].grid.columns;
	state.grid.rows=0;
	state.grid.rowratio=1;
	state.grid.rowson=false;
	state.grid.topMargin=2;
	state.grid.sideMargins=2;
	state.grid.gutters=2;
	Project.states.push(state);
	Project.states.sort(compareBreaks);
	if(Project.currentstate>r) {
		Project.currentstate+=1;
	}
	setStateHTML();
	buildStateTable();
}

function delrow() {
	var r=parseInt($("delstate").row);
	var del=confirm("Delete state "+Project.states[r].name+"?")
	if(del) {
		
		Project.states.splice(r,1);
		Project.states.sort(compareBreaks);
		if(Project.currentstate>r) {
			Project.currentstate-=1;
		}
		setStateHTML();
		buildStateTable();
	}
	else {
		return;
	}
}

//container menu listeners *************************************
function containermenu() {
	clearAllMenus();
	$('menucontainer').style.visibility="visible";
	$('butcontainer').style.height='50px';
}

//content menu listeners *************************************
function contentmenu() {
	clearAllMenus();
	$('menucontent').style.visibility="visible";
	$('butcontent').style.height='50px';
}

function setTheContent(item) {
	$("contentedit").style.visibility="visible"
}

// All mernus ********************************************************
function clearAllMenus() {
	var Mbuttons=getElementsByClassName("leftbutton");
	for(var i=0; i<Mbuttons.length; i++)
	{
		Mbuttons[i].style.height='25px';
	}
	var menus=getElementsByClassName("menu");
	for(var i=0; i<menus.length; i++)
	{
		menus[i].style.visibility="hidden";
	}
	var Edits=getElementsByClassName("edit");
	for(var i=0; i<Edits.length; i++)
	{
		Edits[i].style.visibility="hidden";
	}
}