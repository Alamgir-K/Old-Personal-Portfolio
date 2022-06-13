analogueRowOneStr = "IMYGOLOVEEASTER";
analogueRowTwoStr = "NAMETOAMJAVAEGG";
analogueRowThreeStr = "ATHEISSOFTWARER";
analogueRowFourStr = "UNIVERSITYAGILE";
analogueRowFiveStr = "ALAMGIROFPYTHON";
analogueRowSixStr = "TORONTOENGINEER";
analogueRowSevenStr = "TECHNOLOGYKHANC";
analogueStrList = [analogueRowOneStr, analogueRowTwoStr, analogueRowThreeStr, analogueRowFourStr, analogueRowFiveStr, analogueRowSixStr, analogueRowSevenStr];

function createAnalogueDisplay() {
    const analogueSection = document.querySelector('#analogue');
    const analogueContainer = document.createElement('div');
    analogueContainer.classList.add('container');
    let rowNum = 1;
    let columnNum = 1;

    for (row of analogueStrList) {
        const analogueRow = document.createElement('div');
        analogueRow.classList.add('row');
        const rowIdStr = `ar${rowNum}`
        analogueRow.id = rowIdStr;

        for (char of row) {
            const columnIdStr = `ac${columnNum}`
            const analogueColumn = document.createElement('div');
            // analogueColumn.style.height = '100px';
            analogueColumn.style.height = '5.5em';
            analogueColumn.classList.add('col', 'd-flex', 'justify-content-center', 'align-items-center');
            
            
            analogueColumn.id = columnIdStr;
            const letterHeading = document.createElement('span');
            letterHeading.classList.add('display-4', 'analogue-letter', 'justify-content-center','align-items-center');
            letterHeading.innerText = char;

            analogueColumn.appendChild(letterHeading);
            analogueRow.appendChild(analogueColumn);
            columnNum++;
        }
        
        analogueContainer.appendChild(analogueRow);
        rowNum++;
    }

    analogueSection.appendChild(analogueContainer);
}

function toggleDisplayOn(columns) {
    for (column of columns) {
        const columnChar = column.firstChild;
        columnChar.classList.replace('analogue-letter', 'analogue-letter-active');
    }
}

function toggleDisplayOff(columns) {
    for (column of columns) {
        const columnChar = column.firstChild;
        columnChar.classList.replace('analogue-letter-active', 'analogue-letter');
    }
}

function cycleAnalogueDisplay() {
    const cycleOne = document.querySelectorAll('#ac2, #ac3, #ac16, #ac17, #ac18, #ac19, #ac35, #ac36, #ac61, #ac62, #ac63, #ac64, #ac65, #ac66, #ac67, #ac101, #ac102, #ac103, #ac104');
    setTimeout(() => {
        toggleDisplayOn(cycleOne);
    }, 0);
    setTimeout(() => {
        toggleDisplayOff(cycleOne);
    }, 3000);
    const cycleTwo = document.querySelectorAll('#ac1, #ac4, #ac5, #ac20, #ac21, #ac32, #ac33, #ac34, #ac46, #ac47, #ac48, #ac49, #ac50, #ac51, #ac52, #ac53, #ac54, #ac55, #ac68, #ac69, #ac76, #ac77, #ac78, #ac79, #ac80, #ac81, #ac82');
    setTimeout(() => {
        toggleDisplayOn(cycleTwo);
    }, 3000);
    setTimeout(() => {
        toggleDisplayOff(cycleTwo);
    }, 6000);
    const cycleThree = document.querySelectorAll('#ac1, #ac22, #ac23, #ac31, #ac37, #ac38, #ac39, #ac40, #ac41, #ac42, #ac43, #ac44, #ac83, #ac84, #ac85, #ac86, #ac87, #ac88, #ac89, #ac90');
    setTimeout(() => {
        toggleDisplayOn(cycleThree);
    },6000);
    setTimeout(() => {
        toggleDisplayOff(cycleThree);
    }, 9000);
    const cycleFour = document.querySelectorAll('#ac1, #ac6, #ac7, #ac8, #ac9, #ac91, #ac92, #ac93, #ac94, #ac95, #ac96, #ac97, #ac98, #ac99, #ac100');
    setTimeout(() => {
        toggleDisplayOn(cycleFour);
    }, 9000);
    setTimeout(() => {
        toggleDisplayOff(cycleFour);
    }, 12000);
    
}

createAnalogueDisplay();
cycleAnalogueDisplay();
setInterval(() => {
    cycleAnalogueDisplay();
}, 12000);


