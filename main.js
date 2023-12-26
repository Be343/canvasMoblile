var ultimoX, ultimoY;
color = "cyan";
widthOfLine = 2;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");



var width = screen.width;
newWidth = screen.width - 70;
newHeight = screen.height - 300;

if (width < 992) {
    document.getElementById("myCanvas").width = newWidth;
    document.getElementById("myCanvas").height = newHeight;
    document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", touch)

function touch(e) {
    console.log("touch");
    color = document.getElementById("color").value;
    widthOfLine = document.getElementById("Largura").value;

    ultimoX = e.touches[0].clientX - canvas.offsetLeft
    ultimoY = e.touches[0].clientX - canvas.offsetTop
}
canvas.addEventListener("touchmove", mover);

function mover(e) {
    console.log("mover")

    atualX = e.touches[0].clientX - canvas.offsetLeft
    atualY = e.touches[0].clientX - canvas.offsetTop

    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=widthOfLine;

    console.log("ultima Posição x "+ultimoX+ " ultimo posição y "+ultimoY);
    ctx.moveTo(ultimoX, ultimoY);

    console.log("atual Posição x "+atualX+ " atual posição y "+atualY);
    ctx.lineTo(atualX,atualY);
    ctx.stroke();
    ultimoX=atualX;
    ultimoY=atualY;
}

function limpar() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}