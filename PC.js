// Variables
console.log("PC");

     
var slideChange = function() {               
    if(this.Nb == slideNb) return;
    window.scroll(0,0);
    frame[slideNb].style.zIndex = 10;
    slideNb = this.Nb;
    var slide = frame[slideNb] 
    slide.style.zIndex = 20;
    head[slideNb].style.backgroundColor = "#0055FF";
    head[slideNb].style.boxShadow = "0px 12px 6px 2px rgba(0, 0, 0, 0.5)";    

    var slideUp = function() {
        for(var i = 0; i < 4; i++) {
            if (i != slideNb) {
                head[i].style.backgroundColor = "#00AAFF";
                head[i].style.boxShadow = "0px 12px 6px 2px rgba(0, 0, 0, 0.1)";
                frame[i].style.zIndex = 0;
                frame[i].scrollTop = "0px";
                frame[i].style.top = "-600px";                  
            }
        }
    }
    
    var slideDown = function() {      
        if(parseInt(slide.style.top) < 0.14 * screen.availHeight) {
                slide.style.top = (parseInt(slide.style.top) + 12) + "px";
                setTimeout(slideDown, 1);
        }
        else {
            slide.style.top = (0.14 * screen.availHeight) + "px";
            slideUp();
        }
    }

    slideDown();
}

var reset = function() { 

    header.style.visibility = "visible";
    window.scroll(0,0);
    document.getElementById("logo").style.height = (0.5 * parseInt(header.style.height)) + "px";
    fontSize = "1em";
    marginTop = (0.14 * screen.availHeight) + "px";
    for (var i = 0; i <frame.length; i++) {
            frame[i].style.position = "absolute";
            frame[i].style.height = window.innerHeight + "px";
            frame[i].scrollTop = "0px";
            frame[i].style.top = (-1 * window.innerHeight) + "px";
    }
    frame[slideNb].style.top = marginTop;
}


for(var i=0; i<frameContent.length; i++)  {    
    frameContent[i].style.fontSize = fontSize;
    frameContent[i].style.marginTop = marginTop;
    frameContent[i].style.height = "auto";   
}


var main = function() { 

    frame[0] = document.getElementById("home_frame");
    frame[1] = document.getElementById("services_frame");
    frame[2] = document.getElementById("location_frame");
    frame[3] = document.getElementById("contact_frame");


    frame[0].style.top = "0px";
    frame[1].style.top = "-600px";
    frame[2].style.top = "-600px";
    frame[3].style.top = "-600px";

    header = document.getElementById("header");
    header.style.height = (0.14 * screen.availHeight) + "0px";

    document.getElementById("details").innerHTML = "High Street, Whitchurch, Aylesbury, HP22 4JA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Tel: 01296 641226 ";

    var menu_ = document.createElement("div");
    menu_.id = "menu";
    menu_.className = "subheader";
    header.appendChild(menu_);

    var home_ = document.createElement("div");
    home_.id = "home";
    home_.className = "menus";
    home_.innerHTML = "Home";    
    menu_.appendChild(home_);

    var services_ = document.createElement("div");
    services_.id = "services";
    services_.className = "menus";
    services_.innerHTML = "Services";
    menu_.appendChild(services_);

    var location_ = document.createElement("div");
    location_.id = "location";
    location_.className = "menus";
    location_.innerHTML = "Location";
    menu_.appendChild(location_);

    var contact_ = document.createElement("div");
    contact_.id = "contact";
    contact_.className = "menus";
    contact_.innerHTML = "Contact";
    menu_.appendChild(contact_);

    head[0] = document.getElementById("home");
    head[1] = document.getElementById("services");
    head[2] = document.getElementById("location");
    head[3] = document.getElementById("contact"); 

    head[slideNb].style.backgroundColor = "#0055FF";
    head[slideNb].style.boxShadow = "0px 12px 6px 2px rgba(0, 0, 0, 0.5)"; 

    for (var i = 0; i < 4; i++) {
        head[i].addEventListener("click", slideChange);
        head[i].Nb = i;
        frame[i].Nb = i;
        frame[i].style.visibility = "visible";
    }

    frameHeader=getElementsByClassName("frame_header");
    frameContent=getElementsByClassName("frame_content");

    reset();
    
}

window.onorientationchange = reset;
window.onresize = reset;