

//This function handles the functionality for the 
//menu button on the mobile page
function handleMenuButtonClick(){
    $('.menu-button').on("click",function(event){
        console.log("menu button clicked");
        $('.menu-button').toggleClass("change");
        if($('.menu-items-list').css("display") === "none")
        {   
            console.log("If Reached");
            $('.menu-items-list').fadeIn(200);
        }else{
            console.log("Else Reached");
            $('.menu-items-list').fadeOut(200);
        }
    });
}

//This function operates as the callback for all 
//the functions required for the page
function handlePageFunctions(){
    handleMenuButtonClick();
}

$(handlePageFunctions);