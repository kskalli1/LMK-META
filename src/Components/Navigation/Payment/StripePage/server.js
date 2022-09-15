// This is your test secret API key.
const stripe = require('stripe')('sk_test_51LWK5UJKpYlMfegIPgHsvnAKo9nXCfdn3GJFcxyqoaHH3NW0HmcQLlEs4JNBphStgmsw3VvFzMLwaVNIcoTzerLC00qG7Czgg8');
const express = require('express');
const app = express();
app.use(express.static('public'));

const YOUR_DOMAIN = 'https://lmk-meta.web.app/';

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: '{{PRICE_ID}}',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.redirect(303, session.url);
});

app.listen(4242, () => console.log('Running on port 4242'));