truehomeHover = function () 
{
    var truehomeEls = document.getElementById("nav").getElementsByTagName("LI");
    for (var i = 0; i < truehomeEls.length; i++) 
    {
        truehomeEls[i].onmouseover = function () 
        {
            this.className += " truehomehover";
        }
        truehomeEls[i].onmouseout = function () 
        {
            this.className = this.className.replace(new RegExp(" truehomehover\\b"), "");
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", truehomeHover);