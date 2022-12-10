$(document).ready(() => {
    const currentDayDisplay = $("#currentDay");
    const timeblocks = $("#timeblocks");
    const timeblocksContainer = $('<div>');

    // get dates using momentjs library

    const date = moment().format('dddd, Do MMMM YYYY');

    // working hours array 

    const workingHours = ['9AM', '10AM', '11AM', '12PM', '1PM', '3PM', '4PM', '5PM'];

    // display todays date

    currentDayDisplay.text(date);
})