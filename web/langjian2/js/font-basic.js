/**
 * Created by Administrator on 15-5-15.
 * author@liuhuawei
 */

$(document).ready(function(){
    change_fontsize();
});
$(window).resize(function(){
    change_fontsize();
});
/*更改字体大小*/
function change_fontsize() {
    var width = $('body').width();
    var font_size = width/640*20;
    $('html').css('font-size',font_size+'px');
}

