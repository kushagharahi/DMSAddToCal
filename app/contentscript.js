var td = document.getElementsByTagName('td');
var table = document.getElementsByTagName('table')[0];
var h1 = document.getElementsByTagName('h1')[0];

//scrape info
var title = h1.innerText.trim();
var length = td[1].innerText.split("—");
length[0] = length[0].trim();
length[1] = length[1].trim();
if(length[0].includes(":"))
	var startTime = moment(length[0].substring(3), "MMM D h:ma");
else
	var startTime = moment(length[0].substring(3), "MMM D ha");

var month = length[0].split(" ")[1];
var day = length[0].split(" ")[2];
if(length[1].includes(":"))	
	var endTime = moment(month + " " + day + " " + length[1], "MMM D h:ma");
else
	var endTime = moment(month + " " + day + " " + length[1], "MMM D ha");
var address = td[3].innerText.replace(/\s+/g, ' ').replace('#', ' ').trim();
var description = td[5].innerText.trim();

var calendarEvent = createCalendar({
  data: {
    title: title,

    start: startTime.toDate(),

    end: endTime.toDate(),     

    address: address,

	description: window.location.href
  }
});

table.insertRow(table.rows.length).insertCell(0).appendChild(calendarEvent);
table.rows[table.rows.length - 1].style.color = "blue";