
var all;
var daily_play;
var found;
var foundlist = [];
var guess;
var letters = [], todayletters = [];
var points;
var rank1, rank2, rank3, rank4, rank5, rank6, rank7, rank8, rank9;
var replaying;
var total, todaytotal, yesterdaytotal;
var win;
var wordlist = [], todaywordlist = [], yesterdaywordlist = [];
var words, todaywords, yesterdaywords;

function type(letter, combno) {
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    $("#comb" + combno).addClass("clickedComb");
    document.getElementById("guess").value = document.getElementById("guess").value + letter;
}

function untype() {
    $("#comb1").removeClass("clickedComb");
    $("#comb2").removeClass("clickedComb");
    $("#comb3").removeClass("clickedComb");
    $("#comb4").removeClass("clickedComb");
    $("#comb5").removeClass("clickedComb");
    $("#comb6").removeClass("clickedComb");
    $("#comb7").removeClass("clickedComb");
}

function display() {
    var didtouch = 0;

    document.getElementById("play1").innerHTML = letters[0];
    document.getElementById("play1").style.top = "43px";
    document.getElementById("play1").style.left = "40px";
    document.getElementById("play1").ontouchstart = function () { didtouch = 1; type(letters[0], 1) };
    document.getElementById("play1").onmousedown = function () { if (didtouch != 1) { type(letters[0], 1) } };
    document.getElementById("play1").style.display = "block";
    document.getElementById("play1").onmouseup = function () { untype() };
    document.getElementById("play1").ondragend = function () { untype() };
    document.getElementById("play1").ontouchend = function () { untype() };
    document.getElementById("play1").ontouchcancel = function () { untype() };

    document.getElementById("play2").innerHTML = letters[1];
    document.getElementById("play2").style.top = "-9px";
    document.getElementById("play2").style.right = "97px";
    document.getElementById("play2").ontouchstart = function () { didtouch = 1; type(letters[1], 2) };
    document.getElementById("play2").onmousedown = function () { if (didtouch != 1) { type(letters[1], 2) } };
    document.getElementById("play2").style.display = "block";
    document.getElementById("play2").onmouseup = function () { untype() };
    document.getElementById("play2").ondragend = function () { untype() };
    document.getElementById("play2").ontouchend = function () { untype() };
    document.getElementById("play2").ontouchcancel = function () { untype() };

    document.getElementById("play3").innerHTML = letters[2];
    document.getElementById("play3").style.right = "18px";
    document.getElementById("play3").style.top = "43px";
    document.getElementById("play3").ontouchstart = function () { didtouch = 1; type(letters[2], 3) };
    document.getElementById("play3").onmousedown = function () { if (didtouch != 1) { type(letters[2], 3) } };
    document.getElementById("play3").style.display = "block";
    document.getElementById("play3").onmouseup = function () { untype() };
    document.getElementById("play3").ondragend = function () { untype() };
    document.getElementById("play3").ontouchend = function () { untype() };
    document.getElementById("play3").ontouchcancel = function () { untype() };

    document.getElementById("play4").innerHTML = letters[3];
    document.getElementById("play4").style.left = "40px";
    document.getElementById("play4").style.top = "138px";
    document.getElementById("play4").ontouchstart = function () { didtouch = 1; type(letters[3], 4) };
    document.getElementById("play4").onmousedown = function () { if (didtouch != 1) { type(letters[3], 4) } };
    document.getElementById("play4").style.display = "block";
    document.getElementById("play4").onmouseup = function () { untype() };
    document.getElementById("play4").ondragend = function () { untype() };
    document.getElementById("play4").ontouchend = function () { untype() };
    document.getElementById("play4").ontouchcancel = function () { untype() };

    document.getElementById("play5").innerHTML = letters[4];
    document.getElementById("play5").style.left = "117px";
    document.getElementById("play5").style.top = "190px";
    document.getElementById("play5").ontouchstart = function () { didtouch = 1; type(letters[4], 5) };
    document.getElementById("play5").onmousedown = function () { if (didtouch != 1) { type(letters[4], 5) } };
    document.getElementById("play5").style.display = "block";
    document.getElementById("play5").onmouseup = function () { untype() };
    document.getElementById("play5").ondragend = function () { untype() };
    document.getElementById("play5").ontouchend = function () { untype() };
    document.getElementById("play5").ontouchcancel = function () { untype() };

    document.getElementById("play6").innerHTML = letters[5];
    document.getElementById("play6").style.left = "196px";
    document.getElementById("play6").style.top = "138px";
    document.getElementById("play6").ontouchstart = function () { didtouch = 1; type(letters[5], 6) };
    document.getElementById("play6").onmousedown = function () { if (didtouch != 1) { type(letters[5], 6) } };
    document.getElementById("play6").style.display = "block";
    document.getElementById("play6").onmouseup = function () { untype() };
    document.getElementById("play6").ondragend = function () { untype() };
    document.getElementById("play6").ontouchend = function () { untype() };
    document.getElementById("play6").ontouchcancel = function () { untype() };

    document.getElementById("play7").innerHTML = letters[6][1];
    document.getElementById("play7").style.left = "117px";
    document.getElementById("play7").style.top = "92px";
    document.getElementById("play7").ontouchstart = function () { didtouch = 1; type(letters[6][1], 7) };
    document.getElementById("play7").onmousedown = function () { if (didtouch != 1) { type(letters[6][1], 7) } };
    document.getElementById("play7").style.display = "block";
    document.getElementById("play7").onmouseup = function () { untype() };
    document.getElementById("play7").ondragend = function () { untype() };
    document.getElementById("play7").ontouchend = function () { untype() };
    document.getElementById("play7").ontouchcancel = function () { untype() };
}

