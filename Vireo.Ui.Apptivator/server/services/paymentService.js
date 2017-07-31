import { Stripe } from "stripe";
import customerRepository from "../data/collections/customersCollection";
import chargesCollection from "../data/collections/chargesCollection";

const stripe = new Stripe("sk_test_OHx1Z0IcyDglKviPsmA8ZEtQ");

export default {

    makePayment: async function (token, email) {

        try {
            let customer = await stripe.customers.create({
                email: email,
                source: token,
            });

            customerRepository.save(customer);

            let charge = await stripe.charges.create({
                amount: 100,
                currency: "usd",
                customer: customer.id,
            });

            chargesCollection.save(charge);
        }
        catch (e) {
            throw e;
        }
    }
};