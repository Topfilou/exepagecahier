


function somme(){
    let a;
    
    a = Number(document.getElementById("entree1").value);
    let som = 0;
    for (let i = 0; i <= n; i++) {
        som += i;
        
    }
    

    {
         document.getElementById("reponse").innerHTML = b + " " + "nombre pair";
    }
   
  }
  document.getElementById("valider").addEventListener("click", somme);
  
  






function puissance(){
    let x;
    let y;
    let z;
    
    x = Number(document.getElementById("entree2").value);
    y = Number(document.getElementById("entree3").value);
        z = Math.pow(x, y);
    
    {
         document.getElementById("reponse1").innerHTML = "Le résultat de" + " " + x + " " + "puissance" + " " + y + " " + "est" + " " + z;
    }
   
  }
  document.getElementById("valider1").addEventListener("click", puissance);
  
  

var e = 0;
function comptclic(){
    document.getElementById("entree4").value = ++e;

}

function dixvingt(){
    let c;
        
    c = Number(document.getElementById("entree4").value);
        if (c < 10)
    {
        document.getElementById("reponse2").innerHTML = "trop petit!";
    }

        if (c > 20)
    {
        document.getElementById("reponse2").innerHTML = "trop grand!";
    }

        if (c >= 10 && c <= 20)
    {    
    document.getElementById("reponse2").innerHTML = "le résultat correspond!> Vous avez effectué" + " " + e + " " + "essais!";
    }

}

  document.getElementById("valider2").addEventListener("click", dixvingt);
  







//bouton rafraichir//
function reset() {
    window.location.href = "exepetits.html"
}
document.getElementById("rafraichir").addEventListener("click", reset);

