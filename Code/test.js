const TabPersosInfos = [
    { prenom: "Gon", nom: "Freecss", image: "../Personnages/gon.webp", genre: "Masculin", age: 12, affiliation: ["Association Hunter"], occupation: "Hunter", typeNen: "Renforcement", premierArc: "Examen Hunter" },
    { prenom: "Kirua", nom: "Zoldik", image: "../Personnages/kirua.webp", genre: "Masculin", age: 14, affiliation: ["Association Hunter", "Famille Zoldik"], occupation: "Hunter", typeNen: "Transformation", premierArc: "Examen Hunter" },
    { prenom: "Kurapika", nom: "", image: "../Personnages/kurapika.webp", genre: "Masculin", age: 18, affiliation: ["Association Hunter"], occupation: "Hunter", typeNen: "Matérialisation", premierArc: "Examen Hunter" },
    { prenom: "Leolio", nom: "Paradinaito", image: "../Personnages/leolio.webp", genre: "Masculin", age: 20, affiliation: ["Association Hunter"], occupation: ["Hunter", "Étudiant"], typeNen: "Émission", premierArc: "Examen Hunter" },
    { prenom: "Hisoka", nom: "Morow", image: "../Personnages/hisoka.webp", genre: "Masculin", age: 28, affiliation: ["Association Hunter"], occupation: "Hunter", typeNen: "Transformation", premierArc: "Examen Hunter" },
    { prenom: "Irumi", nom: "Zoldik", image: "../Personnages/irumi.jpg", genre: "Masculin", age: 24, affiliation: ["Famille Zoldik"], occupation: "Assassin", typeNen: "Manipulation", premierArc: "Examen Hunter" },
    { prenom: "Isaac", nom: "Netero", image: "../Personnages/netero.jpg", genre: "Masculin", age: 120, affiliation: ["Association Hunter"], occupation: "Président de l'Association Hunter", typeNen: "Renforcement", premierArc: "Examen Hunter" },
];

const persoADeviner = TabPersosInfos[Math.floor(Math.random() * TabPersosInfos.length)];
let persoPropose = null;

function afficherComparaison(persoPropose, persoADeviner) {
    const comparaison = document.getElementById("comparaison");

    // Noms personnalisés des catégories pour l'affichage final
    const nomCategories = {
        genre: "Genre",
        age: "Âge",
        affiliation: "Affiliation",
        occupation: "Occupation",
        typeNen: "Type de Nen",
        premierArc: "Premier Arc"
    };

    // Début du tableau
    let tableauHTML = `
        <table class="tableau">
            <thead>
                <tr>
                    <th>Image</th>
                    ${Object.keys(persoADeviner)
                        .filter(categorie => categorie !== "prenom" && categorie !== "nom" && categorie !== "image")
                        .map(categorie => `<th>${nomCategories[categorie] || categorie}</th>`)
                        .join('')}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <!-- Colonne pour l'image du persoPropose -->
                    <td style="text-align: center;">
                        <img src="${persoPropose.image}" alt="${persoPropose.prenom}" style="width: 100px; height: auto;">
                    </td>
                    ${Object.keys(persoADeviner)
                        .filter(categorie => categorie !== "prenom" && categorie !== "nom" && categorie !== "image")
                        .map(categorie => {
                            const estIdentique = JSON.stringify(persoPropose[categorie]) === JSON.stringify(persoADeviner[categorie]);
                            const couleur = estIdentique ? "green" : "red";
                            return ` 
                                <td style="background-color: ${couleur}; text-align: center;">
                                    ${Array.isArray(persoPropose[categorie]) 
                                        ? persoPropose[categorie].join(", ") 
                                        : persoPropose[categorie]}
                                </td>`;
                        })
                        .join('')}
                </tr>
            </tbody>
        </table>
    `;

    // Insérer le tableau en début de la section de comparaison
    comparaison.innerHTML = tableauHTML + comparaison.innerHTML;
}


// Recherche le personnage entré dans la barre de recherche
document.getElementById("search-button").addEventListener("click", () => {
    const searchBar = document.getElementById("search-bar");
    const recherche = searchBar.value.trim().toLowerCase();

    // Trouve un personnage avec le prénom ou le nom correspondant
    persoPropose = TabPersosInfos.find(
        perso => perso.prenom.toLowerCase() === recherche || perso.nom.toLowerCase() === recherche
    );

    const resultDiv = document.getElementById("result");

    if (persoPropose) {
        resultDiv.innerHTML = `<p>Personnage choisi : ${persoPropose.prenom} ${persoPropose.nom}</p>`;
        afficherComparaison(persoPropose, persoADeviner);
    } else {
        resultDiv.innerHTML = "<p>Personnage introuvable.</p>";
    }
});
