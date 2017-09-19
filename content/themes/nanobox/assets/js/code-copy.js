$('.code-copy').each(function() {
  // Hide copiable code blocks
  $(this).next('pre').addClass('hide')

  // Generate the copy UI for each code-copy element
  var filename = $(this).data('filename')
  $(this).html('<div class="file-icon">' +
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 75" style="enable-background:new 0 0 55 75;" xml:space="preserve"><polygon style="fill:#1CACEF;" points="18.5,0 0,18.5 0,75 55,75 55,0 "/><polygon style="fill:#2479BD;" points="15.9,45.3 45.5,75 55,75 55,48.3 38.8,32.1 "/><polygon style="fill:#FFFFFF;" points="15.9,32.1 27.3,25.4 38.8,32.1 38.8,45.3 27.3,52 15.9,45.3 "/><polygon style="fill:#2479BD;" points="18.5,18.5 0,18.5 18.5,0 "/></svg></div>' +
    '<div class="file-info"><code>' + filename + '</code>' +
    '<div class="btn code-view-btn">' +
    '<span class="btn-icon"><svg version="1.1" id="view-snippet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="M4.1,12.5c-1.9-0.9-3.4-2.7-3.4-2.7C3,7.2,6.3,5.5,10,5.5s7,1.6,9.2,4.2c0,0-1.4,1.8-3.4,2.7"/><path style="fill:none;stroke:#1D6096;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;" d="M14.8,6.9 c0,2.6-2.1,4.8-4.8,4.8S5.2,9.5,5.2,6.9"/><circle style="fill:#1D6096;" cx="10" cy="7.4" r="1.9"/></svg></span>' +
    '<span class="btn-text">View in Place</span></div>' +
    '<div class="btn code-copy-btn">' +
    '<span class="btn-icon"><svg version="1.1" id="copy-snippet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve">	<line style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="15.3" y1="4.1" x2="15.3" y2="9.2"/><polyline style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="15.3,13.9 15.3,17.3 3.3,17.3 3.3,4.1"/><line style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" x1="18.7" y1="11.4" x2="7.3" y2="11.4"/><polyline style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="10.1,14.4 7.1,11.4 10.1,8.5"/><polygon style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" points="11.1,3.2 10.5,1.6 7.9,1.6 7.4,3.2 5.3,3.2 6.4,6.1 12.3,6.1 13.3,3.2"/></svg></span>' +
    '<span class="btn-text">Copy to Clipboard</span></div>' +
    '</div>'
  )
})

// Copy Contents on Click
new Clipboard('.code-copy-btn', {
    target: function(trigger) {
        return trigger.closest('.code-copy').nextElementSibling;
    }
});

// UI feedback and life-cycle
$(".code-copy-btn").click(function(){
  $(this).children('span.btn-text').fadeOut(100, function() {
    $(this).text("✓ Copied!")
  }).fadeIn(100).delay(2000).fadeOut(300, function() {
    $(this).text("Copy to Clipboard")
  }).fadeIn(300);
})

// View contents in place
$('.code-view-btn').click(function(){
  $(this).closest('.code-copy').next('pre').toggleClass('hide')
})
