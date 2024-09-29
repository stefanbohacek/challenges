export default () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];
  const currentMonth = today.toLocaleString("default", { month: "long" });

  const html = /* html */ `
    <a href="#month-${currentMonth}" class="btn btn-outline-secondary">${currentMonth}</a>
    <a href="#day-${currentDay}" class="btn btn-outline-secondary">${currentDay}</a>
  `;

  const quicklinks = document.getElementById("quicklinks");
  quicklinks.innerHTML += html;
};
