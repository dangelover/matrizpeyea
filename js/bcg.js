var lienzo = document.querySelector("canvas");
var ejex = lienzo.getContext("2d");
var ejey = lienzo.getContext("2d");
var punto2 = lienzo.getContext("2d");
var titulos = ["0%", "100%"];
var texto = lienzo.getContext("2d");
var valor191 = null;
var valor192 = null;
var valor201 = null;
var valor202 = null;
var venta1 = null;
var venta2 = null;
var px = null;
var py = null;
var resvenprod1;
var totalvenprod1;
var resvenprod2;
var totalvenprod2;
var mercadoprod1;
var totalmercadoprod1;
var mercadoprod2;
var totalmercadoprod2;


ejey.moveTo(250,0);
ejey.lineTo(250,500);
ejey.stroke();
ejex.moveTo(0,250);
ejex.lineTo(500,250);
ejex.stroke();

function  resultado() { 
    venta1 = document.getElementById("venta1").value;
    //venta2 = document.getElementById("venta2").value;
    valor191 = document.getElementById("valor191").value;
    //valor192 = document.getElementById("valor192").value;
    valor201 = document.getElementById("valor201").value;
    //valor202 = document.getElementById("valor202").value;
    resvenprod1 = parseInt((venta1/valor191)*100);
    totalvenprod1 = parseInt(500-resvenprod1);
    //resvenprod2 = parseInt((venta2/valor192)*100);
    //totalvenprod2 = parseInt(500-resvenprod2);

    mercadoprod1 = parseFloat(((valor201-valor191)/valor191)*100);
    totalmercadoprod1 = parseFloat(500-mercadoprod1);
    //mercadoprod2 = parseFloat(((valor202-valor192)/valor192)*100);
    //totalmercadoprod2= parseFloat(500-mercadoprod2);
    px = totalvenprod1;
    py = totalmercadoprod1;
    console.log(px,py); 

    punto2.fillStyle = "black";
    punto2.fillRect(px, py, 5, 5);
    if (px>250 && px<500 && py>0 && py<250) {
        document.getElementById("estrategias").innerHTML=`<h3>Producto Signo de interrogacion</h3>
        <ul>
                <li>Baja participación relativa del mercado, aunque compiten en una industria de
                alto crecimiento.</li>
                <li>Las necesidades de efectivo son altas</li>
                <li>La generación de caja es baja</li>
                <li>La organización debe decidir si fortalecerse con estrategias intensivas o desinvertir</li>
        </ul>
         `;
        alert("Producto Signo de interrogacion")
        
    
}
if (px>0 && px<250 && py>0 && py<250) {
        document.getElementById("estrategias").innerHTML=`<h3>Producto Estrella</h3>
        <ul>
                <li>Alta participación relativa del mercado y alta tasa de crecimiento de la industria</li>
                <li>Constituyen las mejores oportunidades de largo plazo para crecimiento y rentabilidad.</li>
                <li>Requieren inversión substancial para mantener o consolidar la posición dominante</li>
                <li>Son aplicables estrategias de integración, estrategias intensivas, y aventuras conjuntas</li>
        </ul>
         `;
    
        alert("Producto Estrella")
        
    
    
}
if (px>0 && px<250 && py>250 && py<500) {
        document.getElementById("estrategias").innerHTML=` <h3>Producto Vaca Lechera</h3>
        <ul>
                <li>Alta participación relativa del mercado pero compiten en una industria de bajo
                crecimiento.</li>
                <li>Generan exceso de liquidez para sus necesidades</li>
                <li>Este exceso es recolectado para otros propósitos</li>
                <li>Deben ser administradas para mantener una posición sólida el mayor tiempo posible</li>
        </ul>
         `;
    
        alert("Producto Vaca Lechera")
        
    
}
if (px>250 && px<500 && py>250 && py<500) {
        document.getElementById("estrategias").innerHTML=`<h3> Producto Perro</h3>
        <ul>
                <li>Su posición débil interna y externa provoca la aplicación de estrategias de Liquidación, desinversión o reducción.</li>
                <li>Baja participación relativa del mercado y compite en un mercado de lento o de
                poco crecimiento</li>
        </ul>
         `;
    
        alert("Perros")
    
    
}







 }