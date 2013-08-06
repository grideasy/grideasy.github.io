function showhtml() {
	var htmltext="";
	htmltext+='<!DOCTYPE HTML>'+'\n';
	htmltext+='<html>'+'\n';
	htmltext+=SPACES.substr(0,4)+'<head>'+'\n';
	htmltext+=SPACES.substr(0,8)+'<meta http-equiv="Content-Type" content="text/html; charset=utf-8">'+'\n';
	htmltext+=SPACES.substr(0,8)+'<meta name="viewport" content="width=device-width, initial-scale=1">'+'\n';
	htmltext+=SPACES.substr(0,8)+'<title>GridEasy showhtmled HTML</title>'+'\n';
	htmltext+=showhtmlScript();
	htmltext+=showhtmlStyles();
	htmltext+=SPACES.substr(0,4)+'</head>'+'\n';
	htmltext+=showhtmlBody();
	htmltext+='</html>'+'\n';
	$("export_zone").value=htmltext;
	$("showtextHTML").style.visibility='visible';
}

function showhtmlStyles() {
	var img, clearvalue;
	var htmltext=SPACES.substr(0,8)+'<style>'+'\n';
	//Body styles
	htmltext+="/* Body Styles**********************************************************************  */"+'\n';
	htmltext+=SPACES.substr(0,12)+"body {"+'\n';
	htmltext+=SPACES.substr(0,16)+'background-color:'+Project.margincolor+';'+'\n';
	htmltext+=SPACES.substr(0,12)+"}"+'\n';
	htmltext+='\n';
	//All div styles
	htmltext+="/* Div Styles**********************************************************************  */"+'\n';
	htmltext+=SPACES.substr(0,12)+"div {"+'\n';
	htmltext+=SPACES.substr(0,16)+'position:absolute;'+'\n';
	htmltext+=SPACES.substr(0,16)+'background-color:'+Project.margincolor+';'+'\n';
	htmltext+=SPACES.substr(0,12)+"}"+'\n';
	htmltext+='\n';
	//holder style
	htmltext+="/* Holder Style**********************************************************************  */"+'\n';
	htmltext+=SPACES.substr(0,12)+"#holder {"+'\n';
	htmltext+=SPACES.substr(0,16)+'left:0;'+'\n';
	htmltext+=SPACES.substr(0,16)+'top:0;'+'\n';
	htmltext+=SPACES.substr(0,16)+'width:100%;'+'\n';
	htmltext+=SPACES.substr(0,16)+'background-color:'+Project.bodycolor+';'+'\n';
	htmltext+=SPACES.substr(0,12)+"}"+'\n';
	htmltext+='\n';
	//All span and container styles
	htmltext+="/* Span Styles**********************************************************************  */"+'\n';
	htmltext+=SPACES.substr(0,12)+"span {"+'\n';
	htmltext+=SPACES.substr(0,16)+'display:block;'+'\n';
	htmltext+=SPACES.substr(0,16)+'float:left;'+'\n';
	htmltext+=SPACES.substr(0,16)+'overflow:hidden;'+'\n';
	htmltext+=SPACES.substr(0,12)+"}"+'\n';
	htmltext+='\n';
	//All img styles
	htmltext+="/* Img Styles**********************************************************************  */"+'\n';
	htmltext+=SPACES.substr(0,12)+"img {"+'\n';
	htmltext+=SPACES.substr(0,16)+'display:block;'+'\n';
	htmltext+=SPACES.substr(0,12)+"}"+'\n';
	htmltext+='\n';
	htmltext+="/* Container Styles Independent of State**********************************************************************  */"+'\n';
	var CR=Project.containers;
	for(var i=0;i<CR.length;i++) {
		//container styles
		htmltext+=SPACES.substr(0,12)+"#container"+i+" {"+'\n';
		htmltext+=SPACES.substr(0,16)+'background-color:'+CR[i].style.backgroundColor+';'+'\n';
		htmltext+=SPACES.substr(0,12)+"}"+'\n';
		htmltext+='\n';
		//container image if exists
		clearvalue="none";
		if(CR[i].image.src!=null) {
			img=CR[i].image.object;
			htmltext+=SPACES.substr(0,12)+"#container"+i+" img {"+'\n';
			htmltext+=SPACES.substr(0,16)+'width:'+img.style.width+';'+'\n';
			htmltext+=SPACES.substr(0,16)+'float:'+img.style.cssFloat+';'+'\n';
			htmltext+=SPACES.substr(0,16)+'margin-left:'+img.style.marginLeft+';'+'\n';
			htmltext+=SPACES.substr(0,16)+'margin-right:'+img.style.marginRight+';'+'\n';
			htmltext+=SPACES.substr(0,12)+"}"+'\n';
			htmltext+='\n';	
			if(CR[i].image.wrap) {
				clearvalue="none";
			}
			else {
				clearvalue="both";
			}
		}
		//container heading 1 styles
		htmltext+=SPACES.substr(0,12)+"#container"+i+" h1 {"+'\n';
		htmltext+=SPACES.substr(0,16)+'color:'+CR[i].style.h1.color+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-family:'+CR[i].style.h1.fontFamily+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-weight:'+CR[i].style.h1.fontWeight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-style:'+CR[i].style.h1.fontStyle+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-decoration:'+CR[i].style.h1.textDecoration+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-size:'+CR[i].style.h1.fontSize+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-left:'+CR[i].style.h1.marginLeft+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-top:'+CR[i].style.h1.marginTop+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-right:'+CR[i].style.h1.marginRight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.h1.marginBottom+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-align:'+CR[i].style.h1.textAlign+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'clear:'+clearvalue+';'+'\n';
		htmltext+=SPACES.substr(0,12)+"}"+'\n';
		htmltext+='\n';
		//container heading 2 styles
		htmltext+=SPACES.substr(0,12)+"#container"+i+" h2 {"+'\n';
		htmltext+=SPACES.substr(0,16)+'color:'+CR[i].style.h2.color+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-family:'+CR[i].style.h2.fontFamily+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-weight:'+CR[i].style.h2.fontWeight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-style:'+CR[i].style.h2.fontStyle+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-decoration:'+CR[i].style.h2.textDecoration+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-size:'+CR[i].style.h2.fontSize+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-left:'+CR[i].style.h2.marginLeft+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-top:'+CR[i].style.h2.marginTop+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-right:'+CR[i].style.h2.marginRight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.h2.marginBottom+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-align:'+CR[i].style.h2.textAlign+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'clear:'+clearvalue+';'+'\n';
		htmltext+=SPACES.substr(0,12)+"}"+'\n';
		htmltext+='\n';
		//container paragraph styles
		htmltext+=SPACES.substr(0,12)+"#container"+i+" p {"+'\n';
		htmltext+=SPACES.substr(0,16)+'color:'+CR[i].style.p.color+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-family:'+CR[i].style.p.fontFamily+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-weight:'+CR[i].style.p.fontWeight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-style:'+CR[i].style.p.fontStyle+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-decoration:'+CR[i].style.p.textDecoration+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-size:'+CR[i].style.p.fontSize+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-left:'+CR[i].style.p.marginLeft+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-top:'+CR[i].style.p.marginTop+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-right:'+CR[i].style.p.marginRight+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.p.marginBottom+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'text-align:'+CR[i].style.p.textAlign+';'+'\n';
		htmltext+=SPACES.substr(0,16)+'clear:'+clearvalue+';'+'\n';
		htmltext+=SPACES.substr(0,12)+"}"+'\n';
		htmltext+='\n';
	}
	htmltext+=showhtmlStateStyles();
	htmltext+=SPACES.substr(0,8)+'</style>'+'\n';
	return htmltext;
};


