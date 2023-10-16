const result = hoursPassed('3:00 AM', '9:00 AM');

const appDiv = document.getElementById('app');
appDiv.innerHTML = ` <p>Difference Between 3:00AM To 9:00PM is ${result}</p>`;
function hoursPassed(time1, time2) {
  const format = 'h:mm A';
  const t1 = new Date('2000-01-01 ' + time1);
  const t2 = new Date('2000-01-01 ' + time2);
  const hoursCalculation = Math.abs((t2 - t1) / 36e5);
  return `${hoursCalculation} hours`;
}
console.log(hoursPassed('3:00 AM', '9:00 AM'));
console.log(hoursPassed('2:00 PM', '4:00 PM'));
console.log(hoursPassed('1:00 AM', '3:00 PM'));
