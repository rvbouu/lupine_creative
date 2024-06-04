const router = require('express').Router();
const Stripe = require('stripe');
require('dotenv').config();

const stripe = Stripe(process.env.STRIP_KEY);

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}`,
    cancel_url: 'http://localhost:3001/cancel',
  });

  res.redirect(303, session.url);
});