var iop=navigator.appName=='Opera';

function $(id) {	
	return document.getElementById(id);
}

function main() {
	if(iop) {
		addDropZone()
	}
	if(!(window.File && window.FileReader && window.FileList && window.Blob)) {
		addInputZone();
	}
	setMenuDefaults();
	addListeners();
	Project.dfs=getDefaultFontSize();
	var endbreak=[Project.width/Project.dfs,6];
	Project.default_breaks.push(endbreak);
	setStates();
	setStateHTML();
	buildStateTable();
	buildGrid();
	setColors();
}

function addDropZone() {
	var dz=document.createElement('div');
	dz.id="drop_zone";
	dz.style.position="static";
	dz.style.width="90%";
	dz.style.height="80%";
	dz.style.marginLeft="5%";
	dz.style.marginTop="6%";
	dz.style.backgroundColor="#EEEEEE";
	dz.style.border="solid 1px #CCCCCC";
	
	$("text_zone").style.width="80%";
	$("text_zone").style.height="98%";
	$("text_zone").style.marginLeft="0%";
	$("text_zone").style.marginTop="0%";
	$("text_zone").style.backgroundColor="#FFFFFF";
	$("text_zone").parentNode.insertBefore(dz,$("text_zone"));
	dz.appendChild($("text_zone"));
}

function addInputZone() {
	$("instruct").innerHTML="Write or Paste Text Below";
	$("instruct").style.marginLeft="150px";
}
	
function setMenuDefaults() {
	//Grid Menu Options *********************************************
	$('Ncols').options[5].selected="selected";
	$('TMarg').options[1].selected="selected";
	$('SMargs').options[1].selected="selected";
	$('Gutts').options[2].selected="selected";
	$('rowH').options[3].selected="selected";
	//Content Menu Checkbox;
	$('showbreaks').checked=false;
}

function getDefaultFontSize() {
 	var parentB=document.body;
 	var M=$('defaultEm');
 	var fs=M.offsetHeight;
	parentB.removeChild(M);
 	return fs;
}

//States functions *****************************************************************

function setStates() {
	for(var i=0;i<Project.default_states.length;i++) {
		state=new State();
		state.name=Project.default_states[i];
		state.grid.width=Project.default_breaks[i][0];
		state.grid.columns=Project.default_breaks[i][1];
		state.grid.height=Project.height/Project.dfs;
		Project.states.push(state);
	}
}

function setStateHTML() {
	var sHTML="";
	for(var i=0;i<Project.states.length;i++) {
		sHTML+="<option>"+Project.states[i].name+"</option>";
	}
	$("States").innerHTML=sHTML;
	$('States').options[Project.currentstate].selected="selected";
}

function buildStateTable() {
	var sHTML="";
	for(var i=0;i<Project.states.length-1;i++) {
		sHTML+="<input id='"+i+"A' type='text' value='"+Project.states[i].name+"' class='statecontent' onchange='setName(this)' onfocus='setRow(this)' onblur='unsetRow(this)'><input id='"+i+"B' type='text' value='"+Project.states[i].grid.width+"' class='statebreak' onchange='setBreak(this)'  onfocus='setRow(this)' onblur='unsetRow(this)'>";
	}
	sHTML+="<input id='"+i+"A' type='text' value='"+Project.states[i].name+"' class='statecontent' onchange='setName(this)'  onfocus='setRow(this)' onblur='unsetRow(this)'>";

	$("statetable").innerHTML=sHTML;
}

function setName(t) {
	Project.states[parseInt(t.id)].name=t.value;
	setStateHTML();
}

function setBreak(t) {
	if(parseFloat(t.value)>59.9) {
		alert("Value is too large reset to 59.9.");
		t.value=59.9;
	}
	Project.states[parseInt(t.id)].grid.width=parseFloat(t.value);
	buildGrid();
	Project.states.sort(compareBreaks);
	setStateHTML();
	buildStateTable();
}

function compareBreaks(a,b) {
	return a.grid.width-b.grid.width;
}

function setRow(t) {
	var idnum=parseInt(t.id);
	var idB=idnum+"B";
	var idA=idnum+"A";
	$(idA).style.backgroundColor="#FFFFFF";
	if(idnum<Project.states.length-1) {
		$("addstate").style.visibility="inherit";
		$("delstate").style.visibility="inherit";
		$(idB).style.backgroundColor="#FFFFFF";
	}
	else {
		$("addstate").style.visibility="hidden";
		$("delstate").style.visibility="hidden";
	}
	$("addstate").row=idnum;
	$("delstate").row=idnum;
}

