(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

const projects = [
    {
        name: "MOBILISAYUR",
        background: "The project aimed to create an online platform that connects artisan markets with customers, providing a convenient and efficient way for both parties to interact.",
        features: [
            "- Multi-role authentication and authorization", 
            "- User registration and login", 
            "- Product list page", 
            "- Add product",
            "- Cart system"],
        contributions: [
            "- Backend Deployment: Deployed the backend application to Heroku, configuring the deployment pipeline and ensuring seamless integration with the frontend.",
            "- Registration and login feature: Developed the registration and login functionality, ensuring secure user authentication and access control.",
            "- Cart system: Implemented the cart system, allowing customers to add, remove, and manage products in their shopping carts."],
        techLogos: [
            "img/HTML5.webp", 
            "img/CSS.jpeg", 
            "img/JavaScript.png", 
            "img/Nextjs.png",
            "img/Flask.jpeg",
            "img/MySQL.png",
            "img/GitHub.png", 
            "img/Heroku.png",
            "img/Vercel.png", 
            "img/MaterialUI.png", 
            "img/Tailwind.png"],
        liveDemo: "https://front-end-five-psi.vercel.app/",
        frontend: "https://github.com/LightKazuto/Front-end",
        backend: "https://github.com/bintangsenjapratama/fsse-group-j-gfp",
        image: "img/portfolio-web-1.png"
    },
    {
        name: "Automation Testing",
        background: "Description for project 2, including background, features, and contributions.",
        features: "",
        contributions: "",
        techLogos: ["img/logo-js.png", "img/logo-react.png"],
        image: "img/portfolio-web-2.png"
    }
];

function openPopup(index) {
    const project = projects[index];
    document.getElementById("popup").style.display = "block";
    document.getElementById("project-name").textContent = project.name;
    document.getElementById("background").textContent = project.background;
    
    // // Update features
    // const projectFeatures = document.getElementById("features");
    // project.features.forEach(feature => {
    //     const text = document.createElement('p');
    //     text.textContent = feature;
    //     projectFeatures.appendChild(text);
    // });
    // projectFeatures.innerHTML = `${feature}<br>`;
    
    // // Update contributions
    // const myContributions = document.getElementById("contributions");
    // project.contributions.forEach(contribution => {
    //     const text = document.createElement('p');
    //     text.textContent = contribution;
    //     myContributions.appendChild(text);
    // });
    // myContributions.innerHTML = `${contribution}<br>`;

    // Update technology logos
    const techLogosContainer = document.getElementById("tech-logos");
    techLogosContainer.innerHTML = '';
    project.techLogos.forEach(logo => {
        const img = document.createElement('img');
        img.src = logo;
        img.alt = logo.split('/').pop().split('.')[0];
        techLogosContainer.appendChild(img);
    });

    // Update links
    const projectLinks = document.getElementById("project-links");
    projectLinks.innerHTML = `<a href="${project.liveDemo}">Livedemo</a> | <a href="${project.frontend}">Frontend</a> | <a href="${project.backend}">Backend</a>`;
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function updateMainImage(imageSrc) {
    document.getElementById("main-image").src = imageSrc;
}

// Close the popup when clicking outside of the content
window.onclick = function(event) {
    const popup = document.getElementById("popup");
    if (event.target === popup) {
        closePopup();
    }
}