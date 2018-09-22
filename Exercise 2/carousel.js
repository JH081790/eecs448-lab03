let images = [];
let currentIndex = 1;
for(let i = 1; i <= 5; i++){
    images.push('images/Naruto' + i + '.jpg')
}

function onLeftClick() {
    currentIndex = currentIndex == 1 ? 5 : currentIndex - 1
    document.getElementById('carouselPic').innerHTML = '<img width="300" height="300" src="' + images[currentIndex - 1] + '">'
    let pic = document.getElementById('carouselPic').innerHTML
    console.log(pic)
    console.log(currentIndex)
}
function onRightClick() {
    currentIndex = currentIndex == 5 ? 1 : currentIndex + 1;
    document.getElementById('carouselPic').innerHTML = '<img width="300" height="300" src="' + images[currentIndex - 1] + '">'
    let pic = document.getElementById('carouselPic').innerHTML
    console.log(pic)
    console.log(currentIndex)
}