function unsetRow(t) {
	var idnum=parseInt(t.id);
	var idB=idnum+"B";
	var idA=idnum+"A";
	$(idA).style.backgroundColor="#DDDDDD";
	
	if(idnum<Project.states.length-1) {
		$(idB).style.backgroundColor="#DDDDDD";
	}
	else {
		$("addstate").style.visibility="hidden";
		$("delstate").style.visibility="hidden";
	}
}

//Container functions *****************************************************************
function setColors() {
	var colarray=[
					['white ','#FFFFFF '],	
					['Silver ','#C0C0C0 '],	
					['Gray ','#808080 '],	
					['Black ','#000000 '],	
					['Red ','#FF0000 '],	
					['Maroon ','#800000 '],	
					['Yellow ','#FFFF00 '],	
					['Olive ','#808000 '],	
					['Lime ','#00FF00 '],	
					['Green ','#008000 '],	
					['Aqua ','#00FFFF '],	
					['Teal ','#008080 '],	
					['Blue ','#0000FF '],	
					['Navy ','#000080 '],	
					['Fuchsia ','#FF00FF '],	
					['Purple ','#800080 '],	
				]
	var elm=$("backColor").firstChild;
	for(var i=0;i<16;i++) {
		elm = findNext(elm);
		elm.style.backgroundColor=colarray[i][1];
		elm.title=colarray[i][0];
		elm.addEventListener('click',function() {setContBackColor(this)}, false)
	}
	var elm=$("fontColor").firstChild;
	for(var i=0;i<16;i++) {
		elm = findNext(elm);
		elm.style.backgroundColor=colarray[i][1];
		elm.title=colarray[i][0];
		elm.addEventListener('click',function() {setContFontColor(this)}, false)
	}			
}

function setContBackColor(item) {
	Project.currentcontainer.style.backgroundColor=item.style.backgroundColor;
	Project.currentcontainer.box.style.backgroundColor=item.style.backgroundColor;
}

function setContFontColor(item) {
	var tags=["h1","h2","p"]
	var tag=tags[$("tagtype").selectedIndex];
	Project.currentcontainer.style[tag].color=item.style.backgroundColor;
	setTagStyles(Project.currentcontainer,tag)
}

//Content functions *****************************************************************
function setContentHTML() {
	var cHTML="";
	if(Project.containers.length==0) {
		$("Contents").style.visibilty="hidden";
	}
	else {
		for(var i=0;i<Project.states.length;i++) {
			cHTML+="<option>"+Project.states[i].name+"</option>";
		}
		$("States").innerHTML=cHTML;
		$('States').options[Project.currentstate].selected="selected";
	}
}


function textToHTML(CR) {
	txt=CR.text;
	var TTre, Tre;
	//remove any white space characters after the last alphanumeric character
	var endre=/\s*$/
	txt=txt.replace(endre,"");
	//Split at line breaks
	var Nre=/\n+/;
	var tmparray=txt.split(Nre);
	for(var i=0;i<tmparray.length;i++) {
		TTre=/\t\t/g;
		Tre=/\t/g;
		if(TTre.test(tmparray[i])) {
			tmparray[i]=tmparray[i].replace(TTre,"<p>")+"</p>";
		}
		else if(Tre.test(tmparray[i])) {
			tmparray[i]=tmparray[i].replace(Tre,"<h2>")+"</h2>";
		}
		else {
			tmparray[i]="<h1>"+tmparray[i]+"</h1>"
		}
	}
	txt=tmparray.join("");
	CR.content=txt;
	if(CR.image.src!=null) {
		cssImage();
		addImage();
	}
}

function cssImage() {
	var image=Project.currentcontainer.image;
	var img=image.object;
	if(image.src!=null) {
		img.style.display="block";
		img.style.width=image.width+"%";
		img.style.marginTop=image.mTop+"%";
		img.style.marginBottom=image.mBottom+"%";
		if(image.centre) {
			img.style.cssFloat="none";
			img.style.marginLeft="auto";
			img.style.marginRight="auto";
		}
		else if(image.left) {
			img.style.cssFloat="left";
			img.style.marginLeft=image.mLeft+"%";
			img.style.marginRight=image.mRight+"%";
		}
		else {
			img.style.cssFloat="right";
			img.style.marginLeft=image.mLeft+"%";
			img.style.marginRight=image.mRight+"%";
		}
		var CR=Project.currentcontainer;
		var HH=$("HTMLholder");
		HH.innerHTML=CR.content;
		if(image.top) {
			var node=HH.firstChild;
		}
		else {
			var node=HH.lastChild
		}
		if (image.wrap) {
			node.style.clear="none";
		}
		else {
			node.style.clear="both";
		}
		CR.content=HH.innerHTML;
	}
}

