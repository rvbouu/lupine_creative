const router = require('express').Router();
const productsJSON = require('../../seeds/products_stripe.json')
require("dotenv").config()
const stripe = require('stripe')("sk_test_51PNzsBK3bqf7nNHby1JMfddkNdAYX8wb8c1YiGtdg4L8GRVpYerUtdne3YKZLdm6RQAK2uu5FzC2ZVJdww9uqkil00ft0cryif");

const YOUR_DOMAIN = 'http://localhost:5173';

router.post('/create-checkout-session', async (req, res) => {
  console.log("ok")
  try {
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: req.body,
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
      billing_address_collection: 'required',
      shipping_address_collection: {
        allowed_countries: ['US']
      }
    });
    console.log(session.client_secret)
    res.send({ clientSecret: session.client_secret });
  } catch(err){
    console.log(err)
  }
});

router.get('/session-status', async (req, res) => {
  console.log("stripe.js: ", req.query)
  const session = await stripe.checkout.sessions.retrieve(req.query.session_id);

  res.send({
    status: session.status,
    customer_email: session.customer_details.email
  });
});
// {
//   "id": "prod_NWjs8kKbJWmuuc",
//   "object": "product",
//   "active": true,
//   "created": 1678833149,
//   "default_price": null,
//   "description": null,
//   "images": [],
//   "features": [],
//   "livemode": false,
//   "metadata": {},
//   "name": "Gold Plan",
//   "package_dimensions": null,
//   "shippable": null,
//   "statement_descriptor": null,
//   "tax_code": null,
//   "unit_label": null,
//   "updated": 1678833149,
//   "url": null
// }
router.post('/product', async (req, res) => {
  try {
    for (let i = 0; i < productsJSON.length; i++) {
      stripe.products.create({
        name: productsJSON[i].name,
        active: true,
        description: productsJSON[i].description,
        default_price_data: {
          unit_amount: productsJSON[i].price,
          currency: 'usd'
        },
        expand: ['default_price'],
      })
    };

    // console.log(product)
    res.status(200).json({ status: 'success' })
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ status: 'error', message: err.message })
  }
})

router.put('/product/:id', async (req, res) => {
  try {
    const product = await stripe.products.update(req.params.id, req.body);

    console.log(product)
    res.status(200).json(product)
  }
  catch (err) {
    console.log(err)
    res.status(500).json({ status: 'error', message: err.message })
  }
})


// Test key is at the top of the page.
// Customer Session
router.post('/', async (req, res) => {
  try {
    const customerSession = await stripe.customerSessions.create({
      customer: 'cus_PO34b57IOUb83c',
      components: {
        pricing_table: {
          // prevents the customer from seeing the priceing table from the product.
          enabled: false,
        },
      },
    });
    res.status(200).json(customerSession)
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'error', message: err.message })
  }
})



module.exports = router;