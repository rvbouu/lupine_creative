const router = require('express').Router();
const stripe = require('stripe')('sk_test_51PO0m9P1dwZ6prVFtWZxcVJ8nU8Gm1qiI2q95qGZxf6GbYG8R2IEkRCOhf2l2VYdMQZi3xOgDDv0XQ9Ixm0Vuo0D00LgOJyMp4');

const YOUR_DOMAIN = 'http://localhost:3001';

router.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: "price_1PO6puP1dwZ6prVFI0FHJqGL",
        quantity: 1,
      },
    ],
    mode: 'payment',
    return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
  });
  console.log(session.client_secret)
  res.send({clientSecret: session.client_secret});
});

router.get('/session-status', async (req, res) => {
  console.log("stripe.js: ",req.query)
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});

module.exports = router;