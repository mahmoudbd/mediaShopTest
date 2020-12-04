const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const DOMAIN_NAME = 'http://localhost:3000/checkout';

module.exports = async (req, res) => {
    const { infos } = req.body.products;
    let names = '';
    let price = 0;
    await infos.forEach((item) => {
        names += `${item.name} x ${item.quantity}\n`;
        price +=
            parseInt(item.price.toString().replace('.', ''), 10) *
            item.quantity;
    });
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
            {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: names,
                        images: [
                            'https://previews.123rf.com/images/klavapuk/klavapuk1701/klavapuk170100019/69772471-shopping-cart-with-electronics-and-home-appliances.jpg',
                        ],
                    },
                    unit_amount: price,
                },
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/checkout_progress/successed',
        cancel_url: `${DOMAIN_NAME}?canceled=true`,
    });

    res.json({ id: session.id });
};
