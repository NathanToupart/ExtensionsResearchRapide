// Initialize button with user's preferred color
let recherche = document.getElementById("submit");


// When the button is clicked, inject setPageBackgroundColor into current page
recherche.addEventListener("click", async () => {
    var value = document.getElementById("recherche").value;
    window.open("https://www.google.com/search?q="+ value)
  });
  