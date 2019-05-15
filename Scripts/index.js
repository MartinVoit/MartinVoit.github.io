$("document").ready(function () {
    let text = ["Well... I'm", "Web Developer.", "Designer.", "UML Engineer.", "IoT Enthusiast.", "Have fun!"];


    var t = new Typed(".type", {
        strings: text,
        backSpeed: 30,
        typeSpeed: 30,
        backDelay: 1500,
        startDelay: 2000


    });
    $(".typed-cursor").css("animation", "none");
    $(".typed-cursor").css("opacity", "0");





    var imageDataArray = [];
    var canvasCount = 35;
    setInterval(() => {
        window.location.replace("./main.html")

    }, 17000);
    clearInterval();

});



