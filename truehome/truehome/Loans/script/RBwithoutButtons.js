loanImages = new Array("image/Travelling loan/Slide1.png", "image/Travelling loan/Slide2.png", "image/Travelling loan/Slide3.png", "image/Travelling loan/Slide4.png")
thisLoan = 0
imgCt = loanImages.length
function rotate() {
    if (document.images) {
        thisLoan++
        if (thisLoan == imgCt) {
            thisLoan = 0
        }
        document.loanBanner.src = loanImages[thisLoan]
        setTimeout("rotate()", 3 * 1000)
    }
}