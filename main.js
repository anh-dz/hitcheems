$(document).ready(function() {
    $("img").click(function() {
        var audio = new Audio("sound.mp3");
        audio.play();
        $(this).attr("src", "https://anh-dz.github.io/hitcheems/hitcheems2.png");
        setTimeout(() => {$(this).attr("src", "hitcheems.png")} , 100);
   })
})
