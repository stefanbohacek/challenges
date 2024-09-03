import onReady from "./modules/onReady.js";
// import highlightCode from "./modules/highlightCode.js";
import backToTop from "./modules/backToTop.js";
import handleSearch from "./modules/handleSearch.js";
import filterByTag from "./modules/filterByTag.js";
// import matomo from "./modules/matomo.js";
// import konami from "./modules/konami.js";
// import addParagraphIconToHeaders from "./modules/addParagraphIconToHeaders.js";

onReady(() => {
  // highlightCode();
  backToTop();
  handleSearch();
  filterByTag();
  // addParagraphIconToHeaders();
  // matomo();
  // konami();
});
