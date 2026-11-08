//alert("Barev Yurik Jan Dzya")
//let Ուտաչնիտ;
//Ուտաչնիտ = document.getElementById("myText").value;
//console.log(Ուտաչնիտ);}
// Загружаем пользователей

// Загружаем пользователей из API
// Загружаем пользователей
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    // Меняем имена и email
    users[0].name = "Colonel Hans Landa";
    users[0].email = "strudel.hunter@reich.lol";
    users[1].name = "Uchiha Itachi";
    users[1].email = "croweyes@uchiha.sus";
    users[2].name = "Tommy Vercetti";
    users[2].email = "vicecityboss@miami.party";
    users[3].name = "Valodik";
    users[3].email = "yurikjandzya@armenia.fun";
    users[4].name = "Heisenberg";
    users[4].email = "bluecrystal@breaking.bad";
    users[5].name = "Terminator";
    users[5].email = "hasta.la.vista@skynet.fail";
    users[6].name = "Bismarck";
    users[6].email = "iron.chancellor@history.meme";

    showUsers(users);
  })
  .catch(error => {
    document.getElementById("result").innerHTML =
      '<p class="text-danger">Не удалось загрузить пользователей 😕</p>';
    console.error(error);
  });

// Функция отображения
function showUsers(users) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const container = document.createElement("div");
  container.className = "row";

  const images = [
    "https://media.giphy.com/media/eQYE2toD7Pnpu/giphy.gif",
    "https://media.giphy.com/media/PireEGYkQrPiXNgxaX/giphy.gif",
    "https://media.giphy.com/media/If5ablLJculPQ4mcI3/giphy.gif",
    "https://media.giphy.com/media/iD0S5xqbLmKngU5vVO/giphy.gif",
    "https://media.giphy.com/media/rofsCdigOv1wk/giphy.gif",
    "https://media.giphy.com/media/C3DJ5zE2l2VUc/giphy.gif",
    "https://media.giphy.com/media/YEB5Z9ZiYOUTbNepsz/giphy.gif"
  ];

  const memes = [
    "«Strudel master race 🍰»",
    "«Crow eyes never lie 🌑»",
    "«Vice City disco king 🕺»",
    "«Yuriiik jan dzya :D 😂»",
    "«Say my name… 💎»",
    "«Hasta la vista, baby 🤖»",
    "«Iron Chancellor vibes ⚓»"
  ];

  users.forEach((user, index) => {
    const col = document.createElement("div");
    col.className = "col-md-6 mb-3";

    const card = document.createElement("div");
    card.className = "card shadow-sm d-flex flex-row align-items-center p-2";

    const img = document.createElement("img");
    img.src = images[index] || "https://via.placeholder.com/60";    img.alt = user.name;
    img.className = "rounded-circle me-3";
    img.width = 60;
    img.height = 60;

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-2";

    const cardTitle = document.createElement("h6");
    cardTitle.className = "card-title mb-1";
    cardTitle.textContent = user.name;

    const cardText = document.createElement("small");
    cardText.className = "text-muted d-block";
    cardText.textContent = user.email;

    const memeText = document.createElement("div");
    memeText.className = "text-primary fst-italic";
    memeText.textContent = memes[index] || "«No meme for this legend yet 😢»";
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(memeText);

    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);
    container.appendChild(col);
  });

  resultDiv.appendChild(container);
}

// Фильтрация с подсветкой
const textbox = document.getElementById("textbox");
textbox.addEventListener("input", filterUsers);

function filterUsers() {
  const searchText = textbox.value.toLowerCase().trim();
  const cards = document.querySelectorAll("#result .card");

  cards.forEach(card => {
    const col = card.closest(".col-md-6");
    const nameEl = card.querySelector(".card-title");
    const emailEl = card.querySelector(".text-muted");
    const memeEl = card.querySelector(".fst-italic");

    const name = nameEl?.textContent || "";
    const email = emailEl?.textContent || "";
    const meme = memeEl?.textContent || "";

    const combined = `${name} ${email} ${meme}`.toLowerCase();

    if (searchText.length > 0) {
      if (combined.includes(searchText)) {
        col.style.display = "block";
        highlightText(nameEl, searchText);
        highlightText(emailEl, searchText);
        highlightText(memeEl, searchText);
      } else {
        col.style.display = "none";
      }
    } else {
      col.style.display = "block";
      if (nameEl) nameEl.innerHTML = name;
      if (emailEl) emailEl.innerHTML = email;
      if (memeEl) memeEl.innerHTML = meme;
    }
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Подсветка текста
function highlightText(element, searchText) {
  if (!element) return;
  const text = element.textContent;
  if (!searchText) {
    element.innerHTML = text;
    return;
  }
  const regex = new RegExp(`(${escapeRegex(searchText)})`, "gi");
  element.innerHTML = text.replace(regex, `<mark>$1</mark>`);
} 
// Показываем приветственное окно при загрузке страницы
window.addEventListener("DOMContentLoaded", () => {
  const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"));
  welcomeModal.show();
});