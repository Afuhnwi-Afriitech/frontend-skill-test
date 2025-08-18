document.addEventListener("DOMContentLoaded", () => {
    console.log(window.chartData.systolic);
    const ctx = document.getElementById('bpChart').getContext('2d');
    const bpChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: window.chartData.labels,
            datasets: [{
                    label: 'Systolic',
                    data: window.chartData.systolic,
                    borderColor: '#d37ce7',
                    backgroundColor: '#d37ce7',
                    fill: false,
                    tension: 0.4,
                    pointRadius: 5
                },
                {
                    label: 'Diastolic',
                    data: window.chartData.diastolic,
                    borderColor: '#8571f2',
                    backgroundColor: '#8571f2',
                    fill: false,
                    tension: 0.4,
                    pointRadius: 5
                }
            ]
        },
        options: {
            responsive: true,
            layout: {
                padding: {
                    bottom: 10,
                    top: 20
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    min: 60,
                    max: 180
                },
                x: {
                    ticks: {
                        maxRotation: 0,
                        minRotation: 0
                    }
                }
            }
        }
    });
});