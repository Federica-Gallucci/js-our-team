// Dato un array di oggetti rappresentante un team di un’azienda,
//  creare una pagina dedicata in cui mostrare una card per ciascun componente.

// ? Bonus
// - Rendere l’esercizio responsive, mandando a capo le card
// - Aggiungere un form di aggiunta membri che permetta di visualizzare il nuovo membro sulla pagina.

const cardContainer = document.getElementById("card-container");
const newMember = document.getElementById("new-member");
const newMemberImg = document.getElementById("new-member-img");
const newMemberName = document.getElementById("new-member-name");
const newMemberRole = document.getElementById("new-member-role");
const newMemberEmail = document.getElementById("new-member-email");
const createNewMember = document.getElementById("create-new-member");

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

         <div class="row">
        <div class="col-xs-12 col-md-6 col-lg-4">
          <div class="team-card bg-dark d-flex my-3">
            <div class="card-image">
              <img src="${img}" alt="female1" class="card-img-top " />
            </div>
            <div class="card-text px-2">
              <h4 class="text-light">${name}</h4>
              <p class="text-light">${role}</p>
              <p class="text-info">${email}</p>
            </div>
          </div>
        </div>

      </div>

  `;
}

//   <div class="team-card bg-dark  d-flex my-3">
// <div class="card-image ">
//  <img src="${img}" alt="female1" />
// </div>
// <div class="card-text px-2">
//   <h4 class="text-light">${name}</h4>
//   <p class="text-light">${role}</p>
//   <p class="text-info">${email}</p>
// </div>
// </div>

// todo - HTML

let newCardsHtml = ``;
for (let i = 0; i < teamMembers.length; i++) {
  const currentMember = teamMembers[i];
  const { name, role, email, img } = currentMember;
  newCardsHtml += generateCard(name, role, email, img);
}
cardContainer.innerHTML = newCardsHtml;

// todo - NEW MEMBER

newMember.addEventListener("submit", (e) => {
  e.preventDefault();

  const img = newMemberImg.value;
  const name = newMemberName.value;
  const role = newMemberRole.value;
  const email = newMemberEmail.value;
  const newMemberAdd = { img, name, role, email };
  teamMembers.push(newMemberAdd);
});
