$(document).ready(() => {
    const currentDayDisplay = $("#currentDay");
    const timeblocks = $("#timeblocks");

    // get dates using momentjs library

    const date = moment().format('dddd, Do MMMM YYYY');

    const hour = moment().format('k');

    // working hours array 

    const workingHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];

    // display todays date

    currentDayDisplay.text(date);

    // timeblock display components 

    const time = (hoursWorked) => {
        const timeDIsplayContainer = $('<div>');
        const paraEl = $('<p>');

        paraEl.text(`${hoursWorked}:00`);

        timeDIsplayContainer.append(paraEl);

        timeDIsplayContainer.addClass('col-2 d-flex justify-content-center align-items-center')

        return timeDIsplayContainer
    };

    const textField = (hoursWorked) => {
        const formEl = $('<form>');
        const textInputEl = $('<input>')
        const Submit = $('<button>');

        const inputId = `text-${hoursWorked}`
        textInputEl.attr('id', inputId)
        textInputEl.addClass('col-9');

        const storedValue = localStorage.getItem(`${hoursWorked}`);
        if(!storedValue) {
            textInputEl.attr('placeholder', '');
        } else {
            textInputEl.attr('placeholder', `${storedValue}`);
        }

        if(hour == hoursWorked) {
            textInputEl.addClass('present');
        }
        else if(hour > hoursWorked) {
            textInputEl.addClass('past');
        }
        else {
            textInputEl.addClass('future');
        }

        Submit.attr('type', 'submit');
        Submit.addClass('col-3 saveBtn');
        Submit.text('Save');

        formEl.addClass('col-10 row');
        formEl.append(textInputEl, Submit);

        // handle submit

        formEl.on("submit", (event) => {
            event.preventDefault();

            let myval = document.getElementById(inputId).value;
            
            localStorage.setItem(`${hoursWorked}`, myval);
        });

        return formEl
        
    }

    // display time blocks

    for(let i = 0; i < workingHours.length; i++) {
        const timeblocksContainer = $('<div>');

        timeblocksContainer.addClass('row');

        let times = time(workingHours[i]);

        timeblocksContainer.append(times, textField(workingHours[i]));

        timeblocks.append(timeblocksContainer);

        
    }
})

