import React from 'react';

function sysMillisToStr(sysMillis) {
    var date = new Date(sysMillis)
    var theyear = date.getFullYear()
    var themonth = date.getMonth() + 1
    themonth = themonth <= 9 ? "0" + themonth : themonth
    var thetoday = date.getDate()
    thetoday = thetoday <= 9 ? "0" + thetoday : thetoday
    var thehour = date.getHours()
    thehour = thehour <= 9 ? "0" + thehour : thehour
    var themin = date.getMinutes()
    themin = themin <= 9 ? "0" + themin : themin
    var thesec = date.getSeconds()
    thesec = thesec <= 9 ? "0" + thesec : thesec
    var themill = date.getMilliseconds()

    return theyear+"/"+themonth+"/"+thetoday+" "+thehour+":"+themin+":"+thesec+":"+themill
}

function secToMin(sec) {
    var min = parseInt(sec / 60)
    var sec = sec % 60
    return min + "분 " + sec + "초"
}

console.log(secToMin(3));

console.log(sysMillisToStr(1596096708555));
