
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
	$("editcontainer").addEventListener('click', function() {$("containeredit").style.visibility="visible";setContEdit()});
	$("imagecontainer").addEventListener('click', function() {$("containerimage").style.visibility="visible";setContImgEdit()});
	$("hidecontainer").addEventListener('click', function() {$("contbox").style.visibility="hidden"}, false);
	$("showcontainer").addEventListener('click', function() {$("contbox").style.visibility="visible"}, false);
	$("deletecontainer").addEventListener('click', delcont, false);
	$("createcontainer").addEventListener('click', createCont, false);
	$("htmlcontainer").addEventListener('click',editHTML,false);
	$("saveHTML").addEventListener('click',saveText,false);
	$("cancelHTML").addEventListener('click', clearAllMenus, false);
	
	$("colwidth").addEventListener('change', function() {setContWidth(this)}, false);
	$("rowheight").addEventListener('change', function() {setContHeight(this)}, false);
	$("contcentre").addEventListener('change', setContCentre, false);
	$("leftarr").addEventListener('click', forwardDiv, false);
	$("rightarr").addEventListener('click', backwardDiv, false);
	$("tagtype").addEventListener('change', function() {setTag(this)}, false);
	$("fontSize").addEventListener('change', function() {setContTagValue(this)}, false);
	$("marginLeft").addEventListener('change', function() {setContTagValue(this)}, false);
	$("marginTop").addEventListener('change', function() {setContTagValue(this)}, false);
	$("marginRight").addEventListener('change', function() {setContTagValue(this)}, false);
	$("marginBottom").addEventListener('change', function() {setContTagValue(this)}, false);
	$("Ttabright").addEventListener('click', function() {addlevel("HTML_zone")}, false);
	$("Ttabback").addEventListener('click', function() {dellevel("HTML_zone")}, false);
	$("HTML_zone").addEventListener('click', function() {storeCursorPosition(this)}, false);
	$("HTML_zone").addEventListener('keyup', function() {storeCursorPosition(this)}, false);
	$('imgurl').addEventListener('change', loadNsetImage, false);
	//container images listeners
	var imgbuttons=getElementsByClassName("imgPosit");
	for(var i=0; i<imgbuttons.length; i++)
	{
		imgbuttons[i].addEventListener('click', function() {setContImg(this)}, false);
	}
	//container image styles listeners
	$('imgWidth').addEventListener('change', function() {setContImgStyle()}, false);
	$('imgMarginLeft').addEventListener('change', function() {setContImgStyle()}, false);
	$('imgMarginTop').addEventListener('change', function() {setContImgStyle()}, false);
	$('imgMarginRight').addEventListener('change', function() {setContImgStyle()}, false);
	$('imgMarginBottom').addEventListener('change', function() {setContImgStyle()}, false);
	
	//Content menu listeners *************************************************
	$("tabright").addEventListener('click', function() {addlevel("drop_zone")}, false);
	$("tabback").addEventListener('click', function() {dellevel("drop_zone")}, false);
	$("showbreaks").addEventListener('change',function() {showcontainers(this)},false);
	$("pushto").addEventListener('click', function() {tocont(this)}, false);
	$("pullfrom").addEventListener('click', function() {fromcont(this)}, false);
		
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
		dropZone.addEventListener('click', function() {storeCursorPosition(this)}, false);
		dropZone.addEventListener('keyup', function() {storeCursorPosition(this)}, false);
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
function storeCursorPosition(zone) {
	zone.cursor=zone.selectionStart;
	var upto=zone.value.slice(0,zone.cursor);
	var after=zone.value.slice(zone.cursor+1);
	var re=/\n/g;
	zone.first=0;
	while (re.test(upto)) {
		zone.first=re.lastIndex;
	}
	re=/\n/;
	zone.last=after.search(re)+zone.cursor;
	var tabs=(zone.value.charCodeAt(zone.first)==9)+(zone.value.charCodeAt(zone.first+1)==9);
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="inherit";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="hidden";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
		$("Ttabback").style.visibility="hidden";
		$("Ttabright").style.visibility="inherit";
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

function addlevel(zone) {
	var psa=$(zone).first; // paragraph start at
	var txt=$(zone).value;
	var tabs=(txt.charCodeAt(psa)==9)+(txt.charCodeAt(psa+1)==9);
	tabs+=1;
	var upto=txt.slice(0,psa)+"\t";
	var after=txt.slice(psa);
	$(zone).value=upto+after;
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="inherit";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="hidden";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
		$("Ttabback").style.visibility="hidden";
		$("Ttabright").style.visibility="inherit";
	}
}

