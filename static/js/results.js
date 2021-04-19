// function getData() {
//   return forecast_data, forecast_predictions;
// }
// console.log(forecast_data, forecast_predictions)
var data = [{
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "Yes",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}, {
  "Migraine": "No",
  "Dates": "2021-04-18",
  "Cloudcover": "62",
  "Humidity": "72",
  "Pressure": "1014",
  "FeelsLike": "44",
  "HeatIndex": "46",
  "MaxTemp": "54",
  "MinTemp": "38",
  "SunHours":"9.1",
  "UVIndex":"5",
  "TempDelta":"16",
  "BarChange":"0.003",
  "HeatChange":"0.022",
  "HumChange":"-0.014"
}]


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