function addImage() {
	var CR=Project.currentcontainer;
	var HH=$("HTMLholder");
	HH.innerHTML=CR.content;
	if(CR.image.top){
		HH.insertBefore(CR.image.object,HH.firstChild);
	}
	else {
		HH.appendChild(CR.image.object);
	}
	CR.content=HH.innerHTML;
	CR.box.innerHTML=CR.content;
}

function fillCont(C) {
	//create new containers if there are more from the content than exist
	var grid=Project.states[Project.currentstate].grid;
	var Plen=Project.containers.length;
	for(var i=0;i<Plen;i++) {
		cn=Project.containers[i];
		cn.text=C[i];
		setCRBox(cn);
	}
	for(var i=Plen; i<C.length;i++) {
		cn=new Container();
		for(var j=0;j<Project.states.length;j++) {
			cn.columns[Project.states[j].name]=Project.states[j].grid.columns;
			cn.rows[Project.states[j].name]=Math.ceil(1/grid.rowratio);
		}
		cn.text=C[i];
		Project.containers.push(cn);
		Box(cn);
	}
}

//Grid functions ***********************************************************************************************

function buildGrid() {
	var col;
	var grid=Project.states[Project.currentstate].grid;
	var gridWHratio=grid.width/grid.height;
	$("gridbox").style.width=grid.width+"em";
	$("gridbox").style.height=grid.height+"em";
	$("gridbox").style.left=((Project.width/Project.dfs)-grid.width)/2+"em";
	$("contbox").style.width=$("gridbox").style.width;
	$("contbox").style.left=$("gridbox").style.left;
	$("contbox").style.height=$("gridbox").style.height;
	$("topspacer").style.height=(grid.topMargin-grid.gutters)*gridWHratio+"%";
	$("topspacer").style.backgroundColor="#FF00FF";
	$("leftspacer").style.width=(grid.sideMargins-grid.gutters)+"%";
	$("leftspacer").style.height=(100-grid.topMargin*gridWHratio)+"%";
	$("leftspacer").style.backgroundColor="#0000FF";
	setBox("topmargin",0,0,100,grid.topMargin*gridWHratio,'#999999');
	setBox("leftmargin",0,0,grid.sideMargins,100,'#999999');
	setBox("rightmargin",100-grid.sideMargins,0,grid.sideMargins,100,'#999999');
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	var cleft=grid.sideMargins+grid.gutters;
	var ctop=(grid.topMargin+grid.gutters)*gridWHratio;
	var cheight=100-ctop;
	for (var i=0;i<grid.columns;i++) {
		col=document.createElement('div');
		col.id="col"+i;
		$('gridbox').appendChild(col);
		setBox(col.id,cleft,ctop,cwidth,cheight,'#F0AA8C');
		cleft+=cwidth+2*grid.gutters;
	}	
	var rtop=ctop+cwidth*gridWHratio*grid.rowratio;
	var rheight=2*grid.gutters*gridWHratio;
	rleft=grid.sideMargins+grid.gutters;
	rwidth=100-2*rleft;
	var i=0;
	while(rtop+rheight<100) {
		row=document.createElement('div');
		row.id="row"+(i);
		$('gridbox').appendChild(row);
		setBox(row.id,rleft,rtop,rwidth,rheight,'#CCCCCC');
		rtop+=rheight+cwidth*gridWHratio*grid.rowratio;
		i++;
	}
	grid.rows=i;
	
	for(var i=0;i<Project.containers.length;i++) {
		setCRBox(Project.containers[i]);
	}
	
	function setBox(id,left,top,width,height,colour) {	
		var box=$(id).style;
		box.left=left+"%";
		box.top=top+"%";
		box.width=width+"%";
		box.height=height+"%";
		box.backgroundColor=colour;		
	}
}

function cleargridbox()
{
	var col,row;
	var grid=Project.states[Project.currentstate].grid;
	for (var i=0;i<grid.columns;i++) {
		col=$("col"+i);
		col.parentNode.removeChild(col);
	}
	for (var i=0;i<grid.rows;i++) {
		row=$("row"+i);
		row.parentNode.removeChild(row);
	}
}

