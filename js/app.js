$(document).foundation()
$(function () {
  var showClass = 'show';

  $('input').on('checkval', function () {
    var label = $(this).prev('label');
    if(this.value !== '') {
      label.addClass(showClass);
    } else {
      label.removeClass(showClass);
    }
  }).on('keyup', function () {
    $(this).trigger('checkval');
  });
});



$('.sim-thumb').on('click', function() {
  $('#main-product-image').attr('src', $(this).data('image'));
})

