// slider in the bottom
$(document).on('ready', function() {
  
      var block1 = document.getElementsByTagName('button');
      var block = document.getElementsByClassName('owl-stage-outer');

      var blockHeight = block.offsetHeight;
      function checkHeight () {
          block1.style.height = blockHeight + "px";
       }
      function go () {
        checkHeight ();
      }
      window.addEventListener('resize', go);
      go();
});