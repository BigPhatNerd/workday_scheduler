$(document).ready(function() {
    var local = JSON.parse(localStorage.getItem("times")) || [];
    console.log("local: ", local);
    var currentDayEl = $("#currentDay");
    var today = moment().format("dddd");
    currentDayEl.text(today);
    var hour;
    var amPm;
    var currentTime = moment().format('h');
    var container = $(".container");
    for (var i = 0; i < 10; i++) {
        timeSlots(i)
        var html = `<div class="row border border-dark h-auto align-middle" id="${hour}${amPm}">
            <div class="col-2" >
                ${hour}:00${amPm}
            </div>
            <input type="text" class="col-8 bg-secondary ">
              
            </input>
            <div class="col-2 bg-info save">
                <span class="oi oi-folder"></span>
            </div>
        </div>`
        container.append(html);
        backgroundColor();
    }

    $("#8am input").val(localStorage.getItem("8am"));
    $("#9am input").val(localStorage.getItem("9am"));
    $("#10am input").val(localStorage.getItem("10am"));
    $("#11am input").val(localStorage.getItem("11am"));
    $("#12am input").val(localStorage.getItem("12am"));
    $("#1pm input").val(localStorage.getItem("1pm"));
    $("#2pm input").val(localStorage.getItem("2pm"));
    $("#3pm input").val(localStorage.getItem("3pm"));
    $("#4pm input").val(localStorage.getItem("4pm"));
    $("#5pm input").val(localStorage.getItem("5pm"));




    function backgroundColor() {

        currentTime = parseInt(currentTime)
        console.log("currentTime: ", currentTime);
        console.log("hour: ", hour);
        var targetTime = $(`#${hour}${amPm} input`);
        if (currentTime === hour) {
            targetTime.removeClass('bg-secondary');
            targetTime.addClass('bg-danger');
        } else if (currentTime < hour) {

            targetTime.addClass('bg-secondary');
        } else if (currentTime > hour) {
            targetTime.removeClass("bg-secondary")
                .addClass("bg-primary");

        }
    }

    function timeSlots(i) {
        if (i <= 4) {
            hour = i + 8;
            amPm = "am"
        } else {
            hour = i - 4;
            amPm = "pm"
        }
    }



    $(".save").click(function(event) {
        event.preventDefault();
        var value = $(this).siblings("input").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, value);

    });
});