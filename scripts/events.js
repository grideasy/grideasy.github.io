
function addListeners() {
	// Menu listeners ***********************************************
	$('butproject').addEventListener('click', setBodyEdit, false);
	$('butgrid').addEventListener('click', gridmenu, false);
	$("butcontainer").addEventListener('click', containermenu, false);
	$("butcontent").addEventListener('click', contentmenu, false);
	$("butstate").addEventListener('click', statemenu, false);
	$("butoptions").addEventListener('click', optionsmenu, false);
	$("butsave").addEventListener('click', savemenu, false);
	$("butopen").addEventListener('click', openmenu, false);
	$("butcreate").addEventListener('click', exportHTML, false);
	$("buthtml").addEventListener('click', showhtml, false);
	$("buthelp").addEventListener('click', function() {window.open('https://sites.google.com/site/grideasyhelp/','_blank')}, false);

	// Grid Menu listeners *****************************
	$('Ncols').addEventListener('change', function() {setNcols(this)}, false);
	$('TMarg').addEventListener('change', function() {setTMarg(this)}, false);
	$('SMargs').addEventListener('change', function() {setSMargs(this)}, false);
	$('Gutts').addEventListener('change', function() {setGutts(this)}, false);
	$('rowH').addEventListener('change', function() {setrowH(this)}, false);
		
	//Container menu listeners ***************************************************
	$("editcontainer").addEventListener('click', function() {$("containeredit").style.visibility="visible";setContEdit()});
	$("imagecontainer").addEventListener('click', function() {$("containerimage").style.visibility="visible";setContImgEdit()});
	$("hidecontainer").addEventListener('click', hideCont, false);
	$("showcontainer").addEventListener('click', showCont, false);
	$("deletecontainer").addEventListener('click', delcont, false);
	$("createcontainer").addEventListener('click', createCont, false);
	$("copycontainer").addEventListener('click', copyCont, false);
	$("htmlcontainer").addEventListener('click',editHTML,false);
	$("saveHTML").addEventListener('click',saveText,false);
	$("cancelHTML").addEventListener('click', clearAllMenus, false);
	
	$("colwidth").addEventListener('change', function() {setContWidth(this)}, false);
	$("colwidth").addEventListener('mousedown', function() {if(this.options[this.selectedIndex].id!="colblank") {this.data=this.selectedIndex}}, false);
	$("rowheight").addEventListener('change', function() {setContHeight(this)}, false);
	$("contcentre").addEventListener('change', setContCentre, false);
	$("leftarr").addEventListener('click', forwardDiv, false);
	$("rightarr").addEventListener('click', backwardDiv, false);
	$("tagtype").addEventListener('change', function() {setTag(this)}, false);
	$("fontFam").addEventListener('change', function() {setFontFamily(this)}, false);
	$("fontFam").addEventListener('mousedown', function() {if(this.options[this.selectedIndex].id!="ffblank") {this.data=this.selectedIndex}}, false);
	$("bold").addEventListener('click', function() {setFontBold(this)}, false);
	$("italic").addEventListener('click', function() {setFontItalic(this)}, false);
	$("underline").addEventListener('click', function() {setFontUL(this)}, false);
	var alignButtons=getElementsByClassName("alignPosit");
	for(var i=0; i<alignButtons.length; i++)
	{
		alignButtons[i].addEventListener('click', function() {setContTagAlign(this)}, false);
	}
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
	//container positional images listeners
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
	$("tabright").addEventListener('click', function() {addlevel("text_zone")}, false);
	$("tabback").addEventListener('click', function() {dellevel("text_zone")}, false);
	$("showbreaks").addEventListener('change',function() {showcontainers(this)},false);
	$("pushto").addEventListener('click', function() {tocont(this)}, false);
	$("pullfrom").addEventListener('click', function() {fromcont(this)}, false);
		
	//State menu listeners ***************************************************
	$("States").addEventListener('change', function() {setTheState(this)}, false);
	$("editstates").addEventListener('click', function() {$("stateedit").style.visibility="visible"}, false);
	$("addstate").addEventListener('click', addrow, false);
	$("delstate").addEventListener('click', delrow, false);
	
	//Option menu listeners **************************************************
	$('redow').addEventListener('click', setRedow, false);
	
	//drop_zone listeners *************************************************
	if(window.File && window.FileReader && window.FileList && window.Blob) {	
		if(iop) { //Opera Browser
			dropZone = $('drop_zone');
		}
		else {
			dropZone=$("text_zone");
		}
		dropZone.addEventListener('dragover', handleDragOver, false);
		dropZone.addEventListener('drop', handleFileSelect, false);
		fileZone=$('infile');
		fileZone.addEventListener('dragover', handleDragOver, false);
		fileZone.addEventListener('drop', handleOpenFileSelect, false);
		
	}
	else {  //Safari browser
		$('pushtoproj').addEventListener('click', openTextFile, false);
	}
	$("text_zone").value="";
	$("text_zone").addEventListener('click', function() {storeCursorPosition(this)}, false);
	$("text_zone").addEventListener('keyup', function() {storeCursorPosition(this)}, false);
	
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

//content menu listeners ************************************
function contentmenu() {
	clearAllMenus();
	$('menucontent').style.visibility="visible";
	$("tabright").style.visibility="hidden";
	$("tabback").style.visibility="hidden";
	$('butcontent').style.height='50px';
}

function addlevel(zone) {
	var psa=$(zone).first||0; // paragraph start at
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
	var psa=$(zone).first||0; // paragraph start at
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
	var txt=$('text_zone').value;
	if(t.checked) {
		//replace three or more new lines with container break symbol
		var re=/\n\n\n\n*/g
		$('text_zone').value=txt.replace(re,"\n\u2616\n");
	}
	else {
		//replace container break symbol with new line
		var re=/\u2616/g
		$('text_zone').value=txt.replace(re,"\n");
	}
}

function tocont(t) {
	var C=[];
	var tmptxt;
	var re, endre, end;
	var txt=$('text_zone').value;
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
	$('text_zone').value=txt;
}

//container menu listeners *******************************

function containermenu() {
	clearAllMenus();
	$('menucontainer').style.visibility="visible";
	$('butcontainer').style.height='50px';
}

function setContEdit() {
	setContainers();
	
	if(currentcontainers.length==0) {
		$("containeredit").style.visibility="hidden";
		alert("No container selected");
		return;
	}
	$("containeredit").style.visibility="visible";
	$("bodyedit").style.visibility="hidden";
	
	$("containerimage").style.visibility="hidden";
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name
	var optHTML="";
	for(var i=0;i<grid.columns;i++) {
		optHTML+="<option>"+(i+1)+"</option>"
	}
	optHTML+="<option id='colblank'> </option>";
	$("colwidth").innerHTML=optHTML;
	$("leftarr").style.visibility="hidden";
	$("rightarr").style.visibility="hidden";
	if(currentcontainers.length==1) {
		$("leftarr").style.visibility="inherit";
		$("rightarr").style.visibility="inherit";
	}
	CR=currentcontainers[0];
	var colW=CR.columns[name];
	var rowH=CR.rows[name];
	var centrd=CR.style.centred;
	var bckCol=CR.style.backgroundColor;
	if(CR.box.getElementsByTagName("h1").length>0) {
		var tag="h1"
	}
	else if(CR.box.getElementsByTagName("h2").length>0) {
		var tag="h2";
	}
	else {
		var tag="p";
	}
	var comStyle=new Chic();
	var tags=["h1","h2","p"];
	for(var t;t<tags.length;t++) {
		comStyle[tags[t]].fontWeight=CR.style[tags[t]].fontWeight;
		comStyle[tags[t]].fontStyle=CR.style[tags[t]].fontStyle;
		comStyle[tags[t]].textDecoration=CR.style[tags[t]].textDecoration;
		comStyle[tags[t]].color=CR.style[tags[t]].color;
		comStyle[tags[t]].fontOpt=CR.style[tags[t]].fontOpt;
		comStyle[tags[t]].fontSize=CR.style[tags[t]].fontSize;
		comStyle[tags[t]].marginLeft=(CR.style[tags[t]].marginLeft);
		comStyle[tags[t]].marginTop=(CR.style[tags[t]].marginTop);
		comStyle[tags[t]].marginRight=(CR.style[tags[t]].marginRight);
		comStyle[tags[t]].marginBottom=(CR.style[tags[t]].marginBottom);
		comStyle[tags[t]].textAlign=CR.style[tags[t]].textAlign;
	}
	for(var i=1;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		if(colW!=CR.columns[name]) {colW=null};
		if(rowH!=CR.rows[name]) {rowH=null};
		if(centrd!=CR.style.centred) {centrd=null};
		if(bckCol!=CR.style.backgroundColor) {bckCol=null};
		for(var t;t<tags.length;t++) {
			if(comStyle[tags[t]].fontWeight!=CR.style[tags[t]].fontWeight) {comStyle[tags[t]].fontWeight=null}
			if(comStyle[tags[t]].fontStyle!=CR.style[tags[t]].fontStyle) {comStyle[tags[t]].fontStyle=null}
			if(comStyle[tags[t]].textDecoration!=CR.style[tags[t]].textDecoration) {comStyle[tags[t]].textDecoration=null}
			if(comStyle[tags[t]].color!=CR.style[tags[t]].color) {comStyle[tags[t]].color=null}
			if(comStyle[tags[t]].fontOpt!=CR.style[tags[t]].fontOpt) {comStyle[tags[t]].fontOpt=null}
			if(comStyle[tags[t]].fontSize!=(CR.style[tags[t]].fontSize)) {comStyle[tags[t]].fontSize=null}
			if(comStyle[tags[t]].marginLeft!=(CR.style[tags[t]].marginLeft)) {comStyle[tags[t]].marginLeft=null}
			if(comStyle[tags[t]].marginTop!=(CR.style[tags[t]].marginTop)) {comStyle[tags[t]].marginTop=null}
			if(comStyle[tags[t]].marginRight!=(CR.style[tags[t]].marginRight)) {comStyle[tags[t]].marginRight=null}
			if(comStyle[tags[t]].marginBottom!=(CR.style[tags[t]].marginBottom)) {comStyle[tags[t]].marginBottom=null}
			if(comStyle[tags[t]].textAlign!=CR.style[tags[t]].textAlign) {comStyle[tags[t]].textAlign=null}
		}
	}
	CR=currentcontainers[0];
	if(colW==null) {
		var cwol=$("colwidth").options.length;
		$("colwidth").options[cwol-1].selected="selected";
	}
	else {
		$("colwidth").options[colW-1].selected="selected";
	}
	
	if(rowH==null) {
		$("rowheight").value="";
	}
	else {
		$("rowheight").value=CR.rows[name];
	}
	if(centrd==null) {
		$("contcentre").checked=false;
	}
	else {
		$("contcentre").checked=CR.style.centred;
	}
	if(bckCol==null) {
		$("backcol").style.visibility="hidden";
	}
	else { 
		$("backcol").style.visibility="inherit";
		$("backcol").style.backgroundColor=CR.style.backgroundColor;
	}
	if(tag=="h1") {
		$("tagtype").options[0].selected="selected";
	}
	else if(tag=="h2") {
		$("tagtype").options[1].selected="selected";
	}
	else {
		$("tagtype").options[2].selected="selected";
	}
	if(comStyle[tag].fontWeight=="normal" || comStyle[tag].fontWeight==null) {
		$("bold").style.boxShadow="3px 3px 2px #FFFFFF";
		$("bold").weight="normal";
	}
	else {
		$("bold").style.boxShadow="3px 3px 2px #888888";
		$("bold").weight="bold";
	}
	if(comStyle[tag].fontStyle=="normal" || comStyle[tag].fontStyle==null) {
		$("italic").style.boxShadow="3px 3px 2px #FFFFFF";
		$("italic").font="normal";
	}
	else {
		$("italic").style.boxShadow="3px 3px 2px #888888";
		$("italic").font="italic";
	}
	if(comStyle[tag].textDecoration=="none" || comStyle[tag].textDecoration==null) {
		$("underline").style.boxShadow="3px 3px 2px #FFFFFF";
		$("underline").set="none";
	}
	else {
		$("underline").style.boxShadow="3px 3px 2px #888888";
		$("underline").set="underline";
	}
	if (comStyle[tag].color!=null) {
		$("fontcol").style.backgroundColor=comStyle[tag].color;
		$("fontcol").style.visibility="inherit";
	}
	else {
		$("fontcol").style.visibility="hidden";
	}
	if(comStyle[tag].fontOpt!=null) {
		$("fontFam").options[comStyle[tag].fontOpt].selected="selected";
	}
	else {
		$("fontFam").options[$("fontFam").options.length-1].selected="selected";
	}
	if(comStyle[tag].fontSize!=null) {
		$("fontSize").value=parseFloat(comStyle[tag].fontSize);
	}
	else {
		$("fontSize").value="";
	}
	if(comStyle[tag].marginLeft!=null) {
		$("marginLeft").value=parseFloat(comStyle[tag].marginLeft);
	}
	else {
		$("marginLeft").value="";
	}
	if(comStyle[tag].marginTop!=null) {
		$("marginTop").value=parseFloat(CR.style[tag].marginTop);
	}
	else {
		$("marginTop").value="";
	}
	if(comStyle[tag].marginRight!=null) {
		$("marginRight").value=parseFloat(CR.style[tag].marginRight);
	}
	else {
		$("marginRight").value="";
	}
	if(comStyle[tag].marginBottom!=null) {
		$("marginBottom").value=parseFloat(CR.style[tag].marginBottom);
	}
	else {
		$("marginBottom").value="";
	}
	var alignButtons=getElementsByClassName("alignPosit");
	for(var i=0; i<alignButtons.length; i++)
	{
		alignButtons[i].style.border='solid 1px #FFFFFF';
	}
	if(comStyle[tag].textAlign!=null) {
		var img=$("align"+comStyle[tag].textAlign);
		img.style.border='solid 1px #000000';
	}
}

function setContWidth(item) {
	if(item.options[item.selectedIndex].id=="colblank") {
		item.selectedIndex=item.data;
		return
	}
	var CR;
	setContainers();
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.columns[name]=parseInt(item.options[item.selectedIndex].text);
		var bs=CR.box.style;
		bs.width=(CR.columns[name]*cwidth +2*(CR.columns[name]-1)*grid.gutters)+"%";
		setCRBox(CR)
	}
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
}

