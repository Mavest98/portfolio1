// Add any JavaScript functionality here, if needed
// JavaScript for portfolio interactivity

$(document).ready(function() {
    // Add animation effect when hovering over portfolio items
    $('.portfolio-item').hover(function() {
        $(this).addClass('hovered');
    }, function() {
        $(this).removeClass('hovered');
    });
});
