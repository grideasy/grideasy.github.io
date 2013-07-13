function exportHTML() {
	newwindow=window.open("","Exported HTML");
	newwindow.document.writeln('<!DOCTYPE HTML>');
	newwindow.document.writeln('<html>');
	newwindow.document.writeln(SPACES.substr(0,4)+'<head>');
	newwindow.document.writeln(SPACES.substr(0,8)+'<meta http-equiv="Content-Type" content="text/html; charset=utf-8">');
	newwindow.document.writeln(SPACES.substr(0,8)+'<title>GridEasy Exported HTML</title>');
	exportScript(newwindow);
	exportStyles(newwindow);
	newwindow.document.writeln(SPACES.substr(0,4)+'</head>');
	exportBody(newwindow);
	newwindow.document.writeln('</html>');
	newwindow.document.close();
	
}

function exportStyles(newwindow) {
	var img, clearvalue;
	newwindow.document.writeln(SPACES.substr(0,8)+'<style>');
	//Body styles
	newwindow.document.writeln("/* Body Styles**********************************************************************  */");
	newwindow.document.writeln(SPACES.substr(0,12)+"body {");
	newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
	newwindow.document.writeln(SPACES.substr(0,12)+"}");
	newwindow.document.writeln("");
	//All div styles
	newwindow.document.writeln("/* Div Styles**********************************************************************  */");
	newwindow.document.writeln(SPACES.substr(0,12)+"div {");
	newwindow.document.writeln(SPACES.substr(0,16)+'position:absolute;');
	newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
	newwindow.document.writeln(SPACES.substr(0,12)+"}");
	newwindow.document.writeln("");
	//holder style
	newwindow.document.writeln("/* Holder Style**********************************************************************  */");
	newwindow.document.writeln(SPACES.substr(0,12)+"#holder {");
	newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
	newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
	newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
	newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.bodycolor+';');
	newwindow.document.writeln(SPACES.substr(0,12)+"}");
	newwindow.document.writeln("");
	//All span and container styles
	newwindow.document.writeln("/* Span Styles**********************************************************************  */");
	newwindow.document.writeln(SPACES.substr(0,12)+"span {");
	newwindow.document.writeln(SPACES.substr(0,16)+'display:block;');
	newwindow.document.writeln(SPACES.substr(0,16)+'float:left;');
	newwindow.document.writeln(SPACES.substr(0,16)+'overflow:hidden;');
	newwindow.document.writeln(SPACES.substr(0,12)+"}");
	newwindow.document.writeln("");
	//All img styles
	newwindow.document.writeln("/* Img Styles**********************************************************************  */");
	newwindow.document.writeln(SPACES.substr(0,12)+"img {");
	newwindow.document.writeln(SPACES.substr(0,16)+'display:block;');
	newwindow.document.writeln(SPACES.substr(0,12)+"}");
	newwindow.document.writeln("");
	newwindow.document.writeln("/* Container Styles Independent of State**********************************************************************  */");
	var CR=Project.containers;
	for(var i=0;i<CR.length;i++) {
		//container styles
		newwindow.document.writeln(SPACES.substr(0,12)+"#container"+i+" {");
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+CR[i].style.backgroundColor+';');
		newwindow.document.writeln(SPACES.substr(0,12)+"}");
		newwindow.document.writeln("");
		//container image if exists
		clearvalue="none";
		if(CR[i].image.src!=null) {
			img=CR[i].image.object;
			newwindow.document.writeln(SPACES.substr(0,12)+"#container"+i+" img {");
			newwindow.document.writeln(SPACES.substr(0,16)+'width:'+img.style.width+';');
			newwindow.document.writeln(SPACES.substr(0,16)+'float:'+img.style.cssFloat+';');
			newwindow.document.writeln(SPACES.substr(0,16)+'margin-left:'+img.style.marginLeft+';');
			newwindow.document.writeln(SPACES.substr(0,16)+'margin-right:'+img.style.marginRight+';');
			newwindow.document.writeln(SPACES.substr(0,12)+"}");
			newwindow.document.writeln("");	
			if(CR[i].image.wrap) {
				clearvalue="none";
			}
			else {
				clearvalue="both";
			}
		}
		//container heading 1 styles
		newwindow.document.writeln(SPACES.substr(0,12)+"#container"+i+" h1 {");
		newwindow.document.writeln(SPACES.substr(0,16)+'color:'+CR[i].style.h1.color+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-family:'+CR[i].style.h1.fontFamily+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-weight:'+CR[i].style.h1.fontWeight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-style:'+CR[i].style.h1.fontStyle+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-decoration:'+CR[i].style.h1.textDecoration+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:'+CR[i].style.h1.fontSize+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-left:'+CR[i].style.h1.marginLeft+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-top:'+CR[i].style.h1.marginTop+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-right:'+CR[i].style.h1.marginRight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.h1.marginBottom+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-align:'+CR[i].style.h1.textAlign+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'clear:'+clearvalue+';');
		newwindow.document.writeln(SPACES.substr(0,12)+"}");
		newwindow.document.writeln("");
		//container heading 2 styles
		newwindow.document.writeln(SPACES.substr(0,12)+"#container"+i+" h2 {");
		newwindow.document.writeln(SPACES.substr(0,16)+'color:'+CR[i].style.h2.color+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-family:'+CR[i].style.h2.fontFamily+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-weight:'+CR[i].style.h2.fontWeight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-style:'+CR[i].style.h2.fontStyle+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-decoration:'+CR[i].style.h2.textDecoration+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:'+CR[i].style.h2.fontSize+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-left:'+CR[i].style.h2.marginLeft+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-top:'+CR[i].style.h2.marginTop+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-right:'+CR[i].style.h2.marginRight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.h2.marginBottom+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-align:'+CR[i].style.h2.textAlign+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'clear:'+clearvalue+';');
		newwindow.document.writeln(SPACES.substr(0,12)+"}");
		newwindow.document.writeln("");
		//container paragraph styles
		newwindow.document.writeln(SPACES.substr(0,12)+"#container"+i+" p {");
		newwindow.document.writeln(SPACES.substr(0,16)+'color:'+CR[i].style.p.color+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-family:'+CR[i].style.p.fontFamily+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-weight:'+CR[i].style.p.fontWeight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-style:'+CR[i].style.p.fontStyle+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-decoration:'+CR[i].style.p.textDecoration+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:'+CR[i].style.p.fontSize+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-left:'+CR[i].style.p.marginLeft+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-top:'+CR[i].style.p.marginTop+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-right:'+CR[i].style.p.marginRight+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'margin-bottom:'+CR[i].style.p.marginBottom+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'text-align:'+CR[i].style.p.textAlign+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'clear:'+clearvalue+';');
		newwindow.document.writeln(SPACES.substr(0,12)+"}");
		newwindow.document.writeln("");
	}
	exportStateStyles(newwindow);
	newwindow.document.writeln(SPACES.substr(0,8)+'</style>');
};


