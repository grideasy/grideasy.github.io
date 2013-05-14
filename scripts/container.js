function Box(CR) {  //CR is a container
	CR.content=CR.content||"<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
	this.box=document.createElement('div');
	var bs=this.box.style;
}
