screen_width = screen.width
newwith= screen.width - 70
newhight = screen.height - 300

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="black";
width_of_line="2";
ctx.strokeStyle = color;    
ctx.lineWidth= 3;
if(screen_width<990){
    document.getElementById("myCanvas").width= newwith;
    document.getElementById("myCanvas").height= newhight;
    document.body.style.overflow = "hidden";
}
    canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) 
{
    console.log("my_touchstart");
 
         
    lastpositionofx = e.touches[0].clientX - canvas.offsetLeft;
    lastpositionofy = e.touches[0].clientY - canvas.offsetTop;
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
}
canvas.addEventListener("touchmove",my_touchmove);
function my_touchmove(e){

    console.log("my_touchMove");
    current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;

  
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;  

   
    ctx.moveTo(lastpositionofx, lastpositionofy);

   
    ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
    ctx.stroke();

    lastpositionofx = current_position_of_touch_x; 
    lastpositionofy = current_position_of_touch_y;
       
}
