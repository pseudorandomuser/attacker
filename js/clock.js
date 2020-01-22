function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = fixZero(m);
	s = fixZero(s);
	document.getElementById('clock_h').innerHTML = h + ":" + m + ":" + s;
	setTimeout(startTime, 500);
}
function fixZero(i) {
	if (i < 10) {
		return "0" + i;
	};
	return i;
}
