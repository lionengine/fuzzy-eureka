window.addEventListener('load', prepare_theme);
var header, pageContent, themeButton, footer, navContainer,
	currentTheme = 'white';

function prepare_theme() {
	themeButton = document.getElementById('theme_button');
	header = document.getElementById('header');
	pageContent = document.getElementById('page_content');
	footer = document.getElementById('footer');
	navContainer = document.getElementById('nav_container');

	themeButton.addEventListener('click', change_theme);
}
function change_theme() {
	if (currentTheme == 'white') {
		header.className = 'black';
		pageContent.className = 'black';
		footer.className = 'black';

		currentTheme = 'black';
		navContainer.removeChild(themeButton);
		navContainer.insertBefore(themeButton, navContainer.firstChild);
	}
	else if (currentTheme == 'black') {
		header.className = '';
		pageContent.className = '';
		footer.classNaeme = '';

		currentTheme = 'white';
		navContainer.removeChild(themeButton);
		navContainer.appendChild(themeButton);
	}
}