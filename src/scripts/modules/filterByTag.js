export default () => {
  const searchInput = document.getElementById("search-input");

  [...document.getElementsByClassName("tag-badge")].forEach((badge) => {
    badge.addEventListener("click", (ev) => {
      searchInput.value = badge.innerText;
      searchInput.dispatchEvent(new Event("input"));
    });
  });
};
