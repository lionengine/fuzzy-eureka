window.addEventListener('load', prepare_events);


function prepare_events() {
	var keydownOutput = document.getElementById('keydown_output');
	var keydownInput = document.getElementById('keydown_input');
	var mouseEvents = document.getElementById('mouse_events');

	keydownInput.addEventListener('keydown', function () {
		keydownOutput.innerHTML = this.value;
	});
	mouseEvents.addEventListener('contextmenu', mouse_events);
	mouseEvents.addEventListener('click', mouse_events);
	mouseEvents.addEventListener('mousedown', mouse_events);
	mouseEvents.addEventListener('mouseup', mouse_events);
	mouseEvents.addEventListener('mouseover', mouse_events);
	mouseEvents.addEventListener('mouseout', mouse_events);

}
function mouse_events(e) {
	e.preventDefault();
	
	this.innerHTML += '<br>' + e.type;
	this.scrollTo(0, this.scrollHeight - this.clientHeight);
}