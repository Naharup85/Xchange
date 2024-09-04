document.addEventListener('DOMContentLoaded', function () {
    // Order book data (this would be fetched via WebSocket in a real-world app)
    const orderBookData = [
        { price: 38000, amount: 0.5 },
        { price: 37900, amount: 1.0 },
        { price: 37800, amount: 0.75 },
        { price: 37700, amount: 1.25 },
        { price: 37600, amount: 0.4 },
        { price: 37500, amount: 2.0 },
    ];

    // Populate order book
    const orderBookEntries = document.getElementById('order-book-entries');
    orderBookData.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.price.toFixed(2)}</td>
            <td>${order.amount.toFixed(4)}</td>
            <td>${(order.price * order.amount).toFixed(2)}</td>
        `;
        orderBookEntries.appendChild(row);
    });

    // Chart.js setup for Trading Chart
    const ctx = document.getElementById('tradingChart').getContext('2d');
    const tradingChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00'],
            datasets: [{
                label: 'BTC/USD',
                data: [37500, 37800, 37900, 38000, 37600, 37700],
                borderColor: 'rgba(54, 162, 235, 1)',
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

    // Handle order submission
    document.getElementById('order-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const orderType = document.getElementById('order-type').value;
        const orderAmount = parseFloat(document.getElementById('order-amount').value);
        const orderPrice = parseFloat(document.getElementById('order-price').value);

        if (isNaN(orderAmount) || isNaN(orderPrice) || orderAmount <= 0 || orderPrice <= 0) {
            alert('Please enter valid amount and price.');
            return;
        }

        alert(`${orderType === 'buy' ? 'Buying' : 'Selling'} ${orderAmount} BTC at $${orderPrice} each.`);

        // In a real-world application, you'd send this data to the server
        document.getElementById('order-form').reset();
    });
});
