// cycles

const orderNumberOfCars = (numberOfCars) => {
    for(let i = 1; i <= numberOfCars; i++){
        console.log(`car ${i} has been ordered`)
    }
 console.log('finished');
}
orderNumberOfCars(10);

//types of cycles: for, while, do...while

const manufactureCars = (availableParts) => {
    let i = 1;
    while (i <= availableParts) {
        console.log(`manufactured a car with number ${i}`);
        i++;
    };

    console.log("finished");
};
manufactureCars(10);

const writeATicket = (isSpeeding) => {
    const maxTicketCount = 10;
    let i = 1;
    do {
        if(i === maxTicketCount) {
            console.log("You're driver's license has been revoked");
        }
        console.log('Driver has received ticket for speeding')
        i++;
    } while (isSpeeding && maxTicketCount >= i);
};

//faktoriala paversti i ciklus su while arba do..while (BONUS) getFactorial parasyti su ciklais