function dellevel(zone) {
	var psa=$(zone).first; // paragraph start at
	var txt=$(zone).value;
	var tabs=(txt.charCodeAt(psa)==9)+(txt.charCodeAt(psa+1)==9);
	tabs-=1;
	var upto=txt.slice(0,psa);
	var after=txt.slice(psa+1);
	$(zone).value=upto+after;
	if(tabs==1) {
		$("tabright").style.visibility="inherit";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="inherit";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs>1) {
		$("tabright").style.visibility="hidden";
		$("tabback").style.visibility="inherit";
		$("Ttabright").style.visibility="hidden";
		$("Ttabback").style.visibility="inherit";
	}
	if(tabs<1) {
		$("tabback").style.visibility="hidden";
		$("tabright").style.visibility="inherit";
		$("Ttabback").style.visibility="hidden";
		$("Ttabright").style.visibility="inherit";
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
		C.push(tmptxt);
		start=end;
	}
	tmptxt=txt.slice(start);
	C.push(tmptxt);
	
	fillCont(C);
}

function fromcont() {
	var tmptxt;
	var re;
	var txt="";
	for(var i=0;i<Project.containers.length;i++) {
		tmptxt=Project.containers[i].text;
		txt+=tmptxt;
	}
	$('drop_zone').value=txt;
}

//container menu listeners *******************************

function containermenu() {
	clearAllMenus();
	$('menucontainer').style.visibility="visible";
	$('butcontainer').style.height='50px';
}

function setContEdit() {
	var CR=Project.currentcontainer;
	if(CR==null) {
		$("containeredit").style.visibility="hidden";
		alert("No container selected");
		return;
	}
	$("containerimage").style.visibility="hidden";
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name
	var optHTML="";
	for(var i=0;i<grid.columns;i++) {
		optHTML+="<option>"+(i+1)+"</option>"
	}
	$("colwidth").innerHTML=optHTML;
	$("colwidth").options[CR.columns[name]-1].selected="selected";
	$("rowheight").value=CR.rows[name];
	$("contcentre").checked=CR.style.centred;
	if(CR.box.getElementsByTagName("h1").length>0) {
		$("tagtype").options[0].selected="selected";
		var tag="h1"
	}
	else if(CR.box.getElementsByTagName("h2").length>0) {
		$("tagtype").options[1].selected="selected";
		var tag="h2";
	}
	else {
		$("tagtype").options[2].selected="selected";
		var tag="p";
	}
	$("fontSize").value=parseFloat(CR.style[tag].fontSize);
	$("marginLeft").value=parseFloat(CR.style[tag].marginLeft);
	$("marginTop").value=parseFloat(CR.style[tag].marginTop);
	$("marginRight").value=parseFloat(CR.style[tag].marginRight);
	$("marginBottom").value=parseFloat(CR.style[tag].marginBottom);
}

function setContWidth(item) {
	var CR=Project.currentcontainer;
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	CR.columns[name]=parseInt(item.options[item.selectedIndex].text);
	var bs=CR.box.style;
	bs.width=(CR.columns[name]*cwidth +2*(CR.columns[name]-1)*grid.gutters)+"%";
	setContCentre();
}

function setContCentre() {
	var CR=Project.currentcontainer;
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage
	var bs=CR.box.style; 
	CR.style.centred=$("contcentre").checked;
	if(CR.style.centred) {
		var offset=((100-(CR.columns[name]*cwidth+(CR.columns[name]-1)*2*grid.gutters))/2);
		bs.marginLeft=(offset-parseFloat($("leftspacer").style.width))+"%";
		bs.marginRight=offset+"%";
	}
	else {
		bs.marginLeft=2*grid.gutters+"%"; 
		bs.marginRight="0%"
	}
}

function setContHeight(item) {
	var CR=Project.currentcontainer;
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	var gridWHratio=grid.width/grid.height;
	CR.rows[name]=parseInt(item.value);
	var bs=CR.box.style;
	bs.height=((cwidth*grid.rowratio)*CR.rows[name]+(CR.rows[name]-1)*2*grid.gutters)*gridWHratio+"%";
}


function forwardDiv() {
	var elm=Project.currentcontainer.box;
    var previous = findPrevious(elm);
    if (previous) {
        elm.parentNode.insertBefore(elm, previous);
    }
}

function findPrevious(elm) {
   do {
       elm = elm.previousSibling;
   } while (elm && elm.nodeName !="DIV");
   return elm;
}

function backwardDiv() {
	var elm=Project.currentcontainer.box;
    var next = findNext(elm);
    if (next) {
        elm.parentNode.insertBefore(next, elm);
    }
}

