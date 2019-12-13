(function () {
	var form,
		userName,
		userNameWarning,
		userLastname,
		userEmail,
		userMessage,
		regex;

	function prepare() {
		form = document.forms['feedback_form'];
		userName = form['user_name'];
		userNameWarning = document.getElementById('username_warning');
		userLastname = form['user_lastname'];
		userEmail = form['user_email'];
		userMessage = document.getElementById('form_textarea');

		userName.addEventListener('input', check_letters_only);
		userLastname.addEventListener('input', check_letters_only);
		userEmail.addEventListener('input', check_email);
		userMessage.addEventListener('input', check_message);
		form.addEventListener('submit', check_form);
	}
	function check_letters_only() {
		regex = /[^A-Za-z]/i;

		if (regex.test(this.value) || this.value == '') {
			hide_warn(this.parentNode.querySelector('#input_warning'), false);
			this.className = 'warning';
			this.focus();
			return false;
		}
		else {
			hide_warn(this.parentNode.querySelector('#input_warning'), true);
			this.className = '';
			return true;
		}
	}
	function hide_warn(warn, hide) {
		if (hide) {
			warn.style.display = 'none';
		}
		else {
			warn.style.display = 'block';
		}
	}
	function check_email() {
		regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		
		if (!regex.test(this.value)) {
			hide_warn(this.parentNode.querySelector('#input_warning'), false);
			this.className = 'warning';
			this.focus();
			return false;
		} else {
			hide_warn(this.parentNode.querySelector('#input_warning'), true);
			this.className = '';
			return true;
		}
	}
	function check_message () {
		if (this.value == '') {
			hide_warn(this.parentNode.querySelector('#input_warning'), false);
			this.className = 'warning';
			this.focus();
			return false;
		}
		else {
			this.className = '';
			hide_warn(this.parentNode.querySelector('#input_warning'), true);
			return true;
		}
	}
	function check_form(e) {
		e.preventDefault();

		if (check_letters_only.call(userName)
			&& check_letters_only.call(userLastname)
			&& check_email.call(userEmail)
			&& check_message.call(userMessage)
		) {
			this.submit();
		} else {
			return false;
		}

	}
	window.addEventListener('load', prepare);
})();