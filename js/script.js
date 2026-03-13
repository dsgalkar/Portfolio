// Contact form submission (demo only)
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
    // You can integrate EmailJS or backend API here
});
