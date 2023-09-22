$(function () {
  $("#pick-date-ui").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true,
  });
  $("#pick-date-ui-2").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true,
  });

  $(".awards").slick({
    infinite: true,
    slidesToScroll: 3,
    arrows: true,
    slidesToShow: 7,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $("#filter-cards").slick({
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToScroll: 3,
    variableWidth: true,
  });

  const toggleMenu = () => {
    $("#menu").toggleClass(["right-0", "-right-[320px]"]);
    $("#overlay").toggleClass(["hidden", "block"]);
  };

  $("#overlay").click(toggleMenu);
  $("#hamburger").click(toggleMenu);
  $("#cross-menu").click(toggleMenu);
});
