function processLoanApplication(creditScore) {
    let eligibleCount = 0;
    let ineligibleCount = 0;
    let bestScore =0;
    let sum =0;

    for (let i=0; i < creditScores.length; i++){
        const score = creditScore[i];
        if(score>= 700){
            eligibleCount ++;
        }
        if (score < 600){
            rejectedCount ++;
        }
        sum += score;
    }
    let interestRate;

    if (sum % 2 === 0){
        interestRate = 5;
    }
    else{
interestRate = 10;
    }
    return `Eligible: ${eligibleCount}`

}