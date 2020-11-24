function changeImage() {
    document.getElementById('example').src="hitcheems2.png";
    var audio = new Audio('sound.mp3');
    audio.play();
    setTimeout(return_2, 100)
}
  function return_2() {
    element=document.getElementById('example');
    element.src="hitcheems.png";
}