function setContCentre() {
	var CR;
	setContainers();
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
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
		setCRBox(CR);
	}
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
}

function setContHeight(item) {
	var CR;
	setContainers();
	var grid=Project.states[Project.currentstate].grid;
	var name=Project.states[Project.currentstate].name;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.rows[name]=parseInt(item.value);
		var bs=CR.box.style;
		bs.height=((cwidth*grid.rowratio)*CR.rows[name]+(CR.rows[name]-1)*2*grid.gutters)+"%";
		setCRBox(CR);
		}
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
}


function forwardDiv() {	
	var elm=currentcontainers[0].box;
    var previous = findPrevious(elm);
    if (previous && previous.id!="leftspacer") {
       	elm.parentNode.insertBefore(elm, previous);
    }
}

function findPrevious(elm) {
   do {
       elm = elm.previousSibling;
   } while (elm && elm.nodeName !="SPAN");
   return elm;
}

function backwardDiv() {		
	var elm=currentcontainers[0].box;
    var next = findNextSpan(elm);
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

function findNextSpan(elm) {
   do {
       elm = elm.nextSibling;
   } while (elm && elm.nodeName !="SPAN");
   return elm;
}

function setTag(item) {
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	var	CR=currentcontainers[0];
	for(var t;t<tags.length;t++) {
		comStyle[tags[t]].fontWeight=CR.style[tags[t]].fontWeight;
		comStyle[tags[t]].fontStyle=CR.style[tags[t]].fontStyle;
		comStyle[tags[t]].textDecoration=CR.style[tags[t]].textDecoration;
		comStyle[tags[t]].color=CR.style[tags[t]].color;
		comStyle[tags[t]].fontOpt=CR.style[tags[t]].fontOpt;
		comStyle[tags[t]].fontSize=CR.style[tags[t]].fontSize;
		comStyle[tags[t]].marginLeft=(CR.style[tags[t]].marginLeft);
		comStyle[tags[t]].marginTop=(CR.style[tags[t]].marginTop);
		comStyle[tags[t]].marginRight=(CR.style[tags[t]].marginRight);
		comStyle[tags[t]].marginBottom=(CR.style[tags[t]].marginBottom);
		comStyle[tags[t]].textAlign=CR.style[tags[t]].textAlign;
	}
	for(var i=1;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		for(var t;t<tags.length;t++) {
			if(comStyle[tags[t]].fontWeight!=CR.style[tags[t]].fontWeight) {comStyle[tags[t]].fontWeight=null}
			if(comStyle[tags[t]].fontStyle!=CR.style[tags[t]].fontStyle) {comStyle[tags[t]].fontStyle=null}
			if(comStyle[tags[t]].textDecoration!=CR.style[tags[t]].textDecoration) {comStyle[tags[t]].textDecoration=null}
			if(comStyle[tags[t]].color!=CR.style[tags[t]].color) {comStyle[tags[t]].color=null}
			if(comStyle[tags[t]].fontOpt!=CR.style[tags[t]].fontOpt) {comStyle[tags[t]].fontOpt=null}
			if(comStyle[tags[t]].fontSize!=(CR.style[tags[t]].fontSize)) {comStyle[tags[t]].fontSize=null}
			if(comStyle[tags[t]].marginLeft!=(CR.style[tags[t]].marginLeft)) {comStyle[tags[t]].marginLeft=null}
			if(comStyle[tags[t]].marginTop!=(CR.style[tags[t]].marginTop)) {comStyle[tags[t]].marginTop=null}
			if(comStyle[tags[t]].marginRight!=(CR.style[tags[t]].marginRight)) {comStyle[tags[t]].marginRight=null}
			if(comStyle[tags[t]].marginBottom!=(CR.style[tags[t]].marginBottom)) {comStyle[tags[t]].marginBottom=null}
			if(comStyle[tags[t]].textAlign!=CR.style[tags[t]].textAlign) {comStyle[tags[t]].textAlign=null}
		}
	}
	CR=currentcontainers[0];
	if(comStyle[tag].fontWeight=="normal" || comStyle[tag].fontWeight==null) {
		$("bold").style.boxShadow="3px 3px 2px #FFFFFF";
		$("bold").weight="normal";
	}
	else {
		$("bold").style.boxShadow="3px 3px 2px #888888";
		$("bold").weight="bold";
	}
	if(comStyle[tag].fontStyle=="normal" || comStyle[tag].fontStyle==null) {
		$("italic").style.boxShadow="3px 3px 2px #FFFFFF";
		$("italic").font="normal";
	}
	else {
		$("italic").style.boxShadow="3px 3px 2px #888888";
		$("italic").font="italic";
	}
	if(comStyle[tag].textDecoration=="none" || comStyle[tag].textDecoration==null) {
		$("underline").style.boxShadow="3px 3px 2px #FFFFFF";
		$("underline").set="none";
	}
	else {
		$("underline").style.boxShadow="3px 3px 2px #888888";
		$("underline").set="underline";
	}
	if (comStyle[tag].color!=null) {
		$("fontcol").style.backgroundColor=comStyle[tag].color;
		$("fontcol").style.visibility="inherit";
	}
	else {
		$("fontcol").style.visibility="hidden";
	}
	if(comStyle[tag].fontOpt!=null) {
		$("fontFam").options[comStyle[tag].fontOpt].selected="selected";
	}
	else {
		$("fontFam").options[$("fontFam").options.length-1].selected="selected";
	}
	if(comStyle[tag].fontSize!=null) {
		$("fontSize").value=parseFloat(comStyle[tag].fontSize);
	}
	else {
		$("fontSize").value="";
	}
	if(comStyle[tag].marginLeft!=null) {
		$("marginLeft").value=parseFloat(comStyle[tag].marginLeft);
	}
	else {
		$("marginLeft").value="";
	}
	if(comStyle[tag].marginTop!=null) {
		$("marginTop").value=parseFloat(CR.style[tag].marginTop);
	}
	else {
		$("marginTop").value="";
	}
	if(comStyle[tag].marginRight!=null) {
		$("marginRight").value=parseFloat(CR.style[tag].marginRight);
	}
	else {
		$("marginRight").value="";
	}
	if(comStyle[tag].marginBottom!=null) {
		$("marginBottom").value=parseFloat(CR.style[tag].marginBottom);
	}
	else {
		$("marginBottom").value="";
	}
	var alignButtons=getElementsByClassName("alignPosit");
	for(var i=0; i<alignButtons.length; i++)
	{
		alignButtons[i].style.border='solid 1px #FFFFFF';
	}
	if(comStyle[tag].textAlign!=null) {
		var img=$("align"+comStyle[tag].textAlign);
		img.style.border='solid 1px #000000';
	}
}

function setContTagValue(item) {
	var CR;
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.style[tag][item.id]=parseFloat(item.value)+"rem";
		setTagStyles(CR,tag);
	}
}

