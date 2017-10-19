// Expand or View on Github UI
$('.code-view').each(function() {
  // Hide the next code block
  $(this).next('pre').addClass('hide')

  // Generate the view on Github UI for each code-view element
  var filename = $(this).data('filename')
  var ghLink = $(this).data('github-link')
  $(this).html('<div class="file-icon">' +
    '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 55 75" style="enable-background:new 0 0 55 75;" xml:space="preserve"><polygon style="fill:#1CACEF;" points="18.5,0 0,18.5 0,75 55,75 55,0 "/><polygon style="fill:#2479BD;" points="15.9,45.3 45.5,75 55,75 55,48.3 38.8,32.1 "/><polygon style="fill:#FFFFFF;" points="15.9,32.1 27.3,25.4 38.8,32.1 38.8,45.3 27.3,52 15.9,45.3 "/><polygon style="fill:#2479BD;" points="18.5,18.5 0,18.5 18.5,0 "/></svg></div>' +
    '<div class="file-info"><code>' + filename + '</code>' +
    '<div class="btn code-view-btn">' +
    '<span class="btn-icon"><svg version="1.1" id="view-snippet" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path style="fill:none;stroke:#1D6096;stroke-width:1.4391;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;" d="M4.1,12.5c-1.9-0.9-3.4-2.7-3.4-2.7C3,7.2,6.3,5.5,10,5.5s7,1.6,9.2,4.2c0,0-1.4,1.8-3.4,2.7"/><path style="fill:none;stroke:#1D6096;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;" d="M14.8,6.9 c0,2.6-2.1,4.8-4.8,4.8S5.2,9.5,5.2,6.9"/><circle style="fill:#1D6096;" cx="10" cy="7.4" r="1.9"/></svg></span>' +
    '<span class="btn-text">View in Place</span></div>' +
    '<a href="' + ghLink + '" target="_blank" class="btn code-gh-btn">' +
    '<span class="btn-icon"><svg version="1.1" id="nb-github-icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" style="enable-background:new 0 0 20 20;" xml:space="preserve"><path style="fill-rule:evenodd;clip-rule:evenodd;fill:#1D6096;" d="M9.999,2.198c-4.417,0-7.999,3.582-7.999,8 c0,3.534,2.292,6.533,5.471,7.591c0.4,0.073,0.546-0.174,0.546-0.386c0-0.19-0.007-0.693-0.011-1.361 c-2.225,0.483-2.695-1.072-2.695-1.072c-0.364-0.924-0.888-1.17-0.888-1.17c-0.726-0.496,0.055-0.486,0.055-0.486 c0.803,0.057,1.225,0.824,1.225,0.824c0.714,1.223,1.872,0.87,2.328,0.665c0.073-0.517,0.279-0.87,0.508-1.069 c-1.776-0.202-3.644-0.888-3.644-3.954c0-0.873,0.312-1.587,0.823-2.147C5.637,7.43,5.362,6.617,5.798,5.515 c0,0,0.672-0.215,2.2,0.82C8.636,6.158,9.32,6.069,10,6.066c0.679,0.003,1.364,0.092,2.003,0.269c1.527-1.035,2.198-0.82,2.198-0.82 c0.436,1.101,0.162,1.915,0.08,2.117c0.513,0.559,0.822,1.273,0.822,2.147c0,3.073-1.87,3.75-3.653,3.948 c0.287,0.247,0.543,0.735,0.543,1.481c0,1.069-0.01,1.932-0.01,2.195c0,0.214,0.144,0.463,0.55,0.385 C15.71,16.728,18,13.731,18,10.198C18,5.779,14.418,2.198,9.999,2.198z"/></svg></span>' +
    '<span class="btn-text">View on Github</span></div>' +
    '</div>'
  )
})

// Code Copy UI
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
  $(this).closest('.code-copy, .code-view').next('pre').toggleClass('hide')
})
