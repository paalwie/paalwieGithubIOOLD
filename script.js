const projekteListe = document.querySelector('.projekte ul');

// GitHub-Benutzername und Repository-Liste ersetzen
const benutzername = "paalwie";
const repositories = [
  { name: "alteIOSeite", beschreibung: "Meine alte iOS-App-Entwicklung" },
  { name: "datenbankonline", beschreibung: "Online-Datenbank-Anwendung" },
  { name: "Netzplan", beschreibung: "Tool zur Erstellung von Netzwerkplänen" },
  // ... weitere Repos mit Beschreibungen hinzufügen
];

// Funktion zum Erstellen eines Projektlisteneintrags
function createProjektEintrag(repoName) {
    const projektEintrag = document.createElement('li');
    projektEintrag.classList.add('projekt');

    const projektBeschreibungElement = document.createElement('p');
     projektBeschreibungElement.classList.add('projekt-beschreibung');
     // Hier die Beschreibung einfügen (z.B. mit `projektBeschreibungElement.textContent = "Beschreibungstext";`)

    
    const projektNameElement = document.createElement('span');
    projektNameElement.classList.add('projekt-name');
    projektNameElement.textContent = repoName;

    const projektLinkElement = document.createElement('a');
    projektLinkElement.classList.add('projekt-link');
    projektLinkElement.href = `https://github.com/${benutzername}/${repoName}`;
    projektLinkElement.textContent = `Link zu ${repoName}`;

    projektEintrag.appendChild(projektNameElement);
    projektEintrag.appendChild(projektLinkElement);
    projektEintrag.appendChild(projektBeschreibungElement); // Beschreibungselement hinzufügen

    return projektEintrag;
}

// Projekte zur Liste hinzufügen
repositories.forEach(repoName => {
    const projektEintrag = createProjektEintrag(repoName);
    projekteListe.appendChild(projektEintrag);
});
