var lienzo = document.querySelector("canvas");
        var ejex = lienzo.getContext("2d");
        var ejey = lienzo.getContext("2d");
        var lineax= lienzo.getContext("2d")
        //var lineay= lienzo.getContext("2d")
        var punto2 = lienzo.getContext("2d");
        var linea = lienzo.getContext("2d");
        var vector = lienzo.getContext("2d");
        var pf1 = null;
        var pf2 = null;
        var pf3 = null;
        var pf4 = null;
        var pf5 = null;
        var pf6 = null;
        var pf7 = null;
        var pf8 = null;
        var pf9 = null;
        var totalpf;
        var pi1 = null;
        var pi2 = null;
        var pi3 = null;
        var pi4 = null;
        var pi5 = null;
        var pi6 = null;
        var pi7 = null;
        var pi8 = null;
        var pi9 = null;
        var totalpi;
        var ee1 = null;
        var ee2 = null;
        var ee3 = null;
        var ee4 = null;
        var ee5 = null;
        var ee6 = null;
        var ee7 = null;
        var ee8 = null;
        var totalee;
        var vc1 = null;
        var vc2 = null;
        var vc3 = null;
        var vc4 = null;
        var vc5 = null;
        var vc6 = null;
        var vc7 = null;
        var vc8 = null;
        var vc9 = null;
        var titulos = ["Fuerza Financiera", "Fuerza Industrial", "Estabilidad del Entorno", "Ventaja competitiva"]
        var totalvc;
        var puntox = null;
        var puntoy = null;
        var numerosxp = [1,2,3,4,5,6,0];
        var numerosxn = [-6,-5, -4, -3, -2, -1, 0];
        var numerosyp = [6,5,4,3,2,1,0];
        var numerosyn = [0,-1,-2, -3, -4, -5, -6];
        var texto = lienzo.getContext("2d");
        var y1 = null;
        //ejey.fillStyle = "cyan";
        //ejex.fillRect(x,y,tamñodepuntox,tamañodepuntoy);
        //ejey.fillRect(350, 50, 10, 600);
        //ejex.fillStyle = "cyan";
        //ejex.fillRect(0, 350, 650, 10);
        ejey.moveTo(350,50);
        ejey.lineTo(350,650);
        ejey.stroke();
        ejex.moveTo(50,350);
        ejex.lineTo(650,350);
        ejex.stroke();

        texto.font= " bold 20px sans-serif";
        //convertir a for
        texto.fillText(numerosxn[0],50,340);//-6
        texto.fillText(numerosxn[1],100,340);//-5
        texto.fillText(numerosxn[2],150,340);//-4
        texto.fillText(numerosxn[3],200,340);//-3
        texto.fillText(numerosxn[4],250,340);//-2
        texto.fillText(numerosxn[5],300,340);//-1
        //texto.fillText(numerosxn[6],350,340);//0
        texto.fillText(numerosxp[0],400,340);//1
        texto.fillText(numerosxp[1],450,340);//2
        texto.fillText(numerosxp[2],500,340);//3
        texto.fillText(numerosxp[3],550,340);//4
        texto.fillText(numerosxp[4],600,340);//5
        texto.fillText(numerosxp[5],650,340);//6
        // ejey
        texto.fillText(numerosyp[0],360,50);//-6
        texto.fillText(numerosyp[1],360,100);//-5
        texto.fillText(numerosyp[2],360,150);//-4
        texto.fillText(numerosyp[3],360,200);//-3
        texto.fillText(numerosyp[4],360,250);//-2
        texto.fillText(numerosyp[5],360,300);//-1
        
        texto.fillText(numerosyn[1],360,400);//1
        texto.fillText(numerosyn[2],360,450);//2
        texto.fillText(numerosyn[3],360,500);//3
        texto.fillText(numerosyn[4],360,550);//4
        texto.fillText(numerosyn[5],360,600);//5
        texto.fillText(numerosyn[6],360,650);//6
        //titulos
        texto.fillText(titulos[0],290,30)
        texto.fillText(titulos[1],520,370)
        texto.fillText(titulos[3],00,370)
        texto.fillText(titulos[2],280,680)
        function FF() {
            pf1 = document.getElementById("pf1").value;
            pf2 = document.getElementById("pf2").value;
            pf3 = document.getElementById("pf3").value;
            pf4 = document.getElementById("pf4").value;
            pf5 = document.getElementById("pf5").value;
            pf6 = document.getElementById("pf6").value;
            pf7 = document.getElementById("pf7").value;
            pf8 = document.getElementById("pf8").value;
            pf9 = document.getElementById("pf9").value;
            totalpf = (parseInt(pf1) + parseInt(pf2) + parseInt(pf3) + parseInt(pf4) + parseInt(pf5) + parseInt(pf6) + parseInt(pf7)+parseInt(pf8)+parseInt(pf9));
            var totalpfdiv = parseFloat(totalpf / 9);
            
            var restoff= totalpf % 7;
            return totalpfdiv;
            


        }
         function FI() {
            pi1 = document.getElementById("pi1").value;
            pi2 = document.getElementById("pi2").value;
            pi3 = document.getElementById("pi3").value;
            pi4 = document.getElementById("pi4").value;
            pi5 = document.getElementById("pi5").value;
            pi6 = document.getElementById("pi6").value;
            pi7 = document.getElementById("pi7").value;
            pi8 = document.getElementById("pi8").value;
            pi9 = document.getElementById("pi9").value;
            totalpi = (parseInt(pi1) + parseInt(pi2) + parseInt(pi3) + parseInt(pi4) + parseInt(pi5) + parseInt(pi6) + parseInt(pi7)+parseInt(pi8)+parseInt(pi9));
            var totalpidiv = parseFloat(totalpi / 9);
            
            //console.log(totalpidiv);
            var restofi= totalpi % 7;
            //console.log(totalpidiv);
            return totalpidiv;
            

        }
        function EE() {
            ee1 = document.getElementById("ee1").value;
            ee2 = document.getElementById("ee2").value;
            ee3 = document.getElementById("ee3").value;
            ee4 = document.getElementById("ee4").value;
            ee5 = document.getElementById("ee5").value;
            ee6 = document.getElementById("ee6").value;
            ee7 = document.getElementById("ee7").value;
            ee8 = document.getElementById("ee8").value;
            totalee = (parseInt(ee1) + parseInt(ee2) + parseInt(ee3) + parseInt(ee4) + parseInt(ee5) + parseInt(ee6) + parseInt(ee7) + parseInt(ee8));
            var totaleediv = parseFloat(totalee / 8);
            
            //console.log(totaleediv);
            var restoee= totalee % 7;
            //console.log(totaleediv);
            return totaleediv;

         }
        function VC() { 
        //obtenemos el valor de la primera pregunta mediante el metodo value y lo guardamos en la variable vc1
            vc1 = document.getElementById("vc1").value;
            vc2 = document.getElementById("vc2").value;
            vc3 = document.getElementById("vc3").value;
            vc4 = document.getElementById("vc4").value;
            vc5 = document.getElementById("vc5").value;
            vc6 = document.getElementById("vc6").value;
            vc7 = document.getElementById("vc7").value;
            vc8 = document.getElementById("vc8").value;
            vc9 = document.getElementById("vc9").value;
            // ese valor vc1 lo volvemos numero mediante el metodo parseInt
            totalvc = (parseInt(vc1) + parseInt(vc2) + parseInt(vc3) + parseInt(vc4) + parseInt(vc5) + parseInt(vc6) + parseInt(vc7) + parseInt(vc8) + parseInt(vc9));
            var totalvcdiv = parseFloat(totalvc / 9);
            
            //console.log(totalvcdiv);
            var restovc= totalvc % 7;
            //console.log(totalvcdiv);
            return totalvcdiv;
         }
        
        function resultado() {
            puntoy = parseFloat((FF()+EE()));
            var py=puntoy-350;
            puntox = parseFloat((FI()+VC()));
            var px = puntox-350;
            var totalpfdiv2 = parseFloat(FF());
            var totalpidiv2 = parseFloat(FI());
            var totaleediv2 = parseFloat(EE());
            var totalvcdiv2 = parseFloat(VC());
            console.log(puntox,puntoy);
            console.log(px,py);
            punto2.fillStyle = "black";
            punto2.fillRect(px, py, 5, 5);
            // FF + FI
            linea.moveTo(350, totalpfdiv2);
            linea.lineTo(totalpidiv2, 350);
            linea.stroke();
            // FF +VC
            linea.moveTo(350, totalpfdiv2);
            linea.lineTo(totalvcdiv2, 350);
            linea.stroke();
            //FI+EE
            linea.moveTo(350, totaleediv2);
            linea.lineTo(totalpidiv2, 350);
            linea.stroke();
            //EE+VC
            linea.moveTo(350, totaleediv2);
            linea.lineTo(totalvcdiv2, 350);
            linea.stroke();
            //vector
            vector.moveTo(350, 350);
            vector.lineTo(px, py);
            vector.stroke();
            //ESTRATEGIA
            let html=document.querySelector(".container").innerHTML;
                if (px>350 && px<650 && py>50 && py<350) {
                        document.getElementById("estrategias").innerHTML=`<h3>Agresivo</h3>
                        <p>La organización debe explotar su posicion favorable </p>
                        <p>Se debe elegir las siguientes estrategias: </p>
                        <ul>
                                <li>Diversificación Concentrica</li>
                                <li>Integración Vertical</li>
                                <li>Concentranción</li>
                                <li>Liderazgo en costo</li>
                        </ul>
                         `;
                        alert("debe elegir la estrategia agresiva")
                        
                    
                }
                if (px>50 && px<350 && py>50 && py<350) {
                        document.getElementById("estrategias").innerHTML=`<h3>Conservador</h3>
                        <p>La organización puede hacer algunas cosas mejor
                        que sus competidores y captura ciertos mercados </p>
                        <p>Se debe elegir las siguientes estrategias: </p>
                        <ul>
                                <li>Segmentación de mercados</li>
                                <li>Diversificación conglomerada</li>
                                <li>Diversificación global</li>
                                <li>Enfoque</li>
                        </ul>
                         `;
                    
                        alert("debe elegir la estrategia Conservador")
                        
                    
                    
                }
                if (px>50 && px<350 && py>350 && py<650) {
                        document.getElementById("estrategias").innerHTML=` <h3>Defensivo</h3>
                        <p>la organización debe buscar la supervivencia y salir
                        de la situación crítica. </p>
                        <p>Se debe elegir las siguientes estrategias: </p>
                        <ul>
                                <li>Reducción de costos</li>
                                <li>Atrincheramiento</li>
                                <li>Desposeimiento</li>
                                <li>Fusion</li>
                        </ul>
                         `;
                    
                        alert("debe elegir la estrategia Defensivo")
                        
                    
                }
                if (px>350 && px<650 && py>350 && py<650) {
                        document.getElementById("estrategias").innerHTML=`<h3>Competitivo</h3>
                        <p>la organización puede hacer las cosas mejor que sus
                        competidores.</p>
                        <p>Se debe elegir las siguientes estrategias: </p>
                        <ul>
                                <li>Fusión concéntrica</li>
                                <li>Fusión conglomerada</li>
                                <li>Reconversión</li>
                                <li>Diferenciación</li>
                        </ul>
                         `;
                    
                        alert("debe elegir la estrategia Competitivo")
                    
                    
                }
            

            /*
            punto2.fillRect(totalpidiv, totalpfdiv, 5, 5);
            lineax.fillRect(310,totalpfdiv,50,5)   
            lineax.fillStyle="red";
            //lineay.fillRect(totalpidiv,5,5,350)
            //lineay.fillStyle="blue";
            //linea.moveTo(x1, y1)izquierdal;
            //linea.lineTo(x2, y2)derechal;
            linea.moveTo(310, totalpfdiv2);
            linea.lineTo(totalpidiv2, 300);
            linea.stroke();
            vector.moveTo(310, 300);
            vector.lineTo(totalpidiv2, totalpfdiv2);
            vector.stroke(); 
            */
         }
         