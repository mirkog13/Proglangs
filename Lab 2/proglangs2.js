function meny(value){ // definerer funksjonen som skal brukes
        document.getElementById("resultat1").innerHTML = value; // henter resultatet fra select og endrer <div>
document.getElementById("resultat2").innerHTML = "Du hat selektert programmeringsspr&aringk :";
    }

function AlertIt() {
var answer = confirm ("Beklager, men siden er under konstruksjon!")
if (answer)
window.location="proglangs2.html";
}