function exportStateStyles(newwindow) {
	var name, grid;
	var offset1,offset2;
	for(var s=0;s<Project.states.length;s++) {
		name=Project.states[s].name;
		grid=Project.states[s].grid;
		var totHeight=gridHtoW(s);
		if(totHeight<100) {
			totHeight=100;
		}
		var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;
		var cwidth=(100-totalHorSpace)/grid.columns;
		newwindow.document.writeln('/* styles for state '+name+' ---------------------------------------------------------  */');
		offset1=12;
		offset2=16;
		if(s>0) {
			newwindow.document.writeln(SPACES.substr(0,12)+'@media screen and (min-width:'+Project.states[s-1].grid.width+'rem) {');
			offset1=16;
			offset2=20;
		}
		newwindow.document.writeln('/* background ---------------------------------------------------------  */');
		newwindow.document.writeln(SPACES.substr(0,12)+'#back {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.bodycolor+';')
		newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+totHeight+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'z-index:-1');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln('/* margins ---------------------------------------------------------  */');
		newwindow.document.writeln(SPACES.substr(0,12)+'#topmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+grid.topMargin+'%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#leftmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+totHeight+'%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#rightmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:'+(100-grid.sideMargins)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+totHeight+'%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln('/* spacers ---------------------------------------------------------  */');
		newwindow.document.writeln(SPACES.substr(0,12)+'#topspacer {');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:1pt;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+(grid.topMargin-grid.gutters)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#leftspacer {');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:1pt;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+(grid.sideMargins-grid.gutters)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+(totHeight-grid.topMargin+grid.gutters)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln('/* containers ---------------------------------------------------------  */');
		var CR=Project.containers;
		for(var i=0;i<CR.length;i++) {
			//container styles dependent on state
			newwindow.document.writeln(SPACES.substr(0,offset1)+"#container"+i+"{");
			newwindow.document.writeln(SPACES.substr(0,offset2)+'width:'+(CR[i].columns[name]*cwidth +2*(CR[i].columns[name]-1)*grid.gutters)+'%;');
			newwindow.document.writeln(SPACES.substr(0,offset2)+'height:'+((cwidth*grid.rowratio)*CR[i].rows[name]+(CR[i].rows[name]-1)*2*grid.gutters)+'%;');
			if(CR[i].style.centred) {
				newwindow.document.writeln(SPACES.substr(0,offset2)+'float:none;');
				newwindow.document.writeln(SPACES.substr(0,offset2)+'margin-left:auto;');
				newwindow.document.writeln(SPACES.substr(0,offset2)+'margin-right:auto;');
			}
			else {
				newwindow.document.writeln(SPACES.substr(0,offset2)+'margin-left:'+2*grid.gutters+'%;');
				newwindow.document.writeln(SPACES.substr(0,offset2)+'margin-right:0%;');
			}
			newwindow.document.writeln(SPACES.substr(0,offset2)+'margin-top:'+2*grid.gutters+'%;');
			newwindow.document.writeln(SPACES.substr(0,offset1)+"}");
			newwindow.document.writeln("");
		}
		if(s>0) {
			newwindow.document.writeln(SPACES.substr(0,12)+'}');
		}
		newwindow.document.writeln("");
	}
}

function exportScript(newwindow) {
	newwindow.document.writeln(SPACES.substr(0,8)+'<script type="text/javascript">');
	newwindow.document.writeln(SPACES.substr(0,12)+'window.onload=function() {document.getElementById("holder").style.height=(screen.availWidth)+"px"};');
    newwindow.document.writeln(SPACES.substr(0,8)+'</script>');
}

function exportBody(newwindow) {
	newwindow.document.writeln(SPACES.substr(0,4)+'<body>');
	newwindow.document.writeln(SPACES.substr(0,8)+'<div id="holder">');
	newwindow.document.writeln(SPACES.substr(0,12)+'<div id="back"></div>');
	newwindow.document.writeln(SPACES.substr(0,12)+'<div id="topmargin"></div>');
	newwindow.document.writeln(SPACES.substr(0,12)+'<div id="leftmargin"></div>');
	newwindow.document.writeln(SPACES.substr(0,12)+'<div id="rightmargin"></div>');
	newwindow.document.writeln(SPACES.substr(0,12)+'<span id="topspacer"></span>');
	newwindow.document.writeln(SPACES.substr(0,12)+'<span id="leftspacer"></span>');
	var CR=Project.containers;
	for(var i=0;i<CR.length;i++) {
		newwindow.document.writeln(SPACES.substr(0,12)+'<span id="container'+i+'">');
		newwindow.document.writeln(SPACES.substr(0,16)+CR[i].content);
		newwindow.document.writeln(SPACES.substr(0,12)+'</span>');
	}
	newwindow.document.writeln(SPACES.substr(0,8)+'</div>');
	newwindow.document.writeln(SPACES.substr(0,4)+'</body>');
}	

