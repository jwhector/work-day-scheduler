const timeBlock = $(".time-block");
var savedTimes = {}

function initialize() {
    setInterval(() => $("#currentDay").text(moment().format("LLLL")),1000);
    const storage = JSON.parse(localStorage.getItem("savedTimes"));
    if (storage) savedTimes = storage;
    timeBlock.each(function() {
        if (moment().format("H") > $(this).data("hour")) $(this).children("textarea").addClass("past");
        else if (moment().format("H") == $(this).data("hour")) $(this).children("textarea").addClass("present");
        else $(this).children("textarea").addClass("future");
        ($(this).children("textarea").text(savedTimes[$(this).data("hour")]));
    });
}

initialize();

$(".saveBtn").click(function(){
    savedTimes[$(this).parent().data("hour")] = $(this).siblings("textarea").val();
    localStorage.setItem("savedTimes", JSON.stringify(savedTimes));
});