


var loyer= document.getElementById("loyer").value;
var credit= document.getElementById("credit").value;
var charges= document.getElementById("charges").value;
var tel= document.getElementById("tel").value;
var assH= document.getElementById("assH").value;
var assV= document.getElementById("assV").value;
var mutuelle= document.getElementById("mutuelle").value;
var garde= document.getElementById("garde").value;
var impotsR= document.getElementById("impotsR").value;
var impotsL= document.getElementById("impotsL").value;




function comptes (intitule, valeur){
    this.intitule= intitule;
    this.valeur= valeur;
}



var depense= [];

depense.push(new comptes("Loyer", loyer));
depense.push(new comptes("CreditS", credit));
depense.push(new comptes("Eau, Electricité, gaz", charges));
depense.push(new comptes("Téléphone, Internet", tel));
depense.push(new comptes("Assurance Habitation", assH));
depense.push(new comptes("Assurance Véhicule", assV));
depense.push(new comptes("Mutuelle Santé", mutuelle));
depense.push(new comptes("Frais de garde", garde));
depense.push(new comptes("Impots sur le revenu", impotsR));
depense.push(new comptes("Impots Locaux", impotsL));
console.log(depense);

document.getElementById("ok").addEventListener("click", function () {

    for (var i=0; i<depense.length; i++) {

        document.getElementById("affDepenses").innerHTML += depense[i].intitule + "<br>";
        document.getElementById("valeurs").innerHTML+= depense[i].valeur;

}

});


