//Temporal excercises

const getIdealSleepHours = () => {
    let idealHours = 10; 
    return idealHours * 7; 
};
// func for sleep debt 
const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours(); 
    let idealSleepHours = getIdealSleepHours();
    if (actualSleepHours == idealSleepHours){
        console.log('user got perfect amount of sleep.');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(`user got more sleep than needed by: ${actualSleepHours - idealSleepHours}`);
    } else if (actualSleepHours < idealSleepHours) {
        console.log(`user should get some rest, hours more sleep by: ${idealSleepHours - actualSleepHours}`);
    } else {
        return;
    }
    };

console.log(calculateSleepDebt());