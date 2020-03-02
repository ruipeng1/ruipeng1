images = new Array("","","")

thisAd = 0
imgCt = images.length
function rotate() {
if (document.images) {
thisAd++
if (thisAd == imgCt) {
thisAd = 0
}
document.banner.src=images[thisAd]
setTimeout("rotate()", 3000)
}
}