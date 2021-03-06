﻿import { Stripe } from "stripe";
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

            await customerRepository.save(customer);

            let charge = await stripe.charges.create({
                amount: 10000,
                currency: "usd",
                customer: customer.id,
            });

            return await chargesCollection.save(charge);
        }
        catch (e) {
            throw new Error(e);
        }
    }
};