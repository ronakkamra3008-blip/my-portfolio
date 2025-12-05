var words = ['Customer Communication', 'Customer Engagement*', 'Customer Insights', 'Business Analyst', 'Fitness Enthusiast'],
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 5,
    speed = 100;

var wordflick = function () {
    setInterval(function () {
        let fullWord = words[i];
        let base = "";
        let changingPart = fullWord;

        if (fullWord.startsWith("Data ")) {
            base = "Data "; // Keep "Data " fixed
            changingPart = fullWord.substring(5); // Get only the part after "Data "
        }
        
        if (forwards) {
            if (offset >= changingPart.length) {
                ++skip_count;
                if (skip_count == skip_delay) {
                    forwards = false;
                    skip_count = 0;
                }
            }
        } else {
            if (offset == 0) {
                forwards = true;
                i++;
                offset = 0;
                if (i >= len) {
                    i = 0;
                }
            }
        }
        
        let part = changingPart.substr(0, offset);
        if (skip_count == 0) {
            if (forwards) {
                offset++;
            } else {
                offset--;
            }
        }
        
        $('.word').text(base + part);
    }, speed);
};

$(document).ready(function () {
    wordflick();
});
