var isRunning = false;
$(document).ready(function() {
    $('#start').click(function() {
        $('div.boundary').removeClass('youlose');
        $('#status').text('Click the "S" to begin.');
        isRunning = true;
    });

    $('#end').mouseover(function(e) {
        if (isRunning) {
            $('#status').text('You win. =]');
            isRunning = false;
        }
    });

    $('#maze').hover(function(event) {
        const element = $('div.boundary');
        if (isRunning) {
            const startPosition = $('#start').offset();
            const endPosition = $('#end').offset();
            var x = event.pageX;
            if (x < startPosition.left || x > endPosition.left) {
                markFailure();
            }
        }
    });

    $('div.boundary').mouseover(function() {
        if (isRunning) {
            markFailure();
        }
    });
});

function markFailure() {
    const element = $('div.boundary');
    if (isRunning) {
        element.addClass('youlose');
        $('#status').text('Sorry, you lost. =[');
        isRunning = false;
    }
}