function setContTagAlign(item) {
	var CR;
	var alignButtons=getElementsByClassName("alignPosit");
	for(var i=0; i<alignButtons.length; i++)
	{
		alignButtons[i].style.border='solid 1px #FFFFFF';
	}
	item.style.border='solid 1px #000000';
	var alnindx=parseInt(item.src.substr(-5,1));
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	var aligns=["left","center","right","justify"];
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.style[tag].textAlign=aligns[alnindx];
		setTagStyles(CR,tag);
	}
}

function setFontFamily(item) {
	var CR;
	if(item.options[item.selectedIndex].id=="ffblank") {
		item.selectedIndex=item.data;
		return
	}
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	var fams=[	'Arial, Arial, Helvetica, sans-serif',
				'Arial Black, Arial Black, Gadget, sans-serif',
				'Comic Sans MS, Comic Sans MS, cursive',
				'Courier New, Courier New, monospace',
				'Georgia, Georgia, serif',
				'Impact, Impact, Charcoal, sans-serif',
				'Lucida Console, Monaco, monospace',
				'Lucida Sans Unicode, Lucida Grande, sans-serif',
				'Palatino Linotype, Book Antiqua, Palatino, serif',
				'Tahoma, Geneva, sans-serif',
				'Times New Roman, Times New Roman, Times, serif',
				'Trebuchet MS, Trebuchet MS, sans-serif',
				'Verdana, Verdana, Geneva, sans-serif'];
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];			
		CR.style[tag].fontOpt=item.selectedIndex;			
		CR.style[tag].fontFamily=fams[item.selectedIndex];
		setTagStyles(CR,tag);
	}
}

