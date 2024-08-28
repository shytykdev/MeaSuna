const mouseFollowerSettings = {
  speed: 0.4,
  skewing: 1,
  skewingText: 3,
};

let cursor;

const addButtonEventListeners = (elements, text) => {
  elements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      cursor.setText(text);
    });

    element.addEventListener("mouseleave", () => {
      cursor.removeText();
    });
  });
};

const initializeMouseFollower = () => {
  cursor = new MouseFollower(mouseFollowerSettings);

  const buttons = document.querySelectorAll(".button");
  const swipers = document.querySelectorAll(".swiper");
  const swiperLocations = document.querySelectorAll(".swiper.is--story");
  const submit = document.querySelectorAll(".button.is--contact");
  const menuOpen = document.querySelectorAll(".button.is--menu");
  const menuClose = document.querySelectorAll(".menu-bg");
  const popupOpen = document.querySelectorAll(".background.is--popup");
  const foodbookOpen = document.querySelectorAll(".foodbook-body");

  let language = "en"; // Default language is English

  // Check if the window URL contains "/nl"
  if (window.location.href.includes("/nl")) {
    language = "nl"; // Change language to Dutch
  }

  addButtonEventListeners(buttons, language === "nl" ? "Bekijk" : "View");
  addButtonEventListeners(swipers, language === "nl" ? "Vegen" : "Swipe");
  addButtonEventListeners(
    swiperLocations,
    language === "nl" ? "Bekijk meer" : "View More"
  );
  addButtonEventListeners(
    submit,
    language === "nl" ? "Laten we praten" : "Let's talk"
  );
  addButtonEventListeners(menuOpen, language === "nl" ? "Openen" : "Open");
  addButtonEventListeners(menuClose, language === "nl" ? "Sluiten" : "Close");
  addButtonEventListeners(popupOpen, language === "nl" ? "Sluiten" : "Close");
  addButtonEventListeners(foodbookOpen, language === "nl" ? "Openen" : "Open");
};

// Check viewport width before initializing
if (window.innerWidth > 990) {
  initializeMouseFollower();
}
