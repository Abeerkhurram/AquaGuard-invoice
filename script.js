// JavaScript for adding items dynamically (you can customize this as needed)
document.addEventListener('DOMContentLoaded', function () {
    const itemRows = document.getElementById('item-rows');

    // Sample data (replace with your data fetching logic)
    const items = [
        { no: 1, description: 'Product 1', quantity: 2, price: 100 },
        { no: 2, description: 'Product 2', quantity: 1, price: 250 },
    ];

    items.forEach(item => {
        const row = document.createElement('tr');

        const srNoCell = document.createElement('td');
        srNoCell.textContent = item.no;
        row.appendChild(srNoCell);

        const descriptionCell = document.createElement('td');
        descriptionCell.textContent = item.description;
        row.appendChild(descriptionCell);

        const quantityCell = document.createElement('td');
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        const priceCell = document.createElement('td');
        priceCell.textContent = item.price;
        row.appendChild(priceCell);

        itemRows.appendChild(row);
    });
});
