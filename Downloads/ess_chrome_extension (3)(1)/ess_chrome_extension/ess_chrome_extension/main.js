var selectedHr = null;
var selectedMin = null;

var entries = [];

var outTime;
var outTime6;
var remainingHr = '00';
var remainingMin = '00';
var remainingSec = '00';
var clock;
var dom;
var tabId;

var remainingHr6 = '00';
var remainingMin6 = '00';
var remainingSec6 = '00';


chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
    if (message.action === 'CALCULATE_TIME') {
        calculateDailyTime();
    } else if (message.action === 'CALCULATE_EXTRA_TIME') {
        calculateExtraTime();
    }
});


function calculateDailyTime() {
    this.entries = [];
    setTimeout(function () {
        var date = $("#UserDetail1_txtPDate_txtDate").val();
        var rows = $("#UserDetail1_grdPunchDetail tr.gridrowstyle");
        var previousEntryType = '';
        if (rows.length && moment().isSame(moment(date, "DD-MM-YYYY"), 'day')) {
            $(rows).each(function (index) {
                var entry = $(this).find("span[id^='UserDetail1_grdPunchDetail_lblTime']");
                var entryType = $(this).find("span[id^='UserDetail1_grdPunchDetail_IOType']").html();
                var hr = $(entry).html().split(':')[0];
                var min = $(entry).html().split(':')[1];
                var date = moment().set('h', parseInt(hr)).set('m', parseInt(min));
                if(previousEntryType === '' || previousEntryType !== entryType){
                    entries.push(date);
                    previousEntryType = entryType;
                }else if(previousEntryType === 'Out' && entryType === 'Out'){
                    entries.pop();
                    entries.push(date);
                    previousEntryType = entryType;
                }
            });
            this.calculateTime();
        }
    }, 100)
}

function calculateTime() {
    if (clock) {
        clearInterval(clock);
    }
    entries.forEach((curVal, index) => {
        if (index === 0) {
            outTime = moment(entries[0]).add(7, 'h').add(30, 'm');
            outTime6 = moment(entries[0]).add(6, 'h');
        } else if (index % 2 === 0) {
            var timeDiff = entries[index].diff(entries[index - 1]);
            outTime = moment(outTime.add(timeDiff));
            outTime6 = moment(outTime6.add(timeDiff));
        }
    });
    clock = setInterval(() => {
        const timeDiff = outTime.diff(moment());

        const duration = moment.duration(timeDiff);
        remainingHr = duration.hours().toString().length == 1 ? '0' + duration.hours().toString() : duration.hours().toString();
        remainingMin = duration.minutes().toString().length == 1 ? '0' + duration.minutes().toString() : duration.minutes().toString();
        remainingSec = duration.seconds().toString().length == 1 ? '0' + duration.seconds().toString() : duration.seconds().toString();

        const timeDif6 = outTime6.diff(moment());		
        const duration6 = moment.duration(timeDif6);
        remainingHr6 = duration6.hours().toString().length == 1 ? '0' + duration6.hours().toString() : duration6.hours().toString();
        remainingMin6 = duration6.minutes().toString().length == 1 ? '0' + duration6.minutes().toString() : duration6.minutes().toString();
        remainingSec6 = duration6.seconds().toString().length == 1 ? '0' + duration6.seconds().toString() : duration6.seconds().toString();
		
		if(parseInt(remainingSec6) <0 && parseInt(remainingMin6) < 0 && parseInt(remainingHr6) <0)
		{
			$("#time6").val(`Minimum hours is completed you can go now.`);	
			$("#time6").css("background-color","darkseagreen");
			$("#time6").css("color","white");
		}		
		else
		{
			$("#time6").val(`${remainingHr6}hr ${remainingMin6}min ${remainingSec6}sec remaining`);
			$("#time6").css("background-color","indianred");
			$("#time6").css("color","white");
		}
					
		// if(parseInt(remainingHr) <= 0 )
		// {				
			// if(parseInt(remainingMin) <= 0)
			// {			
				// if(parseInt(remainingSec) <= 0)
				// {			
					// $("#time7").val(`Time over. You can go now!`);
				// }
			// }
		// }
		if(parseInt(remainingHr) <= 5 && parseInt(remainingMin) <= 40 && parseInt(remainingSec) <= 0)
		{							
			$("#time7").val(`Time over. You can go now!`);			
			$("#time7").css("background-color","darkseagreen");
			$("#time7").css("color","white");
		}
		else
		{		
			$("#time7").val(`${remainingHr}hr ${remainingMin}min ${remainingSec}sec remaining`);
			$("#time7").css("background-color","indianred");
			$("#time7").css("color","white");
		}				     
        //
    }, 1000);

    $("#UserDetail1_Table2 tbody").append(`
            <tr>
                <td class="LabelAlignment"><span class="LabelText">6 Hours</span></td>
                <td class="ControlPadding">
                    <input type="text" value="${moment(outTime6).format("LT")}"     disabled="disabled" class="aspNetDisabled TextDisplay cbonormal" style="width:63px;">
                    <input type="text" id="time6" disabled="disabled" class="aspNetDisabled TextDisplay cbonormal" style="width:183px;">
                </td>
            </tr>
            <tr>
                <td class="LabelAlignment"><span class="LabelText">7:30 Hours</span></td>
                <td class="ControlPadding">
                    <input type="text" value="${moment(outTime).format("LT")}" disabled="disabled" class="aspNetDisabled TextDisplay cbonormal" style="width:63px;">
                    <input type="text" id="time7"  disabled="disabled" class="aspNetDisabled TextDisplay cbonormal" style="width:183px;">
                </td>
            </tr>
        `);
}

function calculateExtraTime() {
    var total_time = document.getElementById('txtWorkHrs').value.split(':');


    var present_day = document.getElementById('txtpresent').value;



    var total_hours = total_time[0];
    var total_mins = total_time[1];
    total_hours = total_hours * 60;
    var totalmins = parseInt(total_hours, 10) + parseInt(total_mins, 10);
    var reqmins;

    var temp = present_day.split('.');
    if (temp[1] > 1) {
        reqmins = (450 * temp[0]) + 240;
    } else {
        reqmins = 450 * temp[0];
    }

    var finalresult = totalmins - parseInt(reqmins, 10);

    var target = $("#lblWorkHours").parent().parent();
    $(`
    <tr>
        <td class="LabelAlignment" valign="middle">
                                <span class="LabelText">Extra Hours</span>
                            </td>
        <td valign="middle" class="ControlPadding" colspan="2" align="left">
                                <input name="txtWorkHrs" type="text" value="${finalresult > 0 ? '+' : '-'}${moment.duration(Math.abs(finalresult), "minutes").format("hh:mm",{trim: false})}" readonly="readonly" id="txtWorkHrs" tabindex="-1" class="TextDisplay" placeholder="HH:MM" onkeydown="JavaScript:return SetDisplayField(event)" style="width:150px;">
                            </td>
    </tr>
    `).insertAfter(target);

}