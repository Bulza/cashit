$(document).ready(function () {
  // read more read less
  // if (window.matchMedia("(max-width: 700px)").matches) {
    const dots = document.getElementById("dots"); 
    const moreText = document.getElementById("more"); 
    const btnText = document.getElementById("myBtn"); 
    moreText.style.display = "none"; 
    $("#myBtn").click(function () {
      
      if (dots.style.display === "none") {
       
        dots.style.display = "inline"; 
        btnText.innerHTML = "Read more"; 
        moreText.style.display = "none"; 
      } else {
        
        dots.style.display = "none"; 
        btnText.innerHTML = "read less"; 
        moreText.style.display = "inline"; 
      }
    });

    const dots2 = document.getElementById("dots-2");
    const moreText2 = document.getElementById("more-2");
    const btnText2 = document.getElementById("myBtn-2");
    moreText2.style.display = "none";
    $("#myBtn-2").click(function () {
      if (dots2.style.display === "none") {
        dots2.style.display = "inline";
        btnText2.innerHTML = "Read more";
        moreText2.style.display = "none";
      } else {
        dots2.style.display = "none";
        btnText2.innerHTML = "read less";
        moreText2.style.display = "inline";
      }
    });

    const dots3 = document.getElementById("dots-3");
    const moreText3 = document.getElementById("more-3");
    const btnText3 = document.getElementById("myBtn-3");
    moreText3.style.display = "none";
    $("#myBtn-3").click(function () {
      if (dots3.style.display === "none") {
        dots3.style.display = "inline";
        btnText3.innerHTML = "Read more";
        moreText3.style.display = "none";
      } else {
        dots3.style.display = "none";
        btnText3.innerHTML = "read less";
        moreText3.style.display = "inline";
      }
    });
// }
  // read more read less

  $(".menubar").click(function (e) {
    e.preventDefault();
    $(this).find(".menubar-menu").toggleClass("active");
    $("header").toggleClass("active");
    $("nav").slideToggle();
  });

  if (window.matchMedia("(max-width: 700px)").matches) {
    $(".brands-slider").slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
    });
  }
});
$("#testimonials .row").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: true,

  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$("#usecases .container").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
