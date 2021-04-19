// function getData() {
//   return forecast_data, forecast_predictions;
// }
// console.log(forecast_data, forecast_predictions)
var data = [
{
  "Migraine": "No",
  "Dates": "2021-04-20",
  "Cloudcover": "32",
  "Humidity": "70",
  "Precipinch": "0",
  "Pressure": "1015",
  "FeelsLike": "53",
  "HeatIndex": "54",
  "MaxTemp": "64",
  "MinTemp": "46",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, 
{
  "Migraine": "Yes",
  "Dates": "2021-04-21",
  "Cloudcover": "46",
  "Humidity": "70",
  "Precipinch": "0.1",
  "Pressure": "1010",
  "FeelsLike": "43",
  "HeatIndex": "49",
  "MaxTemp": "59",
  "MinTemp": "36",
  "SunHours":"7.9",
  "UVIndex":"5",
  "TempDelta":"23",
  "BarChange":"0.005",
  "HeatChange":"-0.092",
  "HumChange":"0.0"
}, 
{
  "Migraine": "No",
  "Dates": "2021-04-22",
  "Cloudcover": "37",
  "Humidity": "56",
  "Precipinch": "0",
  "Pressure": "1016",
  "FeelsLike": "32",
  "HeatIndex": "39",
  "MaxTemp": "48",
  "MinTemp": "33",
  "SunHours":"10.4",
  "UVIndex":"5",
  "TempDelta":"15",
  "BarChange":"0.006",
  "HeatChange":"-0.204",
  "HumChange":"-0.014"
}, 
{
  "Migraine": "No",
  "Dates": "2021-04-23",
  "Cloudcover": "18",
  "Humidity": "61",
  "Precipinch": "0",
  "Pressure": "1020",
  "FeelsLike": "44",
  "HeatIndex": "49",
  "MaxTemp": "60",
  "MinTemp": "33",
  "SunHours":"11.6",
  "UVIndex":"1",
  "TempDelta":"27",
  "BarChange":"0.004",
  "HeatChange":"0.256",
  "HumChange":"0.089"
}, 
{
  "Migraine": "No",
  "Dates": "2021-04-24",
  "Cloudcover": "72",
  "Humidity": "73",
  "Precipinch": "0.1",
  "Pressure": "1014",
  "FeelsLike": "46",
  "HeatIndex": "49",
  "MaxTemp": "55",
  "MinTemp": "43",
  "SunHours":"6.7",
  "UVIndex":"2",
  "TempDelta":"12",
  "BarChange":"-0.005",
  "HeatChange":"0",
  "HumChange":"0.196"
}, 
{
  "Migraine": "Yes",
  "Dates": "2021-04-25",
  "Cloudcover": "27",
  "Humidity": "56",
  "Precipinch": "0",
  "Pressure": "1016",
  "FeelsLike": "31",
  "HeatIndex": "40",
  "MaxTemp": "48",
  "MinTemp": "33",
  "SunHours":"11.6",
  "UVIndex":"1",
  "TempDelta":"15",
  "BarChange":"0.002",
  "HeatChange":"-0.184",
  "HumChange":"-0.233"
}, 
// {
//   "Migraine": "No",
//   "Dates": "2021-04-18",
//   "Cloudcover": "62",
//   "Humidity": "72",
//   "Precipinch": "0",
//   "Pressure": "1014",
//   "FeelsLike": "44",
//   "HeatIndex": "46",
//   "MaxTemp": "54",
//   "MinTemp": "38",
//   "SunHours":"9.1",
//   "UVIndex":"5",
//   "TempDelta":"16",
//   "BarChange":"0.003",
//   "HeatChange":"0.022",
//   "HumChange":"-0.014"
// }
]


// var filteredData = forecast_predictions;
// // d3.event.preventDefault();
// // clearTable();
// let table = d3.select('#forecast-table')
// let tbody = table.select('tbody');
// let trow;
// let dateTime = filteredData.map(i => i.Dates);
// let cloudcover = filteredData.map(i => i.Cloudcover);
// let humidity = filteredData.map(i => i.Humidity);
// let precipinch = filteredData.map(i => i.PrecipInch);
// let pressure = filteredData.map(i => i.Pressure);
// let feelslike = filteredData.map(i => i.FeelsLike);
// let heatindex = filteredData.map(i => i.HeatIndex);
// for (let i = 0; i < filteredData.length; i++){
//     trow = tbody.append("tr");
//     trow.append("td").text(dateTime[i]);
//     trow.append("td").text(cloudcover[i]);
//     trow.append("td").text(humidity[i]);
//     trow.append("td").text(precipinch[i]);
//     trow.append("td").text(pressure[i]);
//     trow.append("td").text(feelslike[i]);
//     trow.append("td").text(heatindex[i]);

// }


// function clearTable() {
//   tbody.remove();
// }





d3.select("tbody")
  .selectAll("tr")
  .data(data)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.Migraine}</td>
            <td>${d.Dates}</td>
            <td>${d.Cloudcover}</td>
            <td>${d.Humidity}</td>
            <td>${d.Precipinch}</td>
            <td>${d.Pressure}</td>
            <td>${d.FeelsLike}</td>
            <td>${d.HeatIndex}</td>
            <td>${d.MaxTemp}</td>
            <td>${d.MinTemp}</td>
            <td>${d.SunHours}</td>
            <td>${d.UVIndex}</td>
            <td>${d.TempDelta}</td>
            <td>${d.BarChange}</td>
            <td>${d.HeatChange}</td>
            <td>${d.HumChange}</td>`;
  });

console.log(data)