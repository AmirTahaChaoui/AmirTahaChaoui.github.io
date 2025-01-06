const TabPersosRecherche = [
    { prenom: "Gon", nom: "Freecss", image: "../Personnages/gon.webp" },
    { prenom: "Kirua", nom: "Zoldik", image: "../Personnages/kirua.webp" },
    { prenom: "Kurapika", nom: "", image: "../Personnages/kurapika.jpg" },
    { prenom: "Leolio", nom: "Paradinaito", image: "../Personnages/leolio.webp" },
];

const TabPersosInfos = [
    { prenom: "Gon", nom: "Freecss", image: "../Personnages/gon.webp", genre: "Masculin", age: 12, affiliation: ["Société Hunter"], occupation: ["Hunter"], typeNen: "Renforcement", premierArc: "Examen Hunter" },
    { prenom: "Kirua", nom: "Zoldik", image: "../Personnages/kirua.webp", genre: "Masculin", age: 14, affiliation: ["Société Hunter", "Zoldik"], occupation: "Hunter", typeNen: "Transformation", premierArc: "Examen Hunter" },
    { prenom: "Kurapika", nom: "", image: "../Personnages/kurapika.jpg", genre: "Masculin", age: 18, affiliation: ["Kuruta", "Société Hunter"], occupation: "Hunter", typeNen: "Matérialisation", premierArc: "Examen Hunter" },
    { prenom: "Leolio", nom: "Paradinaito", image: "../Personnages/leolio.webp", genre: "Masculin", age: 20, affiliation: ["Société Hunter"], occupation: ["Hunter", "Étudiant"], typeNen: "Émission", premierArc: "Examen Hunter" },
];

const inputSearch = document.querySelector('.input-recherche');
const suggestionSearch = document.querySelector(".suggestion-recherche");


function afficherSuggestion(PersonnagesFiltre) {
    suggestionSearch.innerHTML = ""; // Réinitialiser les suggestions

    PersonnagesFiltre.forEach((perso) => {
        // Création de l'élément
        const item = document.createElement("button");
        item.classList.add("suggestion-item");
        item.innerHTML = `<img class="suggestion-item-img" src="${perso.image}" alt="${perso.prenom}">
                        <span>${perso.prenom}</span>
                        <span>&nbsp;${perso.nom}</span>`;

        // Ajout dans le DOM
        suggestionSearch.appendChild(item);

        // Suppression dans suggestion-recherche + TabPersosInfos
        item.addEventListener("click", () => {
            // Trouver le personnage correspondant
            persoPropose = TabPersosInfos.find(
                p => p.prenom === perso.prenom && p.nom === perso.nom
            );
        
            if (persoPropose) {
                // Afficher la comparaison et les attributs
                afficherComparaison(persoPropose, persoADeviner);
                afficherAttributs(persoADeviner);
        
                // Supprimer le personnage de TabPersosRecherche
                const index = TabPersosRecherche.findIndex(
                    p => p.prenom === perso.prenom && p.nom === perso.nom
                );
                if (index !== -1) {
                    TabPersosRecherche.splice(index, 1);
                }
        
                // Supprimer l'élément cliqué du DOM
                item.remove();
                console.log(`Personnage ${perso.prenom} ${perso.nom} retiré des suggestions.`);
            }
        })
        
    });
}

inputSearch.addEventListener("input", () => {
    const requete = inputSearch.value.toLowerCase().trim();

    if (requete === "") {
        afficherSuggestion([]); // Cacher les suggestions si recherche vide
        return;
    }

    const filtre = TabPersosRecherche.filter((perso) => {
        const prenom = perso.prenom.toLowerCase();
        const nom = perso.nom.toLowerCase();
        return prenom.startsWith(requete) || nom.startsWith(requete);
    });

    suggestionSearch.style.display = filtre.length > 0 ? "block" : "none";
    afficherSuggestion(filtre);
});

let persoADeviner = TabPersosInfos[Math.floor(Math.random() * TabPersosInfos.length)];
let persoPropose = null;

function afficherAttributs(persoADeviner) {
    // Logique pour afficher les attributs si nécessaire
}

function afficherComparaison(persoPropose, persoADeviner) {
    const comparaison = document.querySelector(".tableau-contenu");

    let tableauHTML = `
        <table>
            <tbody>
                <tr class="contenu-ligne">
                    <th class="ligne-img">
                        <img class="comparaison-img" src="${persoPropose.image}">
                    </th>
    `;

    tableauHTML += Object.keys(persoADeviner)
        .filter(attribut => attribut !== "prenom" && attribut !== "nom" && attribut !== "image")
        .map(attribut => {
            const valPropose = persoPropose[attribut];
            const valADeviner = persoADeviner[attribut];
            let couleur;

            if (JSON.stringify(valPropose) === JSON.stringify(valADeviner)) {
                couleur = "#2b9d57"; // Identique
            } else if (
                (Array.isArray(valADeviner) && valADeviner.includes(valPropose)) ||
                (Array.isArray(valPropose) && valPropose.includes(valADeviner))
            ) {
                couleur = "#dbb350"; // Partiellement similaire
            } else {
                couleur = "#87173a"; // Différent
            }

            return `
                <th class="contenu-ligne-cell" style="background-color: ${couleur};">
                    ${Array.isArray(valPropose) ? valPropose.join(", ") : valPropose || "Aucun"}
                </th>
            `;
        })
        .join('');

    tableauHTML += `</tr></tbody></table>`;
    comparaison.innerHTML = tableauHTML + comparaison.innerHTML;
}
