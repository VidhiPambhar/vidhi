chrome.webRequest.onCompleted.addListener(function () {
	chrome.tabs.query({
			currentWindow: true,
			active: true
		},
		function (tabArray) {
			tabId = tabArray[0].id;
			chrome.tabs.sendMessage(tabId, {
				action: 'CALCULATE_TIME'
			});
		}
	)
}, {
	urls: ["https://ess.infibeam-inc.ooo/COSEC/WebForms/frmDailyAttendanceView.aspx?ID=12050&HelpID=12050", "https://ess.infibeam.ooo/COSEC/WebForms/frmDailyAttendanceView.aspx?ID=12050&HelpID=12050"]
})

chrome.webRequest.onCompleted.addListener(function () {
	chrome.tabs.query({
			currentWindow: true,
			active: true
		},
		function (tabArray) {
			tabId = tabArray[0].id;
			chrome.tabs.sendMessage(tabId, {
				action: 'CALCULATE_EXTRA_TIME'
			});
		}
	)
}, {
	urls: ["https://ess.infibeam-inc.ooo/COSEC/WebForms/frmAtdSummary.aspx?ID=12007&HelpID=12007", "https://ess.infibeam.ooo/COSEC/WebForms/frmAtdSummary.aspx?ID=12007&HelpID=12007"]
})