function getData() {
  return forecast_data, forecast_predictions;
}
var filteredData = forecast_predictions;
// d3.event.preventDefault();
// clearTable();
let table = d3.select('#forecast-table')
let tbody = table.select('tbody');
let trow;
let dateTime = filteredData.map(i => i.Dates);
let cloudcover = filteredData.map(i => i.Cloudcover);
let humidity = filteredData.map(i => i.Humidity);
let precipinch = filteredData.map(i => i.PrecipInch);
let pressure = filteredData.map(i => i.Pressure);
let feelslike = filteredData.map(i => i.FeelsLike);
let heatindex = filteredData.map(i => i.HeatIndex);
for (let i = 0; i < filteredData.length; i++){
    trow = tbody.append("tr");
    trow.append("td").text(dateTime[i]);
    trow.append("td").text(cloudcover[i]);
    trow.append("td").text(humidity[i]);
    trow.append("td").text(precipinch[i]);
    trow.append("td").text(pressure[i]);
    trow.append("td").text(feelslike[i]);
    trow.append("td").text(heatindex[i]);

}


// function clearTable() {
//   tbody.remove();
// }
