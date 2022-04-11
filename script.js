// Init
var $ = jQuery;
var animationTime = 20,
    days = 7;

$(document).ready(function() {

    // timer arguments: 
    //   #1 - time of animation in mileseconds, 
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({ 'animation-duration': animationTime + 's' });

    var deadlineAnimation = function() {
        setTimeout(function() {
            $('#designer-arm-grop').css({ 'animation-duration': '1.5s' });
        }, 0);

        setTimeout(function() {
            $('#designer-arm-grop').css({ 'animation-duration': '1s' });
        }, 4000);

        setTimeout(function() {
            $('#designer-arm-grop').css({ 'animation-duration': '0.7s' });
        }, 8000);

        setTimeout(function() {
            $('#designer-arm-grop').css({ 'animation-duration': '0.3s' });
        }, 12000);

        setTimeout(function() {
            $('#designer-arm-grop').css({ 'animation-duration': '0.2s' });
        }, 15000);
    };


    deadlineAnimation();


    setInterval(function() {
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

});