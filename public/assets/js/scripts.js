$(document).ready(function() {

	SyntaxHighlighter.all()

	$('#twitter-feed').jTweetsAnywhere({
        username: 'Rikki_Sixx',
        count: 3,
        showTwitterBird: false,
        showTweetFeed: {
            autorefresh: {
                mode: 'trigger-insert',
                interval: 60
            },
            paging: {
                mode: 'more'
            },
            showTimestamp: {
                refreshInterval: 15
            }
        }
    });
});