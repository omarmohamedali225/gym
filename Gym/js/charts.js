// chart1
const ctx1 = document.getElementById('myChart1');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['الأعضاء المستخدمين المعدات'],
      datasets: [{
        label: 'ساونا',
        data: [19],
        borderWidth: 1,
        backgroundColor:['#ff00005e'],
      },
      {
        label: 'لياقة',
        data: [10],
        borderWidth: 1,
        backgroundColor:['#0080005e'],
      },
      {
        label: 'كارديو',
        data: [5],
        borderWidth: 1,
        backgroundColor:['#7f00ff5e'],
      },
      {
        label: 'الكل',
        data: [20],
        borderWidth: 1,
        backgroundColor:['#ff920085'],
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
// chart2
// ff00005e
const ctx2 = document.getElementById('myChart2');

  new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['الارباح والتكاليف : توضيحي'],
      datasets: [{
        label: 'التكاليف',
        data: [800],
        borderWidth: 1,
        backgroundColor:['#ff00005e'],
      },
      {
        label: 'الارباح',
        data: [1000],
        borderWidth: 1,
        backgroundColor:['#0080005e'],
      },
      {
        label: 'الكل',
        data: [1800],
        borderWidth: 1,
        backgroundColor:['#ff920085']
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// chart3
const ctx3 = document.getElementById('myChart3');

  new Chart(ctx3, {
    type: 'polarArea',
    data: {
      labels: [
        'انثي',
        'ذكر'
      ],
      datasets: [{
        label: 'العدد الكلي',
        data: [10, 8],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

// chart4
const ctx4 = document.getElementById('myChart4');

  new Chart(ctx4, {
    type: 'polarArea',
    data: {
      labels: [
        'مدير',
        'مبيعات',
        'محاسب',
        'مساعد جيم',
        'مدرب'
      ],
      datasets: [{
        label: 'العدد الكلي',
        data: [1, 2,1,2,4],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });