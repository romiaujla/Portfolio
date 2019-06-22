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

function menuSlideEffectOnScroll(e){
    if(scroll > 60)
    {
        $('.menu-items-list').slideUp(200);
    }
}

// This function will handle all the scroll effects
// 1 - Menu drops down when the user scrolls back up 
// 2 - Smooth scroll to the target when user clicks a link
function handleScrollEffects(){

    // Scroll Event Handler
    $(window).on('scroll', function(e){

        menuSlideEffectOnScroll(e);

    });
}


//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClick(){

    // Displays the links to the menu items
    $('.menu-button').on("click",function(event){
        console.log("menu button clicked");
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
    })
}

//This function operates as the callback for all 
//the functions required for the page
function handlePageFunctions(){
    handleMenuButtonClick();
    handleScrollEffects();
    handleSmoothScrollingOnClickingLinks();
}

$(handlePageFunctions);