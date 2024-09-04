document.addEventListener('DOMContentLoaded', function () {
    // Example transaction history data
    const transactions = [
        { date: '2024-09-01', type: 'Deposit', crypto: 'BTC', amount: 0.5, status: 'Completed' },
        { date: '2024-09-02', type: 'Withdraw', crypto: 'ETH', amount: 1.0, status: 'Pending' },
        { date: '2024-09-03', type: 'Deposit', crypto: 'LTC', amount: 10.0, status: 'Completed' }
    ];

    // Populate transaction history
    const transactionList = document.getElementById('transaction-list');
    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.date}</td>
            <td>${transaction.type}</td>
            <td>${transaction.crypto}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.status}</td>
        `;
        transactionList.appendChild(row);
    });

    // Handle wallet actions (deposit/withdraw)
    document.getElementById('wallet-form').addEventListener('submit', function (event) {
        event.preventDefault();

        const action = document.getElementById('wallet-action').value;
        const crypto = document.getElementById('wallet-crypto').value;
        const amount = parseFloat(document.getElementById('wallet-amount').value);

        if (isNaN(amount) || amount <= 0) {
            alert('Please enter a valid amount.');
            return;
        }

        alert(`${action.charAt(0).toUpperCase() + action.slice(1)}ing ${amount} ${crypto}.`);

        // In a real-world application, this action would trigger a backend API request
        document.getElementById('wallet-form').reset();
    });
});
