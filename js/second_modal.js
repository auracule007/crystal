
// second item 
var Formm1 = document.getElementById("Form1");
var Formm2 = document.getElementById("Form2");
var Formm3 = document.getElementById("Form3");

var Nextt1 = document.getElementById("next1");
var Nextt2 = document.getElementById("next2");
var Backk1 = document.getElementById("back1");
var Backk2 = document.getElementById("back2");

var progress_sec = document.getElementById("progress2");

Nextt1.onclick = function(){
    Formm1.style.left = "-500px";
    Formm2.style.left = "5px";
    progress_sec.style.width = "200px";
}

Backk1.onclick = function(){
    Formm1.style.left = "-20px";
    Formm2.style.left = "500px";
    progress_sec.style.width = "120px";
}

Nextt2.onclick = function(){
    Formm2.style.left = "-500px";
    Formm3.style.left = "1px";
    progress_sec.style.width = "260px"; 
}

Backk2.onclick = function(){
    Formm2.style.left = "-15px";
    Formm3.style.left = "500px";
    progress_sec.style.width = "240px";
}


document.addEventListener("DOMContentLoaded", function() {
    const minusBtn = document.querySelector(".minus2");
    const plusBtn = document.querySelector(".plus2");
    const quantElement = document.querySelector(".item-quantity2");
  
    // Initialize item quantity
    let quantity = 1;
  
    // Function to update and display the item quantity
    function updateQuantity() {
        quantElement.textContent = quantity;
    }
  
    // Event listener for the minus button
    minusBtn.addEventListener("click", function() {
        if (quantity > 1) {
            quantity -= 1;
            updateQuantity();
        }
    });
  
    // Event listener for the plus button
    plusBtn.addEventListener("click", function() {
        quantity += 1;
        updateQuantity();
    });
  });