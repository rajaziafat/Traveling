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

  $(".tabs .tab").click(function () {
    const cls = $(this).attr("data-toggle");
    const tabGroup = $(this).attr("data-tab-group");

    $(`.tab-content[data-tab-group='${tabGroup}']`)
      .addClass("hidden")
      .removeClass("block");

    $(`.tab[data-tab-group='${tabGroup}']`)
      .removeClass("border-b-clr-2 text-clr-2")
      .addClass("border-b-transparent");

    $(this)
      .addClass("border-b-clr-2 text-clr-2 ")
      .removeClass("border-b-transparent");

    $("." + cls)
      .addClass("block")
      .removeClass("hidden");
  });

  $(".accordion .accordion-head").click(function () {
    $(this).siblings(".accordion-body").slideToggle();
    $(this)
      .parent()
      .find("[src='./assets/vectors/car/arrow.svg']")
      .toggleClass("rotate-180");
  });

  $(".yes-protect").click(function () {
    $("#yes-protect").prop("checked", true);
    $("#full-coverage").prop("checked", true);
    $("#no-protect").prop("checked", false);

    $("th.no-protect").removeClass("bg-grey-5");
    $("td.no-protect").removeClass("bg-grey-1");
    $("th.yes-protect").addClass("bg-[#e2ffd0]");
    $("td.yes-protect").addClass("bg-grey-1");
  });

  $("#full-coverage").change(function () {
    console.log(this);
    if ($(this).is(":checked")) {
      $("#yes-protect").prop("checked", true);
      $("#full-coverage").prop("checked", true);
      $("#no-protect").prop("checked", false);

      $("th.no-protect").removeClass("bg-grey-5");
      $("td.no-protect").removeClass("bg-grey-1");
      $("th.yes-protect").addClass("bg-[#e2ffd0]");
      $("td.yes-protect").addClass("bg-grey-1");
    } else {
      $("#no-protect").prop("checked", true);
      $("#full-coverage").prop("checked", false);
      $("#yes-protect").prop("checked", false);

      $("th.no-protect").addClass("bg-grey-5");
      $("td.no-protect").addClass("bg-grey-1");
      $("th.yes-protect").removeClass("bg-[#e2ffd0]");
      $("td.yes-protect").removeClass("bg-grey-1");
    }
  });

  $(".no-protect").click(function () {
    $("#no-protect").prop("checked", true);
    $("#full-coverage").prop("checked", false);
    $("#yes-protect").prop("checked", false);

    $("th.no-protect").addClass("bg-grey-5");
    $("td.no-protect").addClass("bg-grey-1");
    $("th.yes-protect").removeClass("bg-[#e2ffd0]");
    $("td.yes-protect").removeClass("bg-grey-1");
  });
});
