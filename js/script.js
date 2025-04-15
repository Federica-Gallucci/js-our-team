// Dato un array di oggetti rappresentante un team di un’azienda,
//  creare una pagina dedicata in cui mostrare una card per ciascun componente.
// (trovate l’array del team all’interno della cartella in allegato)
// ? Bonus
// - Rendere l’esercizio responsive, mandando a capo le card
// - Aggiungere un form di agginta membri che permetta di visualizzare il nuovo membro sulla pagina.

const cardSection = document.getElementById("card-section");

const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

// todo - Funzione che genera una card
function generateCard(name, role, email, img) {
  return `
       <div class="card bg-dark my-3">
        <div class="card-image py-4">
          <img src="${img}" alt="female1" />
        </div>
        <div class="card-text">
          <h4 class="text-light">${name}</h4>
          <p class="text-light">${role}</p>
          <p class="text-info">${email}</p>
        </div>
        </div>

  `;
}

// todo - HTML

let newCardsHtml = ``;
for (let i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  const { name, role, email, img } = currentMember;
  newCardsHtml += generateCard(name, role, email, img);
}
cardSection.innerHTML = newCardsHtml;
