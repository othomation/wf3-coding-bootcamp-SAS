document.getElementById("tab-default").click();
function openHoodTabContent(event, hoodName) {
	let i, tabContent, linkTab;
	tabContent = document.getElementsByClassName("tab-shown-content");
	for (i = 0; i < tabContent.length; i++) {
		tabContent[i].style.display = "none";
	}
	linkTab = document.getElementsByClassName("link-tab");
	for (i = 0; i < linkTab.length; i++) {
		linkTab[i].className = linkTab[i].className.replace(" active", "");
	}
	document.getElementById(hoodName).style.display = "block";
	event.currentTarget.className += " active";
}
