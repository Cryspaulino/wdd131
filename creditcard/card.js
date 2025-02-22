console.log("whats going on?")


function isCardNumberValid(number) {
    return number === '1234123412341234'
}
function displayError(msg) {
    document.querySelector('.errormessage').innerHTML = msg
}

function expirationDate(month, year) {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    let expYear = parseInt(year, 10);
    const expMonth = parseInt(month, 10);
    if (expYear < 100) {
        expYear += 2000;
    }

    return expYear > currentYear || (expYear === currentYear && expMonth >= currentMonth);
}

function submitHandler(event) {
    event.preventDefault()

    let errormessage = ''
    const cardNumberValue = this["card-number"].value.trim();
    const expMonthValue = this.expirationMonth.value.trim();
    const expYearValue = this.expirationYear.value.trim();

    displayError('')

    if (isNaN(Number(cardNumberValue))) {
        errormessage += 'Card number is not a valid number\n'
    } else if (!isCardNumberValid(cardNumberValue)) {
        errormessage += 'Card number is not a valid card number\n'
    }

    if (!expirationDate(expMonthValue, expYearValue)) {
        errormessage += (errormessage ? '\n' : '') + 'Expiration date must be in the future.';
    }

    if (errormessage !== '') {
        displayError(errormessage)
        return false
    }

    alert('Payment submitted successfully!');
    return true
}

document.querySelector('.ccform').addEventListener('submit', submitHandler)