//Récupérer le conteneur de citation
const citationContainer = document.getElementById("citation-container");

// Modifier les citations && auteurs dynamiquement
const textCitation = document.getElementById("citation");
const auteurCitation = document.getElementById("auteur");

// Récupérer les boutons
const newCitationBouton = document.getElementById("new-citation");
const twitterBouton = document.getElementById("twitter");

//Récupérer effet chargement
const loading = document.getElementById("loader");

const afficherEffectChargement = () => {
  loading.hidden = false;
  citationContainer.hidden = true;
};

const arreterEffetChargement = () => {
  if (!loading.hidden) {
    citationContainer.hidden = false;
    loading.hidden = true;
  }
};

const newCitation = () => {
  // Il n'y a aucune citation à l'execution de la fonction
  afficherEffectChargement();

  //Choisir une citation aléatoirement dans le tableau de citation
  const citation = citations[Math.floor(Math.random() * citations.length)];

  // Test si l'auteur existe
  if (!citation.author) {
    auteurCitation.textContent = "Inconnue";
  } else {
    auteurCitation.textContent = citation.author;
  }

  //Test si la citation est trop longue pour appliquer un style
  if (citation.text.length > 80) {
    textCitation.classList.add("longue-citation");
  } else {
    textCitation.classList.remove("longue-citation");
  }
  textCitation.textContent = citation.text;

  // Après que la citation soit chargée on arrête l'effet
  arreterEffetChargement();
};

//Twitter la citation
const twitteCitation = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${textCitation.textContent} - ${auteurCitation.textContent}`;
  window.open(twitterUrl, "_blank");
};

//Even listener
newCitationBouton.addEventListener("click", newCitation);
twitterBouton.addEventListener("click", twitteCitation);

//Au chargement de la page
newCitation();
