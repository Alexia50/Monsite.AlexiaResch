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

})
const title = document.querySelector(".containerNom h1")
const letters = [...document.querySelectorAll('h1 span')]
title.addEventListener("mouseenter", handleLetters);
title.addEventListener("mouseleave", handleLetters);
let isAnimatingIn = false;
let calledOut = false;
let animOpened = false;
function handleLetters(){
  if(animOpened){
    animOut();
    animOpened = false;
    return;
  }
  if(isAnimatingIn){
    calledOut = true;
    return;
  }
  isAnimatingIn = true;
  const animPromise = new Promise((resolve) => {
    animIn()
    setTimeout(() => {
      resolve()
    }, 500)
  })
  animPromise.then(() => {
    isAnimatingIn = false;
    if(calledOut) {
      animOut()
      calledOut = false;
    } else if (!calledOut){
      animOpened = true;
    }

  })
}

function animIn(){
  anime({
    targets: "h1 span",
    translateX: function(){
      return anime.random(-250,250)
    },
    translateY: function(){
      return anime.random(-250,250)
    },
    translateZ: function(){
      return anime.random(-2000,750)
    },
    rotate: function(){
      return anime.random(-250,250)
    },
    easing: "easeOutCirc",
    duration: 500
  })
}
function animOut(){
  anime({
    targets: "h1 span",
    translateX: 0,
    translateY: 0,
    translateZ: 0,
    rotate: 0,
    easing: "easeInQuad",
    duration: 500
  })
}

