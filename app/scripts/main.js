'use strict';

$(document).ready(function(){
    $('.installation .section').hide();
    var selectedTab = $(this).find('ul li.active').find('a').attr('href');
    $(selectedTab).fadeIn();
});

$('ul li').on('click', function(){
    $('ul li').removeClass('active');
    $('.installation .section').hide();

    $(this).addClass('active');
    var selectedTab = $(this).find('a').attr('href');
    $(selectedTab).fadeIn();
});

var tabExpander = 50;
var exp;

$('ul').mouseover(function(){
    exp = setInterval(function(){expand()}, 100);
    $('ul a').css('font-size', '1.25em');

/*}).mouseout(function(){
    clearInterval(exp);
    tabExpander = 50;
    $('ul a').css("width", tabExpander + 'px');
    */
});

function expand(){
    tabExpander+=10;
    //console.log('made it!');
    if(tabExpander < 150){
        $('ul a').css('width', tabExpander + 'px');
    }
}
