function toggleHidden() {
  console.log($(this));
  $(this).parent().find(".area_h3").slideToggle();
}

$(function() {
  $(".area_h2_title").on("click",toggleHidden);
});
