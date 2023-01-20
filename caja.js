class Billete {
    constructor(v, c) {
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = imagenes[this.valor];
    }
}

var imagenes = [];
var entregado = [];
imagenes["100"] = "100.jfif"
imagenes["50"] = "50.jfif"
imagenes["20"] = "20.jfif"
imagenes["10"] = "10.jfif"
imagenes["5"] = "5jfif.jfif"


function entregarDinero() {
    resultado.innerHTML = "";
    var t = document.getElementById("dinero");
    dinero = parseInt(t.value);
    for(var bi of caja) {
        if(dinero > 0) {
            div = Math.floor(dinero / bi.valor);
            if(div > bi.cantidad) {
                papeles = bi.cantidad
            } else {
                papeles = div;
            }
            entregado.push(new Billete(bi.valor, papeles));
            dinero = dinero - (bi.valor * papeles);
        }
    }
    if(dinero > 0) {
        resultado.innerHTML = "Soy un cajero que no puede darte esa cantidad";
    } else {
        for(var e of entregado) {
            if(e.cantidad > 0) {
                resultado.innerHTML = resultado.innerHTML + e.cantidad + " billetes de $" + e.valor + "<br />";
                resultado.innerHTML += "<p>Retiraste:<br /></br>";

                for(var bi = 1; bi <= e.cantidad; bi++) {
                            resultado.innerHTML += "<img src=" + e.imagen.src + " />" + "<br /> <hr />"
                }
            }
        }
    }
}

function dineroRestante() {
    var total = 0;
    for(var bi of caja) {
        total +=  bi.valor * bi.cantidad;
     } if (entregarDinero == true) {
        total = total - valor
     }
    alert("La cantidad actual de dinero es de " + total);
}

var caja = [];
var entregado = [];
caja.push(new Billete(100, 5));
caja.push(new Billete(50, 10)); 
caja.push(new Billete(20, 5)); 
caja.push(new Billete(10, 10)); 
caja.push(new Billete(5, 5));


var dinero = 0;
var div = 0;
var papeles = 0;

var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);
var resultado = document.getElementById("resultado");
var total = document.getElementById("total");
total.addEventListener("click", dineroRestante);