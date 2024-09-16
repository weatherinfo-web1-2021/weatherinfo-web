var ctx = document.getElementById('covid-chart');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['09/02', '09/03', '09/04', '09/05', '09/06', '09/07', '09/08'],
    datasets: [
      {
        label: '코로나 일일 확진자(단위:명)',
        data: [1708, 1803, 1490, 1375, 1697, 2048, 2049],
        backgroundColor: [
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
          'rgba(244, 67, 54,0.6)',
        ],
        borderColor: [
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
          'rgba(244, 67, 54, 1)',
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: false,
    tooltips: {
      enabled: false,
    },
    hover: {
      animationDuration: 0,
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.font = Chart.helpers.fontString(
          Chart.defaults.global.defaultFontSize,
          Chart.defaults.global.defaultFontStyle,
          Chart.defaults.global.defaultFontFamily
        );
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'bottom';

        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);
          });
        });
      },
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
          },
        },
      ],
    },
  },
});
