function calculateFinalGrade() {
    const currentGrade = parseFloat(document.getElementById("currentGrade").value);
    const examWeight = parseFloat(document.getElementById("examWeight").value);
    const desiredGrade = parseFloat(document.getElementById("desiredGrade").value);
    const neededGrade = ((desiredGrade - (currentGrade * (1 - examWeight / 100))) / (examWeight / 100)).toFixed(2);

    if (!isNaN(currentGrade) && !isNaN(examWeight) && !isNaN(desiredGrade) && examWeight > 0 && examWeight <= 100) {
        document.getElementById("gradeResult").innerHTML = `You need a ${neededGrade}% on the final exam to achieve your desired grade.`;
    } else {
        document.getElementById("gradeResult").innerHTML = "Please enter valid values.";
    }

    if (neededGrade > 100){
        document.getElementById("gradeMessage").innerHTML = "Unfortunately, it is impossible to achieve the desired grade:("
    }
    else if (neededGrade < 0){
        document.getElementById("gradeMessage").innerHTML = "You have already secured the desired grade:)"
    }
    else{
        document.getElementById("gradeMessage").innerHTML = "Good luck! You got this."
    }
}

document.getElementById("gradeButton").onclick = calculateFinalGrade;
