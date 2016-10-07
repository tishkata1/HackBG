str="H, T, H, T, T, H, T, H, H";
s = "H, H, H, H, T, T, T";
s1 = "H, T, H, T, T, H, T"

function win(str) {
    var str1 = str.replace(/, /g, "");

//replace t's and h's with commas
    resT = str1.replace(/H+/g, ",");
    resH = str1.replace(/T+/g, ",");
//create arrays with the consecutive t's and h's
    arrT = resT.split(",");
    arrH = resH.split(",")
//sorting the arrays in descending order
    maxConsecutiveT = arrT.sort(function (a, b) {
        return b.length - a.length
    })[0];
    maxConsecutiveH = arrH.sort(function (a, b) {
        return b.length - a.length
    })[0];

    if (maxConsecutiveH.length > maxConsecutiveT.length) {
        console.log("H wins!");
    } else if (maxConsecutiveT.length > maxConsecutiveH.length) {
        console.log("T wins!");
    } else {
        console.log("Draw");
    }
}
win(str);
win(s);
win(s1);