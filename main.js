var productButtons = document.querySelectorAll(".card .btn");

for (var i = 0; i < productButtons.length; i++) {
    productButtons[i].onclick = function () {
        alert("Product added to your wishlist!");
    };
}
var exploreBtn = document.getElementById("exploreBtn");

exploreBtn.onclick = function () {
    document.getElementById("products").scrollIntoView();
};

var shopBtn = document.getElementById("shopBtn");

shopBtn.onclick = function () {
    document.getElementById("products").scrollIntoView();
};