function findNext(elm) {
   do {
       elm = elm.nextSibling;
   } while (elm && elm.nodeName !="DIV");
   return elm;
}

function setTag(item) {
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	var CR=Project.currentcontainer;
	$("fontSize").value=parseFloat(CR.style[tag].fontSize);
	$("marginLeft").value=parseFloat(CR.style[tag].marginLeft);
	$("marginTop").value=parseFloat(CR.style[tag].marginTop);
	$("marginRight").value=parseFloat(CR.style[tag].marginRight);
	$("marginBottom").value=parseFloat(CR.style[tag].marginBottom);
}

function setContTagValue(item) {
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	Project.currentcontainer.style[tag][item.id]=parseFloat(item.value)+"em";
	setTagStyles(Project.currentcontainer,tag)
}

function delcont() {
	var elm=$("contbox").firstChild;
	var contcount=0;
	elm=findNext(elm);
	while (elm!=Project.currentcontainer.box) {
		elm=findNext(elm);
		contcount++;
	}
	Project.currentcontainer.box.parentNode.removeChild(Project.currentcontainer.box);
	Project.containers.splice(contcount,1);
	Project.currentcontainer=null;
	$("containeredit").style.visibility="hidden";
}

function editHTML() {
	if(Project.currentcontainer==null) {
		return;
	}
	$("menuHTML").style.visibility="visible";
	$("HTML_zone").value=Project.currentcontainer.text;
}


function saveText() {
	var CR=Project.currentcontainer;
	CR.text=$("HTML_zone").value;
	textToHTML(CR);
	setTagStyles(CR,"h1");
	setTagStyles(CR,"h2");
	setTagStyles(CR,"p");
	buildGrid();
}

function createCont() {
	var state=Project.states[Project.currentstate];
	var grid=state.grid;
	cn=new Container();
	cn.columns[state.name]=state.grid.columns;
	cn.rows[state.name]=Math.ceil(1/grid.rowratio);
	Project.containers.push(cn);
	Box(cn);
}

function setContImgEdit() {
	if(Project.currentcontainer==null) {
		$("containerimage").style.visibility="hidden";
		alert("No container selected");
		return;
	}
	$("containeredit").style.visibility="hidden";
	var grid=Project.states[Project.currentstate].grid;
}

function loadNsetImage() {
	var img=new Image();
	img.src=$('imgurl').value;
	img.addEventListener('load',function() {showImg(this)},false);
	img.addEventListener('error',imgerror,false);
}

function imgerror() {
	alert("Image not found");
	//Project.currentcontainer.image.src=null;
}

function setContImg(img) {
	var imgButtons=getElementsByClassName("imgPosit");
	for(var i=0; i<imgButtons.length; i++)
	{
		imgButtons[i].style.border='solid 1px #FFFFFF';
	}
	img.style.border='solid 1px #000000';
	var place=img.src.substr(-7,3);
	var CR=Project.currentcontainer;
	placeImage(place);
	CR.image.centre=false;
	if(place.charAt(1)=="c") {
		CR.image.centre=true;	
	}
	if(CR.image.src!=null) {
		showImg(CR.image.object)
	}
}

function showImg(img) {
	Project.currentcontainer.image.src=img.src;
	Project.currentcontainer.image.object=img;
	textToHTML(Project.currentcontainer);
}

function placeImage(place) {
	var image=Project.currentcontainer.image;
	switch (place.charAt(0)) {
		case "t":
			image.top=true;
		break
		case "b":
			image.top=false;
		break
	}
	switch (place.charAt(1)) {
		case "l":
			image.left=true;
			image.centre=false;
		break
		case "r":
			image.left=false;
			image.centre=false;
		break
		case "c":
			image.centre=true;
		break
	}
	switch (place.charAt(2)) {
		case "w":
			image.wrap=true;
		break
		case "c":
			image.wrap=false;
		break
	}
}

function setContImgStyle() {
	CR=Project.currentcontainer;
	CR.image.width=parseFloat($("imgWidth").value);
	CR.image.mLeft=parseFloat($("imgMarginLeft").value);
	CR.image.mTop=parseFloat($("imgMarginTop").value);
	CR.image.mRight=parseFloat($("imgMarginRight").value);
	CR.image.mBottom=parseFloat($("imgMarginBottom").value);
	if(CR.image.src!=null) {
		cssImage();
		showImg(CR.image.object);
	}
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
	for(var i=0;i<Project.containers.length;i++) {
		Project.containers[i].columns[state.name]=state.grid.columns;
		Project.containers[i].rows[state.name]=Math.ceil(1/Project.states[r].grid.rowratio);
	}
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