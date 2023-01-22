$('document').ready(function () {
   
    $('.slider').ripples({
        dropRadius: 5,
        perturbance: 0.01,
        
    });



    var typed = new Typed('.auto-text', {
        strings: ['I Love <span class="primary">Coding.</span> ',
        'And Love  <span class="secondary"> To Share!!.</span> '],
        typeSpeed : 100,
        backSpeed: 100,
        loop :true
    });





});



