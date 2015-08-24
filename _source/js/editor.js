updateSelection = function () {
  var bold = document.queryCommandState("Bold");
  var italic = document.queryCommandState("Italic");
  var underline = document.queryCommandState("Underline");

  if (bold === true) {
    $('#bold').addClass('active');
  } else {
    $('#bold').removeClass('active');
  }

  if (italic === true) {
    $('#italic').addClass('active');
  } else {
    $('#italic').removeClass('active');
  }

  if (underline === true) {
    $('#underline').addClass('active');
  } else {
    $('#underline').removeClass('active');
  }
}