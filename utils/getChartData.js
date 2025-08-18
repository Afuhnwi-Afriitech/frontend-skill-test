function getChartData(apiResponse, targetName) {
  const patient = apiResponse.find(p => p.name === targetName);
  if (!patient) {
    return { systolic: [], diastolic: [], labels: [] }; 
  }

  const history = patient.diagnosis_history;
  const monthShort = {
    January: 'Jan',
    February: 'Feb',
    March: 'Mar',
    April: 'Apr',
    May: 'May',
    June: 'Jun',
    July: 'Jul',
    August: 'Aug',
    September: 'Sep',
    October: 'Oct',
    November: 'Nov',
    December: 'Dec'
  };

  const last6 = history.slice(0, 6);

  const labels = last6.map(h => `${monthShort[h.month]}, ${h.year}`).reverse();
  const systolic = last6.map(h => h.blood_pressure.systolic.value).reverse();
  const diastolic = last6.map(h => h.blood_pressure.diastolic.value).reverse();

  return { labels, systolic, diastolic };
}


module.exports = getChartData;