function showhtmlStateStyles() {
	var name, grid;
	var offset1,offset2;
	var htmltext="";
	for(var s=0;s<Project.states.length;s++) {
		name=Project.states[s].name;
		grid=Project.states[s].grid;
		var totHeight=gridHtoW(s);
		if(totHeight<100) {
			totHeight=100;
		}
		var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;
		var cwidth=(100-totalHorSpace)/grid.columns;
		htmltext+='/* styles for state '+name+' ---------------------------------------------------------  */'+'\n';
		offset1=12;
		offset2=16;
		if(s>0) {
			htmltext+=SPACES.substr(0,12)+'@media screen and (min-width:'+Project.states[s-1].grid.width+'rem) {'+'\n';
			offset1=16;
			offset2=20;
		}
		htmltext+='/* background ---------------------------------------------------------  */'+'\n';
		htmltext+=SPACES.substr(0,12)+'#back {'+'\n';
		htmltext+=SPACES.substr(0,16)+'left:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'top:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'background-color:'+Project.bodycolor+';'
		htmltext+=SPACES.substr(0,16)+'width:100%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+totHeight+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'z-index:-1'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+='/* margins ---------------------------------------------------------  */'+'\n';
		htmltext+=SPACES.substr(0,12)+'#topmargin {'+'\n';
		htmltext+=SPACES.substr(0,16)+'left:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'top:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'width:100%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+grid.topMargin+'%;'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+=SPACES.substr(0,12)+'#leftmargin {'+'\n';
		htmltext+=SPACES.substr(0,16)+'left:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'top:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+totHeight+'%;'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+=SPACES.substr(0,12)+'#rightmargin {'+'\n';
		htmltext+=SPACES.substr(0,16)+'left:'+(100-grid.sideMargins)+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'top:0;'+'\n';
		htmltext+=SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+totHeight+'%;'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+='/* spacers ---------------------------------------------------------  */'+'\n';
		htmltext+=SPACES.substr(0,12)+'#topspacer {'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-size:1pt;'+'\n';
		htmltext+=SPACES.substr(0,16)+'width:100%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+(grid.topMargin-grid.gutters)+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'background-color:'+Project.margincolor+';'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+=SPACES.substr(0,12)+'#leftspacer {'+'\n';
		htmltext+=SPACES.substr(0,16)+'font-size:1pt;'+'\n';
		htmltext+=SPACES.substr(0,16)+'width:'+(grid.sideMargins-grid.gutters)+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'height:'+(totHeight-grid.topMargin+grid.gutters)+'%;'+'\n';
		htmltext+=SPACES.substr(0,16)+'background-color:'+Project.margincolor+';'+'\n';
		htmltext+=SPACES.substr(0,12)+'}'+'\n';
		htmltext+='\n';
		htmltext+='/* containers ---------------------------------------------------------  */'+'\n';
		var CR=Project.containers;
		for(var i=0;i<CR.length;i++) {
			//container styles dependent on state
			htmltext+=SPACES.substr(0,offset1)+"#container"+i+"{"+'\n';
			htmltext+=SPACES.substr(0,offset2)+'width:'+(CR[i].columns[name]*cwidth +2*(CR[i].columns[name]-1)*grid.gutters)+'%;'+'\n';
			htmltext+=SPACES.substr(0,offset2)+'height:'+((cwidth*grid.rowratio)*CR[i].rows[name]+(CR[i].rows[name]-1)*2*grid.gutters)+'%;'+'\n';
			if(CR[i].style.centred) {
				htmltext+=SPACES.substr(0,offset2)+'float:none;'+'\n';
				htmltext+=SPACES.substr(0,offset2)+'margin-left:auto;'+'\n';
				htmltext+=SPACES.substr(0,offset2)+'margin-right:auto;'+'\n';
			}
			else {
				htmltext+=SPACES.substr(0,offset2)+'margin-left:'+2*grid.gutters+'%;'+'\n';
				htmltext+=SPACES.substr(0,offset2)+'margin-right:0%;'+'\n';
			}
			htmltext+=SPACES.substr(0,offset2)+'margin-top:'+2*grid.gutters+'%;'+'\n';
			htmltext+=SPACES.substr(0,offset1)+"}"+'\n';
			htmltext+='\n';
		}
		if(s>0) {
			htmltext+=SPACES.substr(0,12)+'}'+'\n';
		}
		htmltext+='\n';
	}
	return htmltext;
}

