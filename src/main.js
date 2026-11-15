const dict = {
  uk: {
    "nav.cases": "Кейси",
    "nav.about": "Про мене",
    "nav.contacts": "Контакти",
    "nav.write": "Написати",
    "hero.lead":
      "Роблю сайти для локального бізнесу, після яких відвідувач записується, дзвонить або приходить.",
    "hero.contact": "Зв'язатися зі мною",
    "hero.cases": "Дивись кейси",
  },
  en: {
    "nav.cases": "Cases",
    "nav.about": "About me",
    "nav.contacts": "Contacts",
    "nav.write": "Write me",
    "hero.lead":
      "I design websites for local businesses that make visitors book, call or walk in.",
    "hero.contact": "Contact me",
    "hero.cases": "View cases",
  },
};

function applyLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = dict[lang][el.dataset.i18n];
    if (value) el.textContent = value;
  });
  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  try {
    localStorage.setItem("lang", lang);
  } catch {}
}

document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

// Hide the photo block's <img> if the file is not added yet.
const photo = document.querySelector(".hero__photo img");
if (photo) {
  const drop = () => photo.remove();
  photo.addEventListener("error", drop);
  if (photo.complete && photo.naturalWidth === 0) drop();
}

let saved = null;
try {
  saved = localStorage.getItem("lang");
} catch {}
if (saved && dict[saved] && saved !== "uk") applyLang(saved);
