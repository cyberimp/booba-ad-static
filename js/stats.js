/**
 * @typedef DataRow
 * @type {Object}
 * @property {string} date
 * @property {number} requests
 */

const ctx = document.getElementById('myChart');
fetch('https://hentai.tiddies.pics/dateChart.json')
.then(res => res.json())
/**
 * @param {Array<DataRow>} data
 */
.then(data => {
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(row => row.date),
      datasets: [{
        label: 'horny requests',
        data: data.map(row => row.requests),
        borderWidth: 1,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)'

      }]
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
});
