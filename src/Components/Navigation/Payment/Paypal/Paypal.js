import React from 'react'

export default function Paypal() {
    paypal.Buttons({
        createOrder: (data, actions) => {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: '10.0'
                    }
                }]
            });
        },

        onApprove: (data, actions) => {
            return actions.order.capture().then(function (orderData) {
                console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                const transaction = orderData.purchase_units[0].payments.captures[0];
                console.log(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);

            });
        }
    }).render('#paypal-button-container');

    return (
        <div id="paypal-button-container">Paypal</div>
    )
}

