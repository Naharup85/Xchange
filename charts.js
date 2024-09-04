document.addEventListener('DOMContentLoaded', function() {
    // Initialize charts
    const bitcoinChart = document.getElementById('bitcoinChart').getContext('2d');
    const ethereumChart = document.getElementById('ethereumChart').getContext('2d');

    function fetchChartData() {
        fetch('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1')
            .then(response => response.json())
            .then(data => {
                const timestamps = data.prices.map(price => new Date(price[0]).toLocaleTimeString());
                const prices = data.prices.map(price => price[1]);

                new Chart(bitcoinChart, {
                    type: 'line',
                    data: {
                        labels: timestamps,
                        datasets: [{
                            label: 'Bitcoin Price (USD)',
                            data: prices,
                            borderColor: '#ff9900',
                            backgroundColor: 'rgba(255, 153, 0, 0.2)',
                            borderWidth: 1,
                            fill: true
                        }]
                    },
                    options: {
                        scales: {
                            x: { 
                                beginAtZero: true,
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10
                                }
                            },
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            });

        fetch('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=1')
            .then(response => response.json())
            .then(data => {
                const timestamps = data.prices.map(price => new Date(price[0]).toLocaleTimeString());
                const prices = data.prices.map(price => price[1]);

                new Chart(ethereumChart, {
                    type: 'line',
                    data: {
                        labels: timestamps,
                        datasets: [{
                            label: 'Ethereum Price (USD)',
                            data: prices,
                            borderColor: '#3cba9f',
                            backgroundColor: 'rgba(60, 186, 159, 0.2)',
                            borderWidth: 1,
                            fill: true
                        }]
                    },
                    options: {
                        scales: {
                            x: {
                                beginAtZero: true,
                                ticks: {
                                    autoSkip: true,
                                    maxTicksLimit: 10
                                }
                            },
                            y: {
                                beginAtZero: false
                            }
                        }
                    }
                });
            });
    }

    fetchChartData();
});