function setFontBold(item) {
	var CR;
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	if(item.weight=="bold") {
		item.style.boxShadow="3px 3px 2px #FFFFFF";
		item.weight="normal";
	}
	else {
		item.style.boxShadow="3px 3px 2px #888888";
		item.weight="bold";
	}
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.style[tag].fontWeight=item.weight;
		setTagStyles(CR,tag);
	}
}

function setFontItalic(item) {
	var CR;
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	if(item.font=="italic") {
		item.style.boxShadow="3px 3px 2px #FFFFFF";
		item.font="normal";
	}
	else {
		item.style.boxShadow="3px 3px 2px #888888";
		item.font="italic";
	}
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.style[tag].fontStyle=item.font;
		setTagStyles(CR,tag);
	}
}

function setFontUL(item) {
	var CR;
	var tags=["h1","h2","p"];
	var tag=tags[$("tagtype").selectedIndex];
	if(item.set=="underline") {
		item.style.boxShadow="3px 3px 2px #FFFFFF";
		item.set="none";
	}
	else {
		item.style.boxShadow="3px 3px 2px #888888";
		item.set="underline";
	}
	for(var i=0;i<currentcontainers.length;i++) {
		CR=currentcontainers[i];
		CR.style[tag].textDecoration=item.set;
		setTagStyles(CR,tag);
	}
}