function showhtmlScript() {
	var htmltext=SPACES.substr(0,8)+'<script type="text/javascript">'+'\n';
	if($('screenw').checked) {
		htmltext+=SPACES.substr(0,12)+'window.onload=function() {document.getElementById("holder").style.height=(screen.availWidth)+"px"};'+'\n';
	}
	else {
			htmltext+=SPACES.substr(0,12)+'window.onload=function() {document.getElementById("holder").style.height=(window.innerWidth)+"px"};'+'\n';
	}
	if($('redow').checked) {
		htmltext+=SPACES.substr(0,12)+'window.onresize=doResize;'+'\n';
		htmltext+=SPACES.substr(0,12)+'function doResize() {location.reload()};'+'\n';
    }
    htmltext+=SPACES.substr(0,8)+'</script>'+'\n';
    return htmltext;
}

function showhtmlBody() {
	var htmltext=SPACES.substr(0,4)+'<body>'+'\n';
	htmltext+=SPACES.substr(0,8)+'<div id="holder">'+'\n';
	htmltext+=SPACES.substr(0,12)+'<div id="back"></div>'+'\n';
	htmltext+=SPACES.substr(0,12)+'<div id="topmargin"></div>'+'\n';
	htmltext+=SPACES.substr(0,12)+'<div id="leftmargin"></div>'+'\n';
	htmltext+=SPACES.substr(0,12)+'<div id="rightmargin"></div>'+'\n';
	htmltext+=SPACES.substr(0,12)+'<span id="topspacer"></span>'+'\n';
	htmltext+=SPACES.substr(0,12)+'<span id="leftspacer"></span>'+'\n';
	var CR=Project.containers;
	for(var i=0;i<CR.length;i++) {
		htmltext+=SPACES.substr(0,12)+'<span id="container'+i+'">'+'\n';
		htmltext+=SPACES.substr(0,16)+CR[i].content+'\n';
		htmltext+=SPACES.substr(0,12)+'</span>'+'\n';
	}
	htmltext+=SPACES.substr(0,8)+'</div>'+'\n';
	htmltext+=SPACES.substr(0,4)+'</body>'+'\n';
	return htmltext;
}	

