
 // WHEN I refresh the page 
 // THEN the saved events persist
 $("#7am .description").val(localStorage.getItem("7am"));
 $("#8am .description").val(localStorage.getItem("8am"));
 $("#9am .description").val(localStorage.getItem("9am"));
 $("#10am .description").val(localStorage.getItem("10am"));
 $("#11am .description").val(localStorage.getItem("11am"));
 $("#12pm .description").val(localStorage.getItem("12pm"));
 $("#1pm .description").val(localStorage.getItem("1pm"));
 $("#2pm .description").val(localStorage.getItem("2pm"));
 $("#3pm .description").val(localStorage.getItem("3pm"));
 $("#4pm .description").val(localStorage.getItem("4pm"));
 $("#5pm .description").val(localStorage.getItem("5pm"));

$(document).ready(function() {
    // WHEN I open the planner THEN the current day is displayed at the top of the calendar
    var timeUpdate = function() {
        $("#currentDate").text(moment().format("dddd, MMMM Do h:mm:ss a"));
        $("#currentTime").text(moment().format("h:mm:ss a"));
    };
    timeUpdate();
    setInterval(timeUpdate, 1000);
    // WHEN I view the time blocks for that day 
    // THEN each time block is color-coded to indicate whether it is in the past, present, or future.
    var colorCoder = function() {
        var presentTime = moment().hours();

        $(".time-block").each(function() {
        var timeBlock = parseInt($(this).attr("id")[1]);
  
        if (timeBlock < presentTime) {
          $(this).addClass("past");
        } 
        else if (timeBlock === presentTime) {
          $(this).addClass("present");
        } 
        else {
          $(this).addClass("future");
        }
        console.log(timeBlock);
      });   
    }
    colorCoder();

    // WHEN I click the save button for that time block 
    // THEN the text for that event is saved in local storage
    $(".saveBtn").on("click", function() {
        var taskEntryTime = $(this).parent().attr("id");
        var taskEntryText = $(this).siblings(".description").val();
        localStorage.setItem(taskEntryTime, taskEntryText);
        console.log(taskEntryTime, taskEntryText);
    });
})




