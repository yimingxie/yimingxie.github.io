

$(document).ready(function(){
    change_fontsize();

    //加载公用部分，写程序的时候记得删除！！
    $("header").load("header.html");


    $("footer").load("footer.html");
    $(".sidebar").load("sidebar.html");

});
$(window).resize(function(){
    change_fontsize();
});
/*更改字体大小，除24*/
function change_fontsize() {
    var width = $('body').width();
    //console.log(width);
    var font_size = width/640*20;
    //console.log(font_size);
    $('html').css('font-size',font_size+'px');
}