function hideCont() {
	if($("hidecontainer").innerHTML=="Hide") {
		$("contbox").style.visibility="hidden";
		$("hidecontainer").innerHTML="Show";
	}
	else {
		$("contbox").style.visibility="inherit";
		$("hidecontainer").innerHTML="Hide";
	}
}

function showCont() {
	if($("showcontainer").innerHTML=="Preview") {
		$("showcontainer").innerHTML="Design";
		var elm=$("contbox").firstChild;
		elm=findNextSpan(elm); //topspacer
		elm=findNextSpan(elm); //leftspacer
		elm=findNextSpan(elm); //first container if exists
		while (elm) {
			elm.style.opacity=1;
			elm.addEventListener("mouseover", function() {this.style.opacity=1}, false);
			elm.addEventListener("mouseout", function() {this.style.opacity=1}, false);
			elm=findNextSpan(elm);
		}
		currentcontainers=[];
		$("containeredit").style.visibility="hidden";
	}
	else {
		$("showcontainer").innerHTML="Preview";
		var elm=$("contbox").firstChild;
		elm=findNextSpan(elm); //topspacer
		elm=findNextSpan(elm); //leftspacer
		elm=findNextSpan(elm); //first container if exists
		while (elm) {
			elm.style.opacity=0.4;
			elm.addEventListener("mouseover", function() {this.style.opacity=0.6}, false);
			elm.addEventListener("mouseout", function() {this.style.opacity=0.4}, false);
			elm=findNextSpan(elm);
		}
		$("containeredit").style.visibility="hidden";
	}
}

