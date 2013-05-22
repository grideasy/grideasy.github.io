
function addListeners() {
	// Menu listeners ***********************************************
	$('butgrid').addEventListener('click', gridmenu, false);
	$("butcontainer").addEventListener('click', containermenu, false);
	$("butcontent").addEventListener('click', contentmenu, false);
	$("butstate").addEventListener('click', statemenu, false);
	
	//Project Menu listeners *****************************************
	$('rowH').addEventListener('change', function() {setrowH(this)}, false);
	
	// Grid Menu listeners *****************************
	$('Ncols').addEventListener('change', function() {setNcols(this)}, false);
	$('TMarg').addEventListener('change', function() {setTMarg(this)}, false);
	$('SMargs').addEventListener('change', function() {setSMargs(this)}, false);
	$('Gutts').addEventListener('change', function() {setGutts(this)}, false);
	
		
	//Container menu listeners ***************************************************
	//$("States").addEventListener('change', function() {setTheState(this)});
	//$("editstates").addEventListener('click', function() {$("stateedit").style.visibility="visible"}, false);
	//$("addstate").addEventListener('click', addrow, false);
	//$("delstate").addEventListener('click', delrow, false);
	
	//Content menu listeners *************************************************
	$("tabright").addEventListener('click', addlevel, false);
	$("tabback").addEventListener('click', dellevel, false);
	$("showbreaks").addEventListener('change',function() {showcontainers(this)},false);
	$("pushto").addEventListener('click', function() {tocont(this)}, false);
		
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

//event listener functions ******************************************************************

//drop_zone listeners ****************************************
function storeCursorPosition() {
	var dropZone=$('drop_zone');
	dropZone.cursor=dropZone.selectionStart;
	var upto=dropZone.value.slice(0,dropZone.cursor);
	var after=dropZone.value.slice(dropZone.cursor+1);
	var re=/\n/g;
	dropZone.first=0;
	while (re.test(upto)) {
		dropZone.first=re.lastIndex;
	}
	re=/\n/;
	dropZone.last=after.search(re)+dropZone.cursor;
	var tabs=(dropZone.value.charCodeAt(dropZone.first)==9)+(dropZone.value.charCodeAt(dropZone.first+1)==9);
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
	}
}
// project menu listeners ____________________________-
function projectmenu() {
	clearAllMenus();
	$('menuproject').style.visibility="visible";
	$('butproject').style.height='50px';
}

function setrowH(item) {
	cleargridbox();
	Project.states[Project.currentstate].grid.rowratio=parseFloat(item.options[item.selectedIndex].text);
	buildGrid();
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


//content menu listeners ************************************
function contentmenu() {
	clearAllMenus();
	$('menucontent').style.visibility="visible";
	$('butcontent').style.height='50px';
}

function addlevel() {
	var psa=$("drop_zone").first; // paragraph start at
	var txt=$("drop_zone").value;
	var tabs=(txt.charCodeAt(psa)==9)+(txt.charCodeAt(psa+1)==9);
	tabs+=1;
	var upto=txt.slice(0,psa)+"\t";
	var after=txt.slice(psa);
	$("drop_zone").value=upto+after;
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
	}
}

function dellevel() {
	var psa=$("drop_zone").first; // paragraph start at
	var txt=$("drop_zone").value;
	var tabs=(txt.charCodeAt(psa)==9)+(txt.charCodeAt(psa+1)==9);
	tabs-=1;
	var upto=txt.slice(0,psa);
	var after=txt.slice(psa+1);
	$("drop_zone").value=upto+after;
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
	}
}

function showcontainers(t) {
	var txt=$('drop_zone').value;
	if(t.checked) {
		//replace three or more new lines with container break symbol
		var re=/\n\n\n\n*/g
		$('drop_zone').value=txt.replace(re,"\n\u2616\n");
	}
	else {
		//replace container break symbol with new line
		var re=/\u2616/g
		$('drop_zone').value=txt.replace(re,"\n");
	}
}

function tocont(t) {
	var C=[];
	var tmptxt;
	var re, endre, end;
	var txt=$('drop_zone').value;
	if(!t.checked) {
		//replace container break symbol with new line
		re=/\u2616/g
		txt=txt.replace(re,"\n");
	}
	//removes any white space characters after the last alphanumeric character
	endre=/\s*$/
	txt=txt.replace(endre,"");
	//check for three or more new line to split into containers
	var re=/\n\n\n\n*/g
	var start=0
	while (re.test(txt)) {
		end=re.lastIndex;
		tmptxt=txt.slice(start,end);
		C.push(textToHTML(tmptxt));
		start=end;
	}
	tmptxt=txt.slice(start);
	C.push(textToHTML(tmptxt));
	
	fillCont(C);
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
	state.grid.topMargin=2;
	state.grid.sideMargins=2;
	state.grid.gutters=1;
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


// All menus ********************************************************
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