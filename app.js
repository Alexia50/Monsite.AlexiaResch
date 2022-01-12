const onglets = document.querySelectorAll('.onglets');
const contenu = document.querySelectorAll('.contenu')
let index = 0;

onglets.forEach(onglet => {

    onglet.addEventListener('click', () => {

        if(onglet.classList.contains('active')){
            return;
        } else {
            onglet.classList.add('active');
        }

        index = onglet.getAttribute('data-anim');
        console.log(index);
        
        for(i = 0; i < onglets.length; i++) {

            if(onglets[i].getAttribute('data-anim') != index) {
                onglets[i].classList.remove('active');
            }

        }

        for(j = 0; j < contenu.length; j++){

            if(contenu[j].getAttribute('data-anim') == index) {
                contenu[j].classList.add('activeContenu');
            } else {
                contenu[j].classList.remove('activeContenu');
            }
            

        }


    })
document.getElementByID("Contact").addEventListener("Souscription", function(e){
        var erreur;
        var inputs = document.getElementByTagName("input");

        for (var i = 0; i < inputs.lengt; i++) {
                console.log(inputs[i]);
                if (!inputs[i].value) {
                    erreur = "Veuillez renseigner tous les champs";
                }
        }
        if (erreur) {
            e.preventDefault();
            document.getElementById("erreur").innerHTML = erreur;
            return false;
        } else {
            alert('Formulaire de contact envoyé !')
        }
})
})