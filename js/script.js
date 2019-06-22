// Handles making the scroll a smoth one by adding event listeners to all the 
// anchor tags.
function handleSmoothScrollingOnClickingLinks(){    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}


// This function will handle all the scroll effects
// 1 - Menu drops down when the user scrolls back up 
// 2 - Smooth scroll to the target when user clicks a link
function handleScrollEffects(){

    let lastScrollTop = 0;
    // Scroll Event Handler
    $(window).on('scroll', function(e){

        
    });
}


//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClick(){

    // Displays the links to the menu items
    $('.menu-button').on("click",function(event){
        $('.menu-button').toggleClass("change");
        if($('.menu-items-list-mobile').css("display") === "none")
        {  
            $('.menu-items-list-mobile').slideDown(200);
        }else{
            $('.menu-items-list-mobile').slideUp(200);
        }
    });

    // Hides the menu once a link is clicked 
    $('.menu-item a').on('click', function(e){
        $('.menu-button').toggleClass("change");
        $('.menu-items-list-mobile').slideUp(200);
    });

    // Hide Mobile Menu Items when the page size increases
    $(window).on('resize', function(e){
        // w stores the viewport width
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if(w > 989){
            $('.menu-button').removeClass("change");
            $('.menu-items-list-mobile').hide();
        }
    });
}

// This function operates as the callback for all 
// the functions required for the page
function handlePageFunctions(){
    handleMenuButtonClick();
    handleScrollEffects();
    handleSmoothScrollingOnClickingLinks();
}

$(handlePageFunctions);