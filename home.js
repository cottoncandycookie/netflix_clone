const profileList = document.querySelector(".profile-picker__list");

if (profileList) {
  const profiles = document.querySelectorAll(".profile:not(.add-profile)");

  profiles.forEach((profile) => {
    profile.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });
}
