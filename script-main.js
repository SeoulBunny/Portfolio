document.addEventListener("DOMContentLoaded", function() {
    const portfolioImage = document.querySelector('.portfolio');
    const aboutImage = document.querySelector('.about');
    

    function addHoverEffect(element) {
        element.addEventListener('mouseover', function() {
            element.style.boxShadow = '0 0 100px rgba(250, 250, 15, 50)';
        });

        element.addEventListener('mouseout', function() {
            element.style.boxShadow = 'none';
        });
    }

    addHoverEffect(portfolioImage);
    addHoverEffect(aboutImage);
});

document.addEventListener("DOMContentLoaded", function() {
    const portraitImage = document.querySelector('.portrait');
    
    

    function addHoverEffect(element) {
        element.addEventListener('mouseover', function() {
            element.style.boxShadow = '0 0 250px rgba(155, 55, 20, 90)';
        });

        element.addEventListener('mouseout', function() {
            element.style.boxShadow = 'none';
        });
    }

    addHoverEffect(portraitImage);
});