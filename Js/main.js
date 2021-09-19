let outerWidth = $("#movingBar").outerWidth();
let closed = true;
$(document).ready(function () {
    $("#open-menu").css(`transform`, `translateX(${-outerWidth}px)`);
});

$("#menu").click(function () {
    if (closed) {
        $("#movingBar").css(`transform`, `translateX(${outerWidth}px)`);
        $("#menu").css(`transform`, `translateX(${outerWidth}px)`);
        $("#state").html("Close");
        closed = false;
    } else {
        $("#movingBar").css(`transform`, `translateX(${0}px)`);
        $("#menu").css(`transform`, `translateX(${0}px)`);
        $("#state").html("Open");
        closed = true;
    }
});

$("#close").click(function () {
    $("#movingBar").css(`transform`, `translateX(${0}px)`);
    $("#menu").css(`transform`, `translateX(${0}px)`);
    closed = true;
});

$(".singer1").click(function () {
    $(".desc1").slideToggle();
    $(".desc2").slideUp();
    $(".desc3").slideUp();
    $(".desc4").slideUp();
});

$(".singer2").click(function () {
    $(".desc2").slideToggle();
    $(".desc3").slideUp();
    $(".desc1").slideUp();
    $(".desc4").slideUp();
});

$(".singer3").click(function () {
    $(".desc4").slideUp();
    $(".desc1").slideUp();
    $(".desc2").slideUp();
    $(".desc3").slideToggle();
});

$(".singer4").click(function () {
    $(".desc4").slideToggle();
    $(".desc1").slideUp();
    $(".desc2").slideUp();
    $(".desc3").slideUp();
});


$("textarea").keyup(function () {
    let charCounter = $("textarea").val().length;
    (charCounter <= 100) ? ($("#charCounter").html(100 - charCounter), $("#sendMessage").prop("disabled", false)) : ($("#charCounter").html("your available character finished"), $("#sendMessage").prop("disabled", true));
})

$(function makeTimer() {

    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");	
    var endTime = new Date("17 december 2021 GMT+02:00")
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
    var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600)) / 60);
    var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if (hours < "10") { hours = "0" + hours; }
    if (minutes < "10") { minutes = "0" + minutes; }
    if (seconds < "10") { seconds = "0" + seconds; }

    $("#days").html(` <h3> ${days}  D </h3>`);
    $("#hours").html(` <h3> ${hours}  H </h3>`);
    $("#minutes").html(` <h3> ${minutes}  m </h3>`);
    $("#seconds").html(` <h3> ${seconds}  s </h3>`);
    setInterval(function () { makeTimer(); }, 1000);
});

$("#navHome").click(function () {
    $('html,body').animate({ scrollTop: $("#home").offset().top }, 2000);
})
$("#navDuration").click(function () {
    $('html,body').animate({ scrollTop: $("#time").offset().top }, 2000);
})
$("#navDetails").click(function () {
    $('html,body').animate({ scrollTop: $("#details").offset().top }, 2000);
})
$("#navContact").click(function () {
    $('html,body').animate({ scrollTop: $("#contact").offset().top }, 2000);
})