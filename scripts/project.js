Project={
	nsc:0, //new state count;
	dfs:16,  //default font size, will be re-read
	currentstate:2,  //need default values for state values
	maxstates:8, //maximum possible number of states
	width:960,  //px
	height:2*960, //px
	states:[],  // array of state objects in order of max-widths
	containers:[], //array of content container objects in order from top to bottom and left to right
	default_states:["Smart Phone","Tablet","Computer"],
	default_breaks:[[28.75,1],[40.5,3]],  //breakpoints in ems and number of columns
	//breaks:[[28.75,1],[40.5,3]], //active breakpoints in ems and number of columns
	staterows:3, //number of rows in state table containing states;
	content:"", //content as text
	toedge:true //when true containers snap to edges of grid, when false containers snap to semi-gutters around them
}

function State()
{
	this.name;
	this.grid={
		width:960, //grid width in pixels will be changed to ems equal to break point for state
		height:1920, //grid height in pixels will be changed to ems
		columns:6,
		rows:0,
		rowratio:1,
		topMargin:2,
		sideMargins:2,
		gutters:1
	};
}	

function Container(id)  //container object storing data that does not change with states
{
	this.id=id;
	this.start=0;  //start column
	this.rows=1; //height of container in rows. 
	this.content; //content text HTML format
	this.box; //HTML element containing content
}

function GridBox(left,top,width,height,colour)
{
	this.gbox=document.createElement('div');
	this.gbox.style.position='absolute';
	this.gbox.style.left=left*Project.states[Project.currentstate].width/100;
	this.gbox.style.top=height*Project.states[Project.currentstate].height/100;
	this.gbox.style.width=width*Project.states[Project.currentstate].width/100;
	this.gbox.style.height=height*Project.states[Project.currentstate].height/100;
	
}
