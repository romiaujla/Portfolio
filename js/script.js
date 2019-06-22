// Handles making the scroll a smoth one by adding event listeners to all the 
// anchor tags.
function handleSmoothScrollingOnClickingLinks() {
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
function handleScrollEffects() {

    let lastScrollTop = 0;
    // Scroll Event Handler
    $(window).on('scroll', function (e) {

        let scrollValue = $(this).scrollTop();

        if(scrollValue > 700 && scrollValue < 1700){
            addCurrentClass(1);
        }else if(scrollValue > 1700)
        {
            addCurrentClass(2);
        }
    });
}



function handleMenuItemClick() {
    // Hides the menu once a link is clicked 
    // Change style for the selected menu-item when it is clicked
    $('.menu-item a').on('click', function (e) {
        $('.menu-button').toggleClass("change");
        $('.menu-items-list-mobile').slideUp(200);

        // removes 'current-page' from any menu items that were current.
        $('.menu-item').removeClass('current-page');

        // gets the index of the list item clicked in the menu
        let index = $(this).parent('li').index();

        // Sets current page class on the item clicked in the menu and changes them for both the mobile version
        // and the desktop version.
        $(this).closest('nav').find('.menu-items-list-mobile li').eq(index).closest('li').addClass('current-page');
        $(this).closest('nav').find('.menu-items-list li').eq(index).closest('li').addClass('current-page');
        this.blur();
    });
}

function handleTogglingMobileMenu() {
    $('.menu-button').on("click", function (event) {
        $('.menu-button').toggleClass("change");
        if ($('.menu-items-list-mobile').css("display") === "none") {
            $('.menu-items-list-mobile').slideDown(200);
        } else {
            $('.menu-items-list-mobile').slideUp(200);
        }
    });
}

function handleMenuHidingOnResizing(){
    // Hide Mobile Menu Items when the page size increases
    $(window).on('resize', function (e) {
        // w stores the viewport width
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w > 989) {
            $('.menu-button').removeClass("change");
            $('.menu-items-list-mobile').hide();
        }
    });
}

//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClicks() {

    // Displays the links to the menu items
    handleTogglingMobileMenu();
    handleMenuItemClick();
    handleMenuHidingOnResizing();

}

// This function operates as the callback for all 
// the functions required for the page
function handlePageFunctions() {
    handleMenuButtonClicks();
    handleScrollEffects();
    handleSmoothScrollingOnClickingLinks();
}

$(handlePageFunctions);