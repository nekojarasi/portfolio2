$(function(){
    var duration = 300;
    
    var $aside = $('aside');
    var $asideButton = $aside.find('button')
        .on('click', function(){
        $aside.toggleClass('open');
        if($aside.hasClass('open')){
            $aside.stop(true).animate({
                left: '0px'
            }, duration,'linear');
            $asideButton.find('img')
                .attr('src', 'images/close.png');
        }else{
            $aside.stop(true).animate({
                left: '-200px'
            }, duration, 'linear');
            $asideButton.find('img')
                .attr('src', 'images/open.png');
        }
        });
    $asideButton.on('mouseover', function(){
        $asideButton.css('opacity', '0.7');
    });
    $asideButton.on('mouseout', function(){
        $asideButton.css('opacity', '1');
    });
    
});