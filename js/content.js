var times = [];
runBuildOnLoad();


function runBuildOnLoad() {
    $(document).on('keydown', function(e) {
        if(e.key === 'a') {
            var currTime = $('.ytp-time-current').text();
            currTime = currTime.split(':');
            var intTime = 0;
            for(var i = currTime.length - 1; i >= 0; i--) {
                intTime += parseInt(currTime[currTime.length - i - 1]) * Math.pow(60, i);
            }
            times.push(intTime);
            console.log('Q' + times.length + ': ' + intTime.toString());
        }
        else if(e.key === 'q') {
            console.log(times);
        }
        else if(e.key === 'u') {
            if(confirm('Are you sure you want to undo question ' + times.length + '?')) {
                times.pop();
            }
        }
        else if(e.key === 'r') {
            if(confirm('Are you sure you want to reset?')) {
                times = []
            }
        }
        else if(e.key === 'h') {
            console.log('a: add question time\nu: undo previous question time\nq: print final array\nr: reset question array');
        }
    });
    /*$(':contains("Share")').filter(function() {
        if($(this).text() === "Share") {
            console.log($(this).trigger('click'));
        }
    });*/
}

