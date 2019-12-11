$(function(){
    $(function(){
        var count = 1;

        setInterval(function(){
            console.log(count);
            if(count > 2) count = 0;
            $('.slider img').removeClass('show');
            $('.slider img')
                .eq(count)
                .addClass('show');

            /*$('.indicator > a').removeClass('show');
            $('.indicator > a')
                .eq(count)
                .addClass('show');*/
            count++;
        },5000);
    });
});