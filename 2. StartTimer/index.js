function startTimer(numbOfSec) {
    if (numbOfSec && typeof numbOfSec === 'number' && numbOfSec > 0) {
        const runTime = new Date();
        let runSeconds = runTime.getSeconds();
        for (let i = 0; i < numbOfSec; i++) {
            for (let j = 0; j < Infinity; j++) {
                const currTime = new Date();
                const currSeconds = currTime.getSeconds();
                if (currSeconds - runSeconds != 0) {
                    const hours = currTime.getHours() >= 10 ? currTime.getHours() : '0' + currTime.getHours();
                    const minutes = currTime.getMinutes() >= 10 ? currTime.getMinutes() : '0' + currTime.getMinutes();
                    const seconds = currTime.getSeconds() >= 10 ? currTime.getSeconds() : '0' + currTime.getSeconds();
                    console.log(`Time:  ${hours} : ${minutes} : ${seconds}`);
                    runSeconds = currSeconds;
                    break;
                }
            }
        }
        console.log(`Timer stopped after ${numbOfSec} seconds.`);
    } else {
        console.log('Oops... Something went wrong.');
    }
}
startTimer(10);