function delcont() {
	if(currentcontainers.length<1) {
		alert("No container selected");
		return;
	}
	if(currentcontainers.length>1) {
		alert("Only one container can be deleted at a time.");
		return;
	}
	var CR=currentcontainers[0];
	var elm=$("contbox").firstChild;
	var contcount=0;
	elm=findNextSpan(elm);
	while (elm!=CR.box) {
		elm=findNextSpan(elm);
		contcount++;
	}
	CR.box.parentNode.removeChild(CR.box);
	Project.containers.splice(contcount,1);
	$("containeredit").style.visibility="hidden";
}

function editHTML() {
	if(currentcontainers.length<1) {
		alert("No container selected.");
		return;
	}
	if(currentcontainers.length>1) {
		alert("Too many containers selected.");
		return;
	}
	$("menuHTML").style.visibility="visible";
	$("Ttabright").style.visibility="hidden";
	$("Ttabback").style.visibility="hidden";
	$("HTML_zone").value=currentcontainers[0].text;
}


function saveText() {
	var CR=currentcontainers[0];
	CR.text=$("HTML_zone").value;
	textToHTML(CR);
	setTagStyles(CR,"h1");
	setTagStyles(CR,"h2");
	setTagStyles(CR,"p");
	buildGrid();
}

function createCont() {
	cn=new Container();
	for(var j=0;j<Project.states.length;j++) {
		cn.columns[Project.states[j].name]=Project.states[j].grid.columns;
		cn.rows[Project.states[j].name]=Math.ceil(1/Project.states[j].grid.rowratio);
	}
	Project.containers.push(cn);
	Box(cn);
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
}

