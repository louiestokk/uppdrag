const nextBtn = document.querySelector(".next-btn ");
const prevBtn = document.querySelector(".prev-btn ");
const submitBtn = document.querySelector(".submit-btn");
const bohagsContainer = document.querySelectorAll(".bohags-container");
const bohagsInput = document.querySelector(".typ-av-boende-input");
const clickIconer = document.querySelectorAll(".click-iconer");
const hurKontakt = document.querySelector(".kontakta-mig");
const kotaktValContainer = document.querySelectorAll(".kontaktaMig");
const stegTitel = document.querySelector(".steg-titel");

let count = 0;

nextBtn.addEventListener("click", (e) => {
  count++;
  titelChanger(count);
  progressBar(count);
  if (count === 3) {
    nextBtn.classList.add("hidden");
    submitBtn.classList.remove("hidden");
  }
  if (count >= 1) {
    prevBtn.classList.remove("hidden");
  }
  console.log(count);
  bohagsContainer.forEach((el) => {
    let contId = parseInt(el.dataset.id);

    if (count === contId) el.classList.remove("hidden");
    else el.classList.add("hidden");
  });
});

prevBtn.addEventListener("click", (e) => {
  count--;
  titelChanger(count);
  progressBar(count);

  if (count < 3) {
    submitBtn.classList.add("hidden");
    nextBtn.classList.remove("hidden");
  }
  bohagsContainer.forEach((el) => {
    let contId = parseInt(el.dataset.id);

    if (count === contId) el.classList.remove("hidden");
    else el.classList.add("hidden");
    if (count === 0) prevBtn.classList.add("hidden");
  });
});

submitBtn.addEventListener("click", () => {
  progressBar(4);
  alert("Tack för din förfrågan! Vi svarar inom kort");
  setTimeout(() => (location.href = "./index.html"), 1000);
});

clickIconer.forEach((el) => {
  el.addEventListener("click", (e) => {
    bohagsInput.value = e.currentTarget.children[0].textContent;
    e.currentTarget.children[1].style.color = "#f87171";
  });
  el.addEventListener("dblclick", (e) => {
    bohagsInput.value = "";
    e.currentTarget.children[1].style.color = "#222";
  });
});

kotaktValContainer.forEach((el) => {
  el.addEventListener("click", (e) => {
    let icon = e.currentTarget.children[0];
    icon.style.color = "#f87171";
    hurKontakt.value = el.textContent;
  });
  el.addEventListener("dblclick", (e) => {
    let icon = e.currentTarget.children[0];
    icon.style.color = "#222";
    hurKontakt.value = "";
  });
});

const titelChanger = (count) => {
  if (count === 0) stegTitel.textContent = "Välj Bohagstyp";
  if (count === 1) stegTitel.textContent = "Beskriv Lite";
  if (count === 2) stegTitel.textContent = "När Vill Du Ha Hjälp";
  if (count === 3) stegTitel.textContent = "Hur Kontaktar Vi Dig";
};

const progressBar = (count) => {
  const progressIcon = document.querySelectorAll(".nummer-icon");
  progressIcon.forEach((iconEl) => {
    let iconTarget = parseInt(iconEl.dataset.num);
    if (count == iconTarget) {
      iconEl.innerHTML = `<i class="fas fa-check-circle"></i>`;
      iconEl.parentElement.previousElementSibling.style.color = "#f87171";
    }
  });
};
