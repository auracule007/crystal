document.addEventListener("DOMContentLoaded", function () {
  // WhatsApp sharing function
  function shareOnWhatsApp() {
    const productLink = "https://example.com/your-product-link"; // Replace with your actual product link
    const encodedLink = encodeURIComponent(productLink);
    const whatsappShareLink = `https://api.whatsapp.com/send?text=${encodedLink}`;

    window.open(whatsappShareLink);
  }

  // Twitter sharing function
  function shareOnTwitter() {
    const productLink = "https://example.com/your-product-link"; // Replace with your actual product link
    const encodedLink = encodeURIComponent(productLink);
    const twitterShareLink = `https://twitter.com/intent/tweet?url=${encodedLink}`;

    window.open(twitterShareLink);
  }

  const whatsappButton = document.getElementById("whatsapp-button");
  const twitterButton = document.getElementById("twitter-button");

  whatsappButton.addEventListener("click", shareOnWhatsApp);
  twitterButton.addEventListener("click", shareOnTwitter);
});