function copyCont () {
	if(currentcontainers.length<1) {
		$("containerimage").style.visibility="hidden";
		alert("No container selected");
		return;
	}
	if(currentcontainers.length>1) {
		$("containerimage").style.visibility="hidden";
		alert("Too many containers selected");
		return;
	}
	CR=currentcontainers[0];
	cn=new Container();
	Project.containers.push(cn);
	for(var j=0;j<Project.states.length;j++) {
		cn.columns[Project.states[j].name]=CR.columns[Project.states[j].name];
		cn.rows[Project.states[j].name]=CR.rows[Project.states[j].name];
	}
	cn.text=CR.text;
	cn.content=CR.content;
	cn.image.src=CR.image.src;
	cn.image.object=CR.image.object; 
	cn.image.top=CR.image.top; 
	cn.image.left=CR.image.left; 
	cn.image.wrap=CR.image.wrap; 
	cn.image.centre=CR.image.centre;
	cn.image.width=CR.image.width;
	cn.image.mLeft=CR.image.mLeft;
	cn.image.mRight=CR.image.mRight;
	cn.image.mTop=CR.image.mTop;
	cn.image.mBottom=CR.image.mBottom;
	cn.style.centred=CR.style.centred;
	cn.style.backgroundColor=CR.style.backgroundColor;
	var tags=["h1","h2","p"];
	for(var t=0;t<tags.length;t++) {
		cn.style[tags[t]].color=CR.style[tags[t]].color;
		cn.style[tags[t]].fontFamily=CR.style[tags[t]].fontFamily;
		cn.style[tags[t]].fontOpt=CR.style[tags[t]].fontOpt;
		cn.style[tags[t]].fontSize=CR.style[tags[t]].fontSize;
		cn.style[tags[t]].marginLeft=CR.style[tags[t]].marginLeft;
		cn.style[tags[t]].marginTop=CR.style[tags[t]].marginTop;
		cn.style[tags[t]].marginRight=CR.style[tags[t]].marginRight;
		cn.style[tags[t]].marginBottom=CR.style[tags[t]].marginBottom;
		cn.style[tags[t]].textAlign=CR.style[tags[t]].textAlign;
		cn.style[tags[t]].fontWeight=CR.style[tags[t]].fontWeight;
		cn.style[tags[t]].fontStyle=CR.style[tags[t]].fontStyle;
		cn.style[tags[t]].textDecoration=CR.style[tags[t]].textDecoration;
	}
	Box(cn);
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
	var totHeight=gridHtoW(Project.currentstate);
	if(totHeight>100) {
		buildGrid();
	}
}

