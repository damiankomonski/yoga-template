import * as bootstrap from "bootstrap";
import AOS from "aos";
import "lazysizes";

AOS.init();

// Add Background Image Support to Lazysizes
document.addEventListener('lazybeforeunveil', function(e){
    var bg = e.target.getAttribute('data-bg');
    if(bg){
        e.target.style.backgroundImage = 'url(' + bg + ')';
    }
});