function update_rank() {
    var rank;

    if (points >= rank9) {
        if (win == 0) {
            alert("You earned the rank of Queen Bee!\n\nCan you find all the words?");
            win = 1;
        }
        rank = "Queen Bee!";
    } else if (points >= rank8) {
        rank = "Outstanding";
    } else if (points >= rank7) {
        rank = "Marvellous";
    } else if (points >= rank6) {
        rank = "Superb";
    } else if (points >= rank5) {
        rank = "Excellent";
    } else if (points >= rank4) {
        rank = "Skilled";
    } else if (points >= rank3) {
        rank = "Fine";
    } else if (points >= rank2) {
        rank = "Novice";
    } else {
        rank = "Newbie";
    }

    document.getElementById("rank-update").innerHTML = rank;
}

function set_rank() {
    rank1 = 0;
    rank2 = Math.floor(total * 0.02);
    rank3 = Math.floor(total * 0.05);
    rank4 = Math.floor(total * 0.08);
    rank5 = Math.floor(total * 0.15);
    rank6 = Math.floor(total * 0.25);
    rank7 = Math.floor(total * 0.40);
    rank8 = Math.floor(total * 0.50);
    rank9 = Math.floor(total * 0.70);
}

function save_word() {
    localStorage.setItem("foundwords", JSON.stringify(foundlist));
}

function add_points() {
    var one = 0, two = 0, three = 0, four = 0, five = 0, six = 0;
    var i = 0, j = 0;

    if (daily_play === 1) {
        save_word();
    }

    i = guess.length;
    if (i < 7) {
        if (i == 4) {
            i = 1;
        }
        points = points + i;

        return;
    }

    i = 0;
    while (i < guess.length) {
        for (j = 0; j < 7; j++) {
            if (guess[i] == letters[j]) {
                if (j == 0) {
                    one = 1;
                }
                if (j == 1) {
                    two = 1;
                }
                if (j == 2) {
                    three = 1;
                }
                if (j == 3) {
                    four = 1;
                }
                if (j == 4) {
                    five = 1;
                }
                if (j == 5) {
                    six = 1;
                }
            }
        }
        i = i + 1;
    }

    if (one == 1 && two == 1 && three == 1 && four == 1 && five == 1 && six == 1) {
        points = points + guess.length + 7;
        document.getElementById("no-message").style.display = "none";
        document.getElementById("pangram").style.display = "inline";

        return;
    }

    points = points + guess.length;
}

function found_word() {
    var i;

    for (i = 0; i < found; i++) {
        if (guess == foundlist[i]) {
            document.getElementById("no-message").style.display = "none";
            document.getElementById("already-found").style.display = "inline";
            return 1;
        }
    }

    foundlist.push(guess);

    found = found + 1;

    add_points();

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");

    update_rank();

    if (found == words) {
        alert("Congratulations! You found all the words!");
        all = 1;
    }

    return 0;
}

function check() {
    var center = 0, i;

    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";

    if (replaying === 0) {
        guess = document.getElementById("guess").value.toLowerCase();
        document.getElementById("player-guess").reset();
    } else {
        guess = guess.toLowerCase();
    }

    for (i = 0; i < guess.length; i++) {
        if ("7" + guess[i] == letters[6]) {
            center = 1;
        }
    }

    if (guess.length < 4) {
        document.getElementById("no-message").style.display = "none";
        document.getElementById("too-short").style.display = "inline";
        return 1;
    }

    if (center == 0) {
        document.getElementById("no-message").style.display = "none";
        document.getElementById("center-letter").style.display = "inline";
        return 1;
    }

    for (i = 0; i < words; i++) {
        if (guess == wordlist[i]) {
            i = found_word();
            return i;
        }
    }
    document.getElementById("no-message").style.display = "none";
    document.getElementById("not-in-list").style.display = "inline";

    return 1;
}

function replay_words() {
    var i, replay;

    replaying = 1;

    replay = JSON.parse(localStorage.getItem("foundwords"));

    localStorage.clear();

    for (i = 0; i < replay.length; i++) {
        guess = replay[i];

        if (check() == 1) {
            localStorage.clear();

            for (i = 0; i < found; i++) {
                foundlist.pop();
            }

            all = 0;
            found = 0;
            points = 0;
            rank = "Newbie";
            win = 0;

            document.getElementById("no-message").style.display = "inline";
            document.getElementById("pangram").style.display = "none";
            document.getElementById("already-found").style.display = "none";
            document.getElementById("center-letter").style.display = "none";
            document.getElementById("too-short").style.display = "none";
            document.getElementById("not-in-list").style.display = "none";

            replaying = 0;

            return;
        }
    }

    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";

    replaying = 0;
}

