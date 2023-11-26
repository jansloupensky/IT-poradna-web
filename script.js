document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.querySelector(".scroll-to-top");

  window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
          scrollButton.style.display = "block";
      } else {
          scrollButton.style.display = "none";
      }
  });
});

function scrollToTop() {
  var currentPosition = document.documentElement.scrollTop || document.body.scrollTop;

  if (currentPosition > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, currentPosition - currentPosition / 20);
  }
}





document.addEventListener("DOMContentLoaded", function() {
  var dropdownBtn = document.getElementById("dropdownBtn");
  var dropdownContent = document.getElementById("dropdownContent");

  dropdownBtn.addEventListener("click", function() {
      if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
      } else {
          dropdownContent.style.display = "block";
      }
      scrollTop.scrollIntoView({ behavior: 'smooth' });
  });
});




document.addEventListener('DOMContentLoaded', function () {
  const scrollToDivBtn = document.getElementById('scroll-button');

  scrollToDivBtn.addEventListener('click', function () {
    const targetDiv = document.getElementById('email-form'); // Zde určte ID cílového divu
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });
});