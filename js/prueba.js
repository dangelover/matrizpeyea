var pf2;
pf2 = document.getElementById("pf2").value;
var i=1;
var numero1= [6,5,4,3,2,1,0]
var numero2 = [10,60,110,160,210,260,310]
for (let i = 0; i < numero2.length; i++) {
    if (pf2== numero2[i] ) {
        let indice = numero2.indexOf(pf2);
        console.log(indice);
        pf2=numero1[indice];
        console.log(pf2);
        
    }
    
    
}