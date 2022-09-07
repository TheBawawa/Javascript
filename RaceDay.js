let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false
let runnersAge = 20

if (runnersAge > 18 && registeredEarly === true) {
  raceNumber += 1000
  console.log(`Your race number is ${raceNumber} and your race time is 9:30 am.`)
} 
else if (runnersAge > 18 && registeredEarly === false){
  raceNumber += 1000
  console.log(`Your race number is ${raceNumber} and your race time is 11:00 am.`)
}
else if (runnersAge < 18){
  console.log(`Your race number is ${raceNumber} and your race time is 12:30 pm.`)
}
else {
  console.log('Please seek information at the registration desk.')
}
