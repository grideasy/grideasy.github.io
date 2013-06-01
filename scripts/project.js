Project={
	nsc:0, //new state count;
	dfs:16,  //default font size, will be re-read
	currentstate:2,  //need default values for state values
	currentcontainer:null,
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
	toedge:true, //when true containers snap to edges of grid, when false containers snap to semi-gutters around them
	bodycolor:"transparent", //body colour for project
	default_styles: { //default styles for all containers
		centred:false,
		backgroundColor:"#FFFFFF",
		h1: new Tag(2),
		h2: new Tag(1.5),
		p: new Tag(1)
	}
}

function Tag(fs) {
	this.color="#000000";
	this.fontSize=fs+"em";
	this.marginLeft="0em";
	this.marginTop=fs/4+"em";
	this.marginRight="0em";
	this.marginBottom=fs/4+"em";
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

function Container(id)  //container object
{
	this.id=id;
	this.start=0;  //start column
	this.columns={}; // associative array for width of container in columns for each state
	this.rows={}; // associative array for height of container in rows for each state. 
	this.content; //content text HTML format
	this.box; //HTML element containing content
	this.styles=Project.default_styles; //data that does not change with states
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