function setContImgEdit() {
	if(currentcontainers.length<1) {
		$("containerimage").style.visibility="hidden";
		alert("No container selected");
		return;
	}
	if(currentcontainers.length>1) {
		$("containerimage").style.visibility="hidden";
		alert("Too many containers selected");
		return;
	}
	$("containeredit").style.visibility="hidden";
	$("bodyedit").style.visibility="hidden";
	CR=currentcontainers[0];
	if(CR.image.src!=null) {
		$('imgurl').value=CR.image.src;	
	}
	else {
		$('imgurl').value="";
	}
	if(CR.image.top) {
		var place="t";
	}
	else {
		var place="b";
	}
	if (CR.image.centre) {
		place+="c";
	}
	else if(CR.image.left) {
		place+="l";
	}
	else {
		place+="r";
	}
	if(CR.image.wrap) {
		place+="w";
	}
	else{
		place+="c";
	}
	var imgbuttons=getElementsByClassName("imgPosit");
	for(var i=0; i<imgbuttons.length; i++)
	{
		imgbuttons[i].style.border="solid 1px #FFFFFF";
		if(imgbuttons[i].src.substr(-7,3)==place) {
			imgbuttons[i].style.border="solid 1px #000000";
		}
	}
	$("imgWidth").value=CR.image.width
	$("imgMarginLeft").value=CR.image.mLeft;
	$("imgMarginTop").value=CR.image.mTop;
	$("imgMarginRight").value=CR.image.mRight;
	$("imgMarginBottom").value=CR.image.mBottom;
}

function loadNsetImage() {
	var img=new Image();
	img.src=$('imgurl').value;
	img.addEventListener('load',function() {showImg(this)},false);
	img.addEventListener('error',imgerror,false);
}

function imgerror() {
	alert("Image not found");
}

function setContImg(img) {
	var imgButtons=getElementsByClassName("imgPosit");
	for(var i=0; i<imgButtons.length; i++)
	{
		imgButtons[i].style.border='solid 1px #FFFFFF';
	}
	img.style.border='solid 1px #000000';
	var place=img.src.substr(-7,3);
	var CR=currentcontainers[0];
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
	var CR=currentcontainers[0];
	CR.image.src=img.src;
	CR.image.object=img;
	textToHTML(CR);
}

function placeImage(place) {
	var image=currentcontainers[0].image;
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
	CR=currentcontainers[0];
	CR.image.width=parseFloat($("imgWidth").value);
	CR.image.mLeft=parseFloat($("imgMarginLeft").value);
	CR.image.mTop=parseFloat($("imgMarginTop").value);
	CR.image.mRight=parseFloat($("imgMarginRight").value);
	CR.image.mBottom=parseFloat($("imgMarginBottom").value);
	if(CR.image.src!=null) {
		cssImage(CR);
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
	state.grid.height=state.grid.width;
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

//Options menu ********************************************************
function setRedow() {
	console.log("redow",$('redow').checked);
	if($('redow').checked) {
		$('innerw').checked=true;
	}
}


function optionsmenu() {
	clearAllMenus();
	$("menuoptions").style.visibility="visible";
	$('butoptions').style.height='50px';
	}

//Save Menu *******************************************************

function savemenu() {
	var CR,img,tmp;
	var Plen=Project.containers.length;
	for(i=0;i<Plen;i++) {
		CR=Project.containers[i];
		delete CR["box"];
		delete CR["content"];
		delete CR.image["object"];
	}
	$("export_zone").value=JSON.stringify(Project);
	$("showtextHTML").style.visibility='visible';
	var elm=$("contbox").firstChild;
    var next = findNext(elm);
    while (next) {
        next.parentNode.removeChild(next);
        next = findNext(elm);
    }
	for(var i=0;i<Plen;i++) {
		CR=Project.containers[i];
		tmp=CR.image.src;
		CR.image.src=null;
		Box(CR);
		CR.image.src=tmp;
		if(CR.image.src!=null) {
			img=new Image();
			img.src=CR.image.src;
			img.addEventListener('load',function() {showImg(this)},false);
			img.addEventListener('error',imgerror,false);
		}
	}
}

function openmenu() {
	clearAllMenus();
	if(window.File && window.FileReader && window.FileList && window.Blob) {
		$("menusaved").style.visibility="visible";
	}
	else {
		$("menusavednotDnD").style.visibility="visible";
	}
}

function setBodyEdit() {
	clearAllMenus();
	$("bodycol").style.backgroundColor=Project.bodycolor;
	$("margincol").style.backgroundColor=Project.margincolor;
	$("bodyedit").style.visibility="visible";
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