document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var links = document.querySelectorAll('.case-filter-main a');
    links.forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
});