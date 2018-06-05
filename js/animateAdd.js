(function (win){
    //滚动监控添加动画

    function setAnimation(distance){
        var d = distance || 50;

        var anim = $(".anim");//触发遍历所用的类

        setTimeout(function(){
            $(window).scroll(function() {
                roll();
            })
            $(window).resize(function() {
                roll();
            })
            roll();
        },6);

        function roll() {
            var oHeight = $(window).height();
            var ScrVal = $(window).scrollTop();
            anim.each(function(i) {
                if (ScrVal + oHeight > anim.eq(i).offset().top - d ){
                    anim.eq(i).addClass("anim-show");
                }
            })
        }
    }

    win.setAnimation = setAnimation;


})(window)



// 调用方法
//new setAnimation(50);
