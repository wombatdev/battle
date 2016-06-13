

$(document).on("ready", function() {

$(".create button").on("click", function() {
    console.log("Start button clicked");
    $(".create p").animate({
        opacity: 0
    })
    $(".create button").animate({
        opacity: 0
    })
    setTimeout( function(){
        $(".create").html(" \
            <form method='get' action='index.html'> \
                <fieldset> \
                    <label for='battle_name'>Name Your Battle:</label> \
                    <input type='text' id='first_name' name='first_name' placeholder='' /> \
                </fieldset> \
                <fieldset> \
                    <label for='war_cry'>Describe your battle:</label> \
                    <textarea name='war_cry' placeholder='Let me hear your war cry!'></textarea> \
                </fieldset> \
                <fieldset> \
                    Public or Private: \
                    <input type='radio' name='war_secure' id='private' value='private' /> \
                    <label for='private'>Private</label> \
                    <input type='radio' checked='true' name='war_secure' id='public' value='public' /> \
                    <label for='public'>Public</label> \
                </fieldset> \
        ");
    }, 750);
})

})
