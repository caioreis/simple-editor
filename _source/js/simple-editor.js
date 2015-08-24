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
  init: function () {
    this.registerTriggers();
    this.registerDropZone();
    this.registerShortcuts();
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

  },
  registerDropZone: function () {
    var dropZone = document.getElementById('editor');
    dropZone.addEventListener('dragover', Utils.handleDrag, false);
    dropZone.addEventListener('drop', Utils.handleDrop, false);
  },
  registerShortcuts: function () {

    Shortcuts.add('CTRL+B', function () {
      document.execCommand('bold');
      SimpleEditor.updateButtons();
    });

    Shortcuts.add('META+B', function () {
      document.execCommand('bold');
      SimpleEditor.updateButtons();
    });

    Shortcuts.add('META+I', function () {
      document.execCommand('italic');
      SimpleEditor.updateButtons();
    });

    Shortcuts.add('META+U', function () {
      document.execCommand('underline');
      SimpleEditor.updateButtons();
    });

    Shortcuts.add('CTRL+U', function () {
      document.execCommand('underline');
      SimpleEditor.updateButtons();
    });
    
    Shortcuts.add('CTRL+I', function () {
      document.execCommand('italic');
      SimpleEditor.updateButtons();
    });
  }
};

Utils = {
  handleDrag: function(e) {
    e.stopPropagation();
    e.preventDefault();
  },
  handleDrop: function(e) {
    e.stopPropagation();
    e.preventDefault();
    x = e.clientX;
    y = e.clientY;
    var file = e.dataTransfer.files[0];

    var URLObj = window.URL || window.webkitURL;
    var source = URLObj.createObjectURL(file);
    
    if (file.type.match('image.*')) {

      var img = document.createElement("img");

      img.src = source;

      if (document.caretPositionFromPoint) {
        var pos = document.caretPositionFromPoint(x, y);
        range = document.createRange();
        range.setStart(pos.offsetNode, pos.offset);
        range.collapse();
        range.insertNode(img);
      } else if (document.caretRangeFromPoint) {
        range = document.caretRangeFromPoint(x, y);
        range.insertNode(img);
      }
    }
  }
}