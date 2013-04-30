Project={
	currentstate:2,
	states:[],  // array of state objects in order of max-widths
	containers:[], //array of content container objects in order from top to bottom and left to right
	default_breaks:[28.75,40.5]  //breakpoints in ems
}

function State()
{
	this.grid={
		width:960, //grid width in pixels will be changed to ems
		height:540, //grid height in pixels will be changed to ems
		columns:4,
		rows:false,
		topMargin:2,
		sideMargins:2,
		gutters:2
	};
	this.rows=[]; //an array of row positions
}	

function Container(id)  //container object storing data that does not change with states
{
	this.id=id;
	this.left_margin=false;   //container snaps to margins if true otherwise snap to grid
	this.right_margin=false;
	this.top_margin=false;
	this.bottom_margin=false;
	this.starts=[];  //array of column number for left hand edge in order of states
	this.widths=[]; //array number of columns container covers in order of states
	this.height; //height of container if set measured as a percentage. 
	this.content; //content object
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
