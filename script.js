function calculateSingleTip() {

    const amount = parseFloat(document.getElementById("tipAmount").value);
    const percentage = parseFloat(document.getElementById("percentageAmount").value);

    if (!isNaN(amount) && !isNaN(percentage) && amount >= 0 && percentage >= 0 && percentage <= 100) {
        const tip = (amount * (percentage / 100)).toFixed(2);
        document.getElementById("singleResult").innerHTML = `Tip Amount : $${tip}`;
    }
    else {
        document.getElementById("singleResult").innerHTML = "Please enter valid value(s)";
    }
}

function calculateSplitTip(){
    
    const amount = parseFloat(document.getElementById("tipAmount2").value);
    const percentage = parseFloat(document.getElementById("percentageAmount2").value);
    const people = parseFloat(document.getElementById("numberPeople").value);

    if (!isNaN(amount) && !isNaN(percentage) && !isNaN(people) && amount >= 0 && percentage >= 0 && percentage <= 100 && people >= 1) {
        const split = (amount / people).toFixed(2);
        const tip = (split * (percentage / 100)).toFixed(2);
        document.getElementById("splitResult").innerHTML = `Tip Amount : $${tip} per person`;
    }
    else {
        document.getElementById("splitResult").innerHTML = "Please enter valid value(s)";
    }
}

// event listeners 
document.getElementById("singleButton").onclick = calculateSingleTip;
document.getElementById("splitButton").onclick = calculateSplitTip;


