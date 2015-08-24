SimpleEditor = {
  updateButtons: function () {
    var bold = document.queryCommandState("Bold");
    var italic = document.queryCommandState("Italic");
    var underline = document.queryCommandState("Underline");

    if (bold === true) {
      $('[data-action=bold]').addClass('active');
    } else {
      $('[data-action=bold]').removeClass('active');
    }

    if (italic === true) {
      $('[data-action=italic]').addClass('active');
    } else {
      $('[data-action=italic]').removeClass('active');
    }

    if (underline === true) {
      $('[data-action=underline]').addClass('active');
    } else {
      $('[data-action=underline]').removeClass('active');
    }
  },
  registerTriggers: function () {

    $('.btn-action').on('click', function (e) {
      var action = $(this).attr('data-action');
      document.execCommand(action);
      SimpleEditor.updateButtons();
    });

    $('#editor').on('click', function (e) {
      SimpleEditor.updateButtons();
    });

  }
};