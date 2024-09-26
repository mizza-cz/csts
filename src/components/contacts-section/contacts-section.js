$(".contactItem__bottom").each(function () {
  if ($.trim($(this).find("p").text()) === "") {
    $(this).hide(); // Hide the .contactItem__bottom element
  }
});
