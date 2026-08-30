function initTheme() {

}

function initdashboardTheme() {
	$("#tab_menu").html("<div id=\"DashboardBar\"><lable id=\"Language.Dashboard\">" + Cyberoam.getTranslatedMSG("Language.Dashboard") + "</lable></div>");
}
Cyberoam.setPageSize = function(event) {
	try {
		var leftPanelWidth = $(".left-pnl").width();
		var width = document.documentElement.clientWidth;
		if (width < Cyberoam.fixedWidthResulotion) {
			document.getElementById("topbar").style.width = (width - leftPanelWidth) + "px";
		} else {
			document.getElementById("topbar").style.width = (Cyberoam.fixedWidthResulotion - leftPanelWidth) + "px";
		}
		var topbarHeight = $("#topbar").innerHeight();
		topbarHeight += 14; //topbar height + extra padding for mainframediv
		$("#mainframediv").css("padding-top", topbarHeight);
	} catch (e) {
		Cyberoam.logger.log("PageSizeError:" + e);
	}
}
