// Write your Pizza Builder JavaScript in this file.
window.onload = function(){



    $('.pep').toggle()
    $('.mushroom').toggle()
    $('.green-pepper').toggle()
    // $('.sauce').toggle()
    // $('.crust').toggle()

    $('.btn-pepperonni').click(()=>{
            $('.btn-pepperonni').toggleClass('active');
            $('.pep').toggle()
            if ($('.btn-pepperonni').hasClass('active')){
                $('.btn-pepperonni':visible)
            }; else {
                $('.btn-pepperonni:hidden')
            }

    })

    $('.btn-mushrooms').click(()=>{
        $('.btn-mushrooms').toggleClass('active');
        $('.mushroom').toggle()
    })

    $('.btn-green-peppers').click(()=>{
        $('.btn-green-peppers').toggleClass('active');
        $('.green-pepper').toggle()
    })
    
    $('.btn-sauce').click(()=> {
        $('.btn-sauce').toggleClass('active');
        $('.sauce').toggleClass('sauce-white');
    })

    $('.btn-crust').click(()=> {
        $('.btn-crust').toggleClass('active')
        $('.crust').toggleClass('crust-gluten-free')
    })

























}