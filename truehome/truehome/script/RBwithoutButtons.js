homeImages = new Array("image/Slide1.png", "image/Slide2.png", "image/Slide3.png", "image/Slide4.png")
thisHome = 0
imgCt = homeImages.length
function rotate() {
    if (document.images) {
        thisHome++
        if (thisHome == imgCt) {
            thisHome = 0
        }
        document.homeBanner.src = homeImages[thisHome]
        setTimeout("rotate()", 3 * 1000)
    }
}