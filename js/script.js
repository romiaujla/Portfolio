function handleFormSubmission(){
    // this function handles the submit button to have the email being sent
    $('form').on('submit', function(e){
        e.preventDefault();
        $('form input').val('');
        $('form textarea').val('');
        $('.sent-message')
            .fadeIn(500)
            .delay(1000)
            .fadeOut(500);
    });
}

// adds the cuurent-page class to the index number passed in the 
function addCurrentClass(indexNum) {
    $('.mobile-menu li').removeClass('current-page');
    $('.mobile-menu li').eq(indexNum).closest('li').addClass('current-page');
    $('.desktop-menu li').removeClass('current-page');
    $('.desktop-menu li').eq(indexNum).closest('li').addClass('current-page');
}

// handles all the clicks on the menu buttons
function handleMenuItemClick() {
    // Hides the menu once a link is clicked 
    // Change style for the selected menu-item when it is clicked
    $('.menu-item a').on('click', function (e) {
        $('.menu-button').toggleClass("change");
        $('.mobile-menu').slideUp(200);

        // removes 'current-page' from any menu items that were current.
        $('.menu-item').removeClass('current-page');

        // gets the index of the list item clicked in the menu
        let index = $(this).parent('li').index();

        // Sets current page class on the item clicked in the menu and changes them for both the mobile version
        // and the desktop version.
        addCurrentClass(index);
        this.blur();
    });
}

// Handles the button click on the menu button by expaning and colapsing the menu
function handleTogglingMobileMenu() {
    $('.menu-button').on("click", function (event) {
        $('.menu-button').toggleClass("change");
        if ($('.mobile-menu').css("display") === "none") {
            $('.mobile-menu').css('display', 'block');
            $('.mobile-menu').slideDown(200);

        } else {
            $('.mobile-menu').slideUp(200);
        }
    });
}

//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClicks() {
    handleTogglingMobileMenu();
    handleMenuItemClick();
    handleFormSubmission();
}

// This function will handle all the scroll effects
// 1 - Menu drops down when the user scrolls back up 
// 2 - Smooth scroll to the target when user clicks a link
function handleScrollEffects() {

    // selects all links that have an href which begin with a '#'
    let allLinks = $("a[href^='#']");

    // add smooth scrolling to clicks on all the links
    allLinks.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top - 40
        }, 750);
    })

    // changes the active page selected in the menu on scrolling
    let activeLinks = $('.menu-item a')
    // Swithcing Active Links on Scrolling
    $(window).scroll(function (e) {
        let scrollbarLocation = $(this).scrollTop();
        activeLinks.each(function () {

            let sectionOffset = $(this.hash).offset().top - 125;
            if($(window).scrollTop() + $(window).height() == $(document).height()) {
                // gets the index for the last menu item so it can be 
                // set as current menu item when bottom of web page is reached
                let index = $(this).closest('li:last-child').index();
                addCurrentClass(index);
            }
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('current-page');
                $(this).parent().siblings().removeClass('current-page');
            }
        });
    });

}

// changes the class when the sizes are changed
function handleMenuStyleOnResizing() {
    // Hide Mobile Menu Items when the page size increases
    $(window).on('resize', function (e) {
        // w stores the viewport width
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (w > 989) {
            $('.menu-button').removeClass("change");

            // BELOW FUNCTIONALITY: 
            // remove class for mobile menu and add the class for desktop menu
            // .show is to make it visible which results in adding a display: block, 
            // because of which the .css (display, flex) had to be added to avoid that

            $('.menu-list-wrapper ul').removeClass('mobile-menu');
            $('.menu-list-wrapper ul').addClass('desktop-menu');
            $('.menu-list-wrapper ul').show();
            $('.menu-list-wrapper ul').css('display', 'flex');
            
        }else{
            $('.menu-list-wrapper ul').addClass('mobile-menu');
            $('.menu-list-wrapper ul').removeClass('desktop-menu');
            $('.mobile-menu').slideUp(0);
        }
    });
}

// add the class depending on the size of the page when it is loaded for responsive style
function handleMenuStyleOnLoad(){
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w > 989) {
        $('.menu-list-wrapper ul').removeClass('mobile-menu');
        $('.menu-list-wrapper ul').addClass('desktop-menu');
    }else{
        $('.menu-list-wrapper ul').addClass('mobile-menu');
        $('.menu-list-wrapper ul').removeClass('desktop-menu');
    }
}

// This function operates as the callback for all 
// the functions required for the page
function handlePageFunctions() {
    handleMenuStyleOnLoad();
    handleMenuStyleOnResizing();
    handleScrollEffects();
    handleMenuButtonClicks();
}

$(handlePageFunctions);