function daily(replay = 1) {
    var i;

    daily_play = 1;

    if (replay == 0) {
        if (confirm("Are you sure you want to restart the game?")) {
            localStorage.clear();
        } else {
            return;
        }
    }

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    replaying = 0;
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Yesterday's answers";
    document.getElementById("random-answers").style.display = "none";
    document.getElementById("update-random").innerHTML = "";
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    document.getElementById("play1").style.display = "none";
    document.getElementById("play2").style.display = "none";
    document.getElementById("play3").style.display = "none";
    document.getElementById("play4").style.display = "none";
    document.getElementById("play5").style.display = "none";
    document.getElementById("play6").style.display = "none";
    document.getElementById("play7").style.display = "none";

    letters[0] = todayletters[0];
    letters[1] = todayletters[1];
    letters[2] = todayletters[2];
    letters[3] = todayletters[3];
    letters[4] = todayletters[4];
    letters[5] = todayletters[5];
    letters[6] = todayletters[6];
    words = todaywords;
    total = todaytotal;
    wordlist = todaywordlist;
    set_rank();
    if (localStorage.hasOwnProperty("foundwords") === true)
        replay_words();
    document.getElementById("update-random").innerHTML = yesterdaywordlist.join("<br />") + "<br />" + "<br />Total words:  " + yesterdaywords + "<br />Total points: " + yesterdaytotal + "<br />Points for Queen Bee: " + Math.floor(yesterdaytotal * 0.70);
    display();
}

function get_yesterday() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            yesterdaywords = gameObj.words;
            yesterdaytotal = gameObj.total;
            yesterdaywordlist = gameObj.wordlist;
        }
    };

    xhttp.open("GET", "yesterday", true);
    xhttp.send();
}

function get_today() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            todayletters[0] = gameObj.letters[0];
            todayletters[1] = gameObj.letters[1];
            todayletters[2] = gameObj.letters[2];
            todayletters[3] = gameObj.letters[3];
            todayletters[4] = gameObj.letters[4];
            todayletters[5] = gameObj.letters[5];
            todayletters[6] = "7" + gameObj.center;
            todaywords = gameObj.words;
            todaytotal = gameObj.total;
            todaywordlist = gameObj.wordlist;
            daily();
        }
    };

    xhttp.open("GET", "today", true);
    xhttp.send();
}

window.onload = function () {
    get_yesterday();
    get_today();
};

function shuffle() {
    var i, j, t;

    for (i = 5; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        t = letters[j];
        letters[j] = letters[i];
        letters[i] = t;
    }

    display();
}

function random() {
    var xhttp = new XMLHttpRequest();
    var i;

    daily_play = 0;

    for (i = 0; i < found; i++) {
        foundlist.pop();
    }

    all = 0;
    found = 0;
    points = 0;
    rank = "Newbie";
    win = 0;

    document.getElementById("points-update").innerHTML = points;
    document.getElementById("answers-update").innerHTML = foundlist.join("<br />");
    document.getElementById("rank-update").innerHTML = rank;
    document.getElementById("yesterday-or-random").innerHTML = "Answers";
    document.getElementById("update-random").innerHTML = "";
    document.getElementById("no-message").style.display = "inline";
    document.getElementById("pangram").style.display = "none";
    document.getElementById("already-found").style.display = "none";
    document.getElementById("center-letter").style.display = "none";
    document.getElementById("too-short").style.display = "none";
    document.getElementById("not-in-list").style.display = "none";
    document.getElementById("play1").style.display = "none";
    document.getElementById("play2").style.display = "none";
    document.getElementById("play3").style.display = "none";
    document.getElementById("play4").style.display = "none";
    document.getElementById("play5").style.display = "none";
    document.getElementById("play6").style.display = "none";
    document.getElementById("play7").style.display = "none";

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var gameObj = JSON.parse(this.responseText);
            letters[0] = gameObj.letters[0];
            letters[1] = gameObj.letters[1];
            letters[2] = gameObj.letters[2];
            letters[3] = gameObj.letters[3];
            letters[4] = gameObj.letters[4];
            letters[5] = gameObj.letters[5];
            letters[6] = "7" + gameObj.center;
            words = gameObj.words;
            total = gameObj.total;
            wordlist = gameObj.wordlist;
            set_rank();
            display();
            document.getElementById("random-answers").style.display = "block";
        }
    };

    xhttp.open("GET", "../../cgi-bin/freebee-random", true);
    xhttp.send();
}

function show_random() {
    document.getElementById("update-random").innerHTML = wordlist.join("<br />") + "<br />" + "<br />Total words:  " + words + "<br />Total points: " + total + "<br />Points for Queen Bee: " + Math.floor(total * 0.70);
}

function delete_letter() {
    var str = document.getElementById("guess").value;
    var len = str.length;

    str = str.slice(0, len - 1) + str.slice(len, len);
    document.getElementById("guess").value = str;
}
