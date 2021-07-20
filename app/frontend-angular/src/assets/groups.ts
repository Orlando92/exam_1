const groups = [

    {
        name: 'By Invoice',
        attributeName: 'invoice_number',
        columnsToShow: [
            'Invoice Number',
            'Purchase Date',
            'Distributor Name',
            'Distributor Address',
            'Customer Name',
            'Customer Address',
            'Total Items',
            'Purchased Qtys',
            'Purchased Weights',
            'Total Price',
        ]
    },
    {
        name: 'By Distributor',
        attributeName: 'distributor_name',
        columnsToShow: [
            'Distributor Name',
            'Distributor Address',
            'Total Items',
            'Purchased Qtys',
            'Purchased Weights',
            'Total Price',
        ]
    },
    {
        name: 'By Customer',
        attributeName: 'customer_name',
        columnsToShow: [
            'Customer Name',
            'Customer Address',
            'Total Items',
            'Purchased Qtys',
            'Purchased Weights',
            'Total Product',
        ]
    },
    {
        name: 'By Product',
        attributeName: 'product_code',
        columnsToShow: [
            'Distributor Name',
            'Distributor Address',
            'Manufacturer Name',
            'Manufacturer Address',
            'Product Code',
            'Product Description',
            'Total Items',
            'Purchased Qtys',
            'Purchased Weights',
            'Total Price',
        ]
    }
];

export default groups;