/* ============================================================
   PORTFOLIO — JAVASCRIPT
   Tre saker sköts här:
   1. Scroll-animationer (fade-in/slide-up) via IntersectionObserver
   2. Header som får bakgrund/skugga när man scrollar
   3. Mobilmeny (hamburgare) — öppna/stäng
   ============================================================ */

/* ------------------------------------------------------------
   1. SCROLL-ANIMATIONER
   Alla element med klassen .reveal börjar dolda (se style.css).
   IntersectionObserver är webbläsarens inbyggda, effektiva sätt
   att få veta när ett element scrollas in i vy — mycket bättre
   än att lyssna på scroll-eventet manuellt.
   ------------------------------------------------------------ */
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // isIntersecting = elementet är (delvis) synligt i viewporten
      if (entry.isIntersecting) {
        entry.target.classList.add("visible"); // triggar CSS-övergången
        observer.unobserve(entry.target);      // animera bara en gång
      }
    });
  },
  {
    threshold: 0.15,            // minst 15 % av elementet måste synas
    rootMargin: "0px 0px -40px" // trigga strax innan elementet når skärmkanten
  }
);

revealElements.forEach((el) => revealObserver.observe(el));

/* ------------------------------------------------------------
   2. HEADER VID SCROLL
   Lägger på klassen .scrolled när sidan scrollats mer än 40 px.
   CSS:en ger då headern bakgrund, blur och skugga.
   ------------------------------------------------------------ */
const header = document.getElementById("site-header");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 40);
}

// { passive: true } talar om för webbläsaren att vi inte stoppar
// scrollen => bättre scrollprestanda
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader(); // kör direkt, ifall sidan laddas mitt på (t.ex. via #projekt-länk)

/* ------------------------------------------------------------
   3. MOBILMENY
   Hamburgarknappen togglar klassen .open på både knappen
   (för kryss-animationen) och menyn (för att fälla ned den).
   ------------------------------------------------------------ */
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  navToggle.classList.toggle("open", isOpen);
  // Uppdatera för skärmläsare: är menyn öppen eller stängd?
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Stäng menyn när man klickar på en länk (annars ligger den
// kvar och täcker innehållet man scrollat till)
navMenu.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});
