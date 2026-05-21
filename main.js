const moreBtn = document.querySelector(".navbar__more");
const moreDropdown = document.querySelector(".more__dropdown");

moreBtn.addEventListener("click", () => {
  moreBtn.classList.toggle("clicked");
  moreDropdown.classList.toggle("active");
});

const slider = document.querySelector(".row__items");

fetch("data/data.json")
  .then((re) => re.json())
  .then((data) => {
    data.movies.forEach((movie) => {
      const li = document.createElement("li");
      li.classList.add("row__item");

      const img = document.createElement("img");
      img.src = movie.image;
      img.classList.add("row__thumbnail");

      li.appendChild(img);
      slider.appendChild(li);
    });

    document.querySelector(".row__btn.right").onclick = () => {
      slider.scrollLeft += 300;
    };
    document.querySelector(".row__btn.left").onclick = () => {
      slider.scrollLeft -= 300;
    };
  });

const toggleBtn = document.querySelector(".navbar__toggleBtn");
const dropdown = document.querySelector(".dropdown");

toggleBtn.addEventListener("click", (e) => {
  e.preventDefault();
  dropdown.classList.toggle("open");
});

const heroVideo = document.querySelector(".hero__video");

setTimeout(() => {
  heroVideo.classList.add("show");
}, 2000);
