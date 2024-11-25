function calculateFinalGrade() {
    const currentGrade = parseFloat(document.getElementById("currentGrade").value);
    const examWeight = parseFloat(document.getElementById("examWeight").value);
    const desiredGrade = parseFloat(document.getElementById("desiredGrade").value);

    if (!isNaN(currentGrade) && !isNaN(examWeight) && !isNaN(desiredGrade) && examWeight > 0 && examWeight <= 100) {
        const neededGrade = ((desiredGrade - (currentGrade * (1 - examWeight / 100))) / (examWeight / 100)).toFixed(2);
        document.getElementById("gradeResult").innerHTML = `You need a ${neededGrade}% on the final exam to achieve your desired grade.`;
    } else {
        document.getElementById("gradeResult").innerHTML = "Please enter valid values.";
    }
}

document.getElementById("gradeButton").onclick = calculateFinalGrade;
