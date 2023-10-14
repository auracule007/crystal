const container = document.querySelector(".kevin");

window.addEventListener("load", () => {
  container.style.display = "none";
});

const profileButton = document.getElementById("profile");
const ordersButton = document.getElementById("orders");
const reviewsButton = document.getElementById("reviews");
const profileContainer = document.getElementById("profile-container");
const ordersContainer = document.getElementById("orders-container");
const reviewsContainer = document.getElementById("reviews-container");

// Initially, show the profile container and hide the orders container
profileContainer.style.display = "block";
ordersContainer.style.display = "none";
reviewsContainer.style.display = "none";

profileButton.addEventListener("click", () => {
  // Show the profile container and hide the orders container
  profileContainer.style.display = "block";
  ordersContainer.style.display = "none";
  reviewsContainer.style.display = "none";
});

ordersButton.addEventListener("click", () => {
  // Show the orders container and hide the profile container
  ordersContainer.style.display = "block";
  profileContainer.style.display = "none";
  reviewsContainer.style.display = "none";
});

reviewsButton.addEventListener("click", () => {
  // Show the reviews container and hide the orders container
  reviewsContainer.style.display = "block";
  ordersContainer.style.display = "none";
  profileContainer.style.display = "none";
});
