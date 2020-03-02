function progress() {
	if (document.getElementById("progress").value==8) {
		window.location="home.htm";
	}
	document.getElementById("progress").value+=1;
	setTimeout('progress()',600);
}		