// Write your Pizza Builder JavaScript in this file.
window.onload = function(){

    // notes from class - fine with how we did it but this does it to every buttton before hand
    // $('.btn').click(function(){
    //     $(this).toggleClass('active');
    // })
    $('.btn-sauce, .btn-crust').removeClass('active');
    $('.sauce').removeClass('sauce-white');
    $('.crust').removeClass('crust-gluten-free');
    $('.price li:nth-child(4)').hide()
    $('.price li:nth-child(5)').hide()
    
    let theActualPrice = 13;
    updatePrice();

    function addOrSubtractFromPrice(cost, buttonPushed){
        if(buttonPushed.hasClass('active'))
    }

    function updatePrice(){
        $('strong').text('$' + theActualPrice)
    }

    




    ----
    $('.pep').toggle()
    $('.mushroom').toggle()
    $('.green-pepper').toggle()
    // $('.sauce').toggle()
    // $('.crust').toggle()

    $('.btn-pepperonni').click(()=>{
            $('.btn-pepperonni').toggleClass('active');
            $('.pep').toggle()
            if($(this).hasClass('active')) {
                theActualPrice += 1;
                console.log(theActualPrice)
            } else {
                theActualPrie -= 1;
                console.log(theActualPrice)
            }

            if ($('.btn-pepperonni').hasClass('active')){
                $('.btn-pepperonni':visible)
            }; else {
                $('.btn-pepperonni:hidden')
            }

    })

    $('.btn-mushrooms').click(()=>{
        $('.btn-mushrooms').toggleClass('active');
        $('.mushroom').toggle();
    })

    $('.btn-green-peppers').click(()=>{
        $('.btn-green-peppers').toggleClass('active');
        $('.green-pepper').toggle();
    })
    
    $('.btn-sauce').click(()=> {
        $('.btn-sauce').toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
    })

    $('.btn-crust').click(()=> {
        $('.btn-crust').toggleClass('active');
        $('.crust').toggleClass('crust-gluten-free');
    })

























}