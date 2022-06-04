/**
 * Created by Nealyang on 17/2/24.
 */
 $(document).ready(function () {
    $('.navbar label').click(function(event) {
        if ($("input[type='checkbox']").is(':checked')){
            $('.navbar').css({'z-index': '0'});
        }else{
            $('.navbar').css({'z-index': '16'});
        }
        console.log('navbar label 被点击');
    }
    )

    var title = '首页';
    if(window.location.pathname.indexOf('blog') >0 ){
        title = '数据管理';
        $('.menu span:contains("数据管理")').css({
            'bottom':'5px',
            'box-shadow' :'4px 9px 10px #020202'
        });
    }else if(window.location.pathname.indexOf('users') >0 ){
        $('.menu span:contains("用户管理")').css({
            'bottom':'5px',
            'box-shadow' :'4px 9px 10px #020202'
        });
        title = '用户管理'
    }else if(window.location.pathname.indexOf('图谱显示') >0 ){
        $('.menu span:contains("图谱显示")').css({
            'bottom':'5px',
            'box-shadow' :'4px 9px 10px #020202'
        });
        title = '图谱显示'
    }
    else if(window.location.pathname.indexOf('人员流动') >0 ){
        $('.menu span:contains("人员流动")').css({
            'bottom':'5px',
            'box-shadow' :'4px 9px 10px #020202'
        });
        title = '人员流动'
    }
    else{
        $('.menu span:contains("首页")').css({
            'bottom':'5px',
            'box-shadow' :'4px 9px 10px #020202'
        });
    }
    $('.menu span').mouseenter(function () {
            $(this).css({
                'bottom':'5px',
                'box-shadow' :'4px 9px 10px #020202'
            });
    });
    $('.menu span').mouseleave(function () {
        if($.trim($(this).text())!= title){
            $(this).css({
                'bottom':'0',
                'box-shadow' :'2px 2px 2px #6d5d5d'
            });
        }

    });

});