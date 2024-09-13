function calculateAgeCurrent() {
    // const birthDate = new Date(document.getElementById('birthDateCurrent').value);

    const birthDate = document.getElementById('years').value;
    const currentDate = new Date();
    let year = currentDate.getFullYear();


    const birthmonth = document.getElementById('months').value;
    const currentmonth = new Date();
    let month = currentmonth.getMonth();


    const birthday = document.getElementById('days').value;
    const currentday = new Date();
    let day = currentday.getDay();


    // if (!birthDate || birthDate > currentDate) {
    //     document.getElementById('currentAgeResult').innerText = "Please select a valid birth date.";
    //     return;
    // }

    // const age = currentDate.getFullYear() - birthDate.getFullYear();
    // const monthDifference = currentDate.getMonth() - birthDate.getMonth();
    // const dayDifference = currentDate.getDate() - birthDate.getDate();

    // if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    //     document.getElementById('currentAgeResult').innerText = `You are ${age - 1} years old.`;
    // } else {
    //     document.getElementById('currentAgeResult').innerText = `You are ${age} years old.`;
    //
    let age = year - birthDate;
    document.getElementById('currentAgeResult').innerText =`Congratulations Year  ${age}` ;

    let agemonth = month - birthmonth;
    document.getElementById('Currentmonth').innerText = `Month  ${agemonth}`;

    let ageday = day - birthday;
    document.getElementById('currentday').innerText =    `Days ${ageday}`;



    

}

function calculateAgeGiven() {
    const birthmonth1 = document.getElementById('months1').value;
    const birthdays1 = document.getElementById('days1').value;
    const birthyear1 = document.getElementById('years1').value;


    const birthmonth2 = document.getElementById('months2').value;
    const birthdays2 = document.getElementById('days2').value;
    const birthyear2 = document.getElementById('years2').value;

    let finalmonth = birthmonth2 - birthmonth1;
    document.getElementById('givenAgeResultmonth').innerText = ` Congratulations Month ${finalmonth}`;

    let finalyear = birthyear2 - birthyear1;
    document.getElementById('givenAgeResultyear').innerText = `Year ${finalyear}`;


    let finalday = birthdays2 - birthdays1;
    document.getElementById('givenAgeResultdays').innerText = `Days ${finalday}`;



    // const birthDate = new Date(document.getElementById('birthDateFrom').value);
    // const toDate = new Date(document.getElementById('toDate').value);

    // if (!birthDate || !toDate || birthDate > toDate) {
    //     document.getElementById('givenAgeResult').innerText = "Please select valid dates.";
    //     return;
    // }

    // const age = toDate.getFullYear() - birthDate.getFullYear();
    // const monthDifference = toDate.getMonth() - birthDate.getMonth();
    // const dayDifference = toDate.getDate() - birthDate.getDate();

    // if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    //     document.getElementById('givenAgeResult').innerText = `Your age on the given date is ${age - 1} years.`;
    // } else {
    //     document.getElementById('givenAgeResult').innerText = `Your age on the given date is ${age} years.`;
    // }
}
