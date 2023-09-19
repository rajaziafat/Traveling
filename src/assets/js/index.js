$(function () {
  console.log($("#pick-date-ui"));
  $("#pick-date-ui").datepicker({
    numberOfMonths: 2,
    showButtonPanel: true,
  });

  $(".awards").slick({
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    arrows: true
  });
});
