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
		//var gridWHratio=grid.width/grid.height;
		var gridWHratio=1/gridHtoW(s)
		var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;
		var cwidth=(100-totalHorSpace)/grid.columns;
		newwindow.document.writeln('/* styles for state '+name+' ---------------------------------------------------------  */');
		offset1=12;
		offset2=16;
		if(s>0) {
			newwindow.document.writeln(SPACES.substr(0,12)+'@media screen and (min-width:'+Project.states[s-1].grid.width+'em) {');
			offset1=16;
			offset2=20;
		}
		newwindow.document.writeln('/* margins ---------------------------------------------------------  */');
		newwindow.document.writeln(SPACES.substr(0,12)+'#topmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+grid.topMargin*gridWHratio+'%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#leftmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:100%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#rightmargin {');
		newwindow.document.writeln(SPACES.substr(0,16)+'left:'+(100-grid.sideMargins)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'top:0;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+grid.sideMargins+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:100%;');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln('/* spacers ---------------------------------------------------------  */');
		newwindow.document.writeln(SPACES.substr(0,12)+'#topspacer {');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:1pt;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:100%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+((grid.topMargin-grid.gutters)*gridWHratio)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln(SPACES.substr(0,12)+'#leftspacer {');
		newwindow.document.writeln(SPACES.substr(0,16)+'font-size:1pt;');
		newwindow.document.writeln(SPACES.substr(0,16)+'width:'+(grid.sideMargins-grid.gutters)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'height:'+(100-grid.topMargin*gridWHratio)+'%;');
		newwindow.document.writeln(SPACES.substr(0,16)+'background-color:'+Project.margincolor+';');
		newwindow.document.writeln(SPACES.substr(0,12)+'}');
		newwindow.document.writeln("");
		newwindow.document.writeln('/* containers ---------------------------------------------------------  */');
		var CR=Project.containers;
		for(var i=0;i<CR.length;i++) {
			//container styles dependent on state
			newwindow.document.writeln(SPACES.substr(0,offset1)+"#container"+i+"{");
			newwindow.document.writeln(SPACES.substr(0,offset2)+'width:'+(CR[i].columns[name]*cwidth +2*(CR[i].columns[name]-1)*grid.gutters)+'%;');
			newwindow.document.writeln(SPACES.substr(0,offset2)+'height:'+((cwidth*grid.rowratio)*CR[i].rows[name]+(CR[i].rows[name]-1)*2*grid.gutters)*gridWHratio+'%;');
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
	newwindow.document.writeln(SPACES.substr(0,12)+'// enquire.js v2.0.2 - Awesome Media Queries in JavaScript');
	newwindow.document.writeln(SPACES.substr(0,12)+'// Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/enquire.js');
	newwindow.document.writeln(SPACES.substr(0,12)+'// License: MIT (http://www.opensource.org/licenses/mit-license.php)');
	newwindow.document.writeln(SPACES.substr(0,12)+'(function(t){"use strict";function i(t,i){var s,n=0,e=t.length;for(n;e>n&&(s=i(t[n],n),s!==!1);n++);}function s(t){return"[object Array]"===Object.prototype.toString.apply(t)}function n(t){return"function"==typeof t}function e(t){this.options=t,!t.deferSetup&&this.setup()}function o(t,i){this.query=t,this.isUnconditional=i,this.handlers=[],this.mql=h(t);var s=this;this.listener=function(t){s.mql=t,s.assess()},this.mql.addListener(this.listener)}function r(){if(!h)throw Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!h("only all").matches}var h=t.matchMedia;e.prototype={setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(t){return this.options===t||this.options.match===t}},o.prototype={addHandler:function(t){var i=new e(t);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(t){var s=this.handlers;i(s,function(i,n){return i.equals(t)?(i.destroy(),!s.splice(n,1)):void 0})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){i(this.handlers,function(t){t.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var t=this.matches()?"on":"off";i(this.handlers,function(i){i[t]()})}},r.prototype={register:function(t,e,r){var h=this.queries,a=r&&this.browserIsIncapable;return h[t]||(h[t]=new o(t,a)),n(e)&&(e={match:e}),s(e)||(e=[e]),i(e,function(i){h[t].addHandler(i)}),this},unregister:function(t,i){var s=this.queries[t];return s&&(i?s.removeHandler(i):(s.clear(),delete this.queries[t])),this}},t.enquire=t.enquire||new r})(this);');
    newwindow.document.writeln(SPACES.substr(0,12)+'// End of enquire.js v2.0.2 - Awesome Media Queries in JavaScript'); 
    newwindow.document.writeln("");  
    newwindow.document.writeln(SPACES.substr(0,12)+'window.onload=setScale;');
    newwindow.document.writeln("");
    newwindow.document.writeln(SPACES.substr(0,12)+'// Browser Window Size and Position');
	newwindow.document.writeln(SPACES.substr(0,12)+'// copyright Stephen Chapman, 3rd Jan 2005, 8th Dec 2005');
	newwindow.document.writeln(SPACES.substr(0,12)+'// you may copy these functions but please keep the copyright notice as well');
	newwindow.document.writeln(SPACES.substr(0,12)+'function pageWidth() {return window.innerWidth != null? window.innerWidth: document.documentElement && document.documentElement.clientWidth ? document.documentElement.clientWidth:document.body != null? document.body.clientWidth:null;}');
    newwindow.document.writeln(SPACES.substr(0,12)+'// End of Browser Window Size and Position');
    newwindow.document.writeln("");
    exportScaleScript(newwindow);
    newwindow.document.writeln(SPACES.substr(0,8)+'</script>');
}

function exportBody(newwindow) {
	newwindow.document.writeln(SPACES.substr(0,4)+'<body>');
	newwindow.document.writeln(SPACES.substr(0,8)+'<div id="holder">');
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

function exportScaleScript(newwindow) {
	var gridHWratio;
	newwindow.document.writeln(SPACES.substr(0,12)+'function setScale() {');
	name=Project.states[0].name;
	grid=Project.states[0].grid;
	newwindow.document.writeln(SPACES.substr(0,16)+'var scale='+gridHtoW(0)+';');
	for(var s=1;s<Project.states.length;s++) {
		name=Project.states[s].name;
		grid=Project.states[s].grid;
		gridHWratio=gridHtoW(s)/grid.columns;
		newwindow.document.writeln(SPACES.substr(0,16)+'enquire.register("screen and (min-width:'+Project.states[s-1].grid.width+'em)", function() {');
       	newwindow.document.writeln(SPACES.substr(0,20)+'scale='+gridHtoW(s)+';');
		newwindow.document.writeln(SPACES.substr(0,16)+'});');
	}
	newwindow.document.writeln(SPACES.substr(0,16)+'document.getElementById("holder").style.height=(pageWidth()*scale)+"px"');
	newwindow.document.writeln(SPACES.substr(0,12)+'}');
}

function gridHtoW(s) {
	var name=Project.states[s].name;
	var grid=Project.states[s].grid;
	var totalHorSpace=grid.columns*2*grid.gutters+2*grid.sideMargins;  //percentage	
	var cwidth=(100-totalHorSpace)/grid.columns //percentage 
	CR=Project.containers;
	var i=0;
	var maxonline;
	var totalrows=0;
	var colcount=0;
	while (i<CR.length) {
		maxonline=0;
		if(CR[i].style.centred) {
			totalrows+=CR[i++].rows[name];
		}
		else {console.log(CR[i].columns[name],grid.columns)
			while (i<CR.length && colcount+CR[i].columns[name]<=grid.columns) {
				colcount+=CR[i].columns[name];
				maxonline=Math.max(maxonline,CR[i++].rows[name]);
			}
			totalrows+=maxonline;
			colcount=0;
		}
	}
	var totalVertDepth=totalrows*cwidth*grid.rowratio+totalrows*2*grid.gutters+grid.topMargin;  //percentage	
	return totalVertDepth/100; 
}

