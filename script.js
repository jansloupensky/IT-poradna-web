





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




document.addEventListener('DOMContentLoaded', function () {
  const scrollToDivBtn = document.getElementById('scroll-to-top');

  scrollToDivBtn.addEventListener('click', function () {
    const targetDiv = document.getElementById('main'); // Zde určte ID cílového divu
    targetDiv.scrollIntoView({ behavior: 'smooth' });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  var scrollButton = document.getElementById("scroll-to-top");

  window.onscroll = function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
          scrollButton.style.display = "block";
      } else {
          scrollButton.style.display = "none";
      }
  };
});