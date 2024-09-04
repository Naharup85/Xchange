document.addEventListener('DOMContentLoaded', function () {
    // Portfolio data
    const portfolio = {
        BTC: { amount: 0.5, value: 25000 },
        ETH: { amount: 2.0, value: 6000 },
        LTC: { amount: 10.0, value: 1500 }
    };

    // Populate portfolio list
    const portfolioList = document.getElementById('portfolio-list');
    for (const [crypto, data] of Object.entries(portfolio)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${crypto}: ${data.amount} (Value: $${data.value})`;
        portfolioList.appendChild(listItem);
    }

    // Chart.js setup for Market Data
    const ctx = document.getElementById('marketChart').getContext('2d');
    const marketChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            datasets: [{
                label: 'Bitcoin (BTC)',
                data: [30000, 32000, 31000, 33000, 34000, 36000, 35000, 37000, 38000],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Ethereum (ETH)',
                data: [2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
                fill: false
            }, {
                label: 'Litecoin (LTC)',
                data: [150, 160, 155, 165, 170, 175, 180, 190, 200],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: false
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });

    // Buy/Sell functionality
    document.getElementById('buy-btn').addEventListener('click', function () {
        handleTrade('buy');
    });

    document.getElementById('sell-btn').addEventListener('click', function () {
        handleTrade('sell');
    });

    function handleTrade(type) {
        const crypto = document.getElementById('crypto-select').value;
        const amount = parseFloat(document.getElementById('trade-amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        if (type === 'buy') {
            portfolio[crypto].amount += amount;
        } else if (type === 'sell') {
            if (portfolio[crypto].amount >= amount) {
                portfolio[crypto].amount -= amount;
            } else {
                alert(`Insufficient ${crypto} balance.`);
                return;
            }
        }

        // Update portfolio display
        portfolioList.innerHTML = '';
        for (const [crypto, data] of Object.entries(portfolio)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${crypto}: ${data.amount} (Value: $${data.value})`;
            portfolioList.appendChild(listItem);
        }

        alert(`${type === 'buy' ? 'Bought' : 'Sold'} ${amount} ${crypto}`);
        document.getElementById('trade-form').reset();
    }
});
