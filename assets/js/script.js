$(document).ready(() => {
    const currentDayDisplay = $("#currentDay");
    const timeblocks = $("#timeblocks");

    // get dates using momentjs library

    const date = moment().format('dddd, Do MMMM YYYY');

    // working hours array 

    const workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // display todays date

    currentDayDisplay.text(date);

    // timeblock display components 

    const time = (hoursWorked) => {
        const timeDIsplayContainer = $('<div>');
        const paraEl = $('<p>');

        paraEl.text(hoursWorked);

        timeDIsplayContainer.append(paraEl);

        timeDIsplayContainer.addClass('col-2 d-flex justify-content-center align-items-center')

        return timeDIsplayContainer
    };

    const textField = () => {
        const formEl = $('<form>');
        const textInputEl = $('<input>')
        const Submit = $('<button>');

        textInputEl.attr('id', 'text-input');
        textInputEl.addClass('col-9');

        Submit.attr('type', 'submit');
        Submit.addClass('col-3');
        Submit.text('Save');

        formEl.addClass('col-10 row');
        formEl.append(textInputEl, Submit);

        return formEl
        
    }

    // display time blocks

    for(let i = 0; i < workingHours.length; i++) {
        const timeblocksContainer = $('<div>');

        timeblocksContainer.addClass('row');

        let times = time(workingHours[i]);

        timeblocksContainer.append(times, textField());

        timeblocks.append(timeblocksContainer);

        
    }
})