export default (fn) => {
  const searchInput = document.getElementById("search-input");
  const allResults = [...document.getElementsByClassName("result-item")];
  const allResultSections = [
    ...document.getElementsByClassName("result-section"),
  ];

  searchInput.addEventListener("input", (ev) => {
    [
      ...document.querySelectorAll(
        ".result-section.d-none, .result-item.d-none"
      ),
    ].forEach((result) => result.classList.remove("d-none"));

    if (searchInput.value && searchInput.value.trim().length > 0) {
      window.history.replaceState(
        null,
        null,
        `?search=${encodeURIComponent(searchInput.value)}`
      );

      allResults.forEach((result) => {
        if (!result.innerText.includes(searchInput.value)) {
          result.classList.add("d-none");
        }
      });

      allResultSections.forEach((section) => {
        if (
          [...section.querySelectorAll(".result-item")].filter((result) => {
            return (
              !result.classList.contains("d-none") &&
              !result.innerText.includes("No events.")
            );
          }).length === 0
        ) {
          section.classList.add("d-none");
        }
      });
    } else {
      window.history.replaceState(null, null, "/");
    }
  });

  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");

  if (searchParam) {
    searchInput.value = searchParam;
    searchInput.dispatchEvent(new Event("input"));
  }
};
