
//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClick(){
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
}

//This function operates as the callback for all 
//the functions required for the page
function handlePageFunctions(){
    handleMenuButtonClick();
}

$(handlePageFunctions);