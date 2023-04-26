// when working with different payment gateways For instance, let's say you have an e-commerce application that needs to process payments using different payment gateways such as PayPal and Stripe. However, the two payment gateways have different APIs and data structures for processing payments. In this case, we can use the Adapter pattern to make both payment gateways work together seamlessly.



// PayPal payment gateway adapter
class PayPalAdapter {
  constructor(private paypal: any) {}

  processPayment(amount: number, currency: string, callback: Function) {
    const paymentData = {
      amount,
      currency,
      // PayPal specific data
    };
    this.paypal.processPayment(paymentData, (err: any, result: any) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  }
}

// Stripe payment gateway adapter
class StripeAdapter {
  constructor(private stripe: any) {}

  processPayment(amount: number, currency: string, callback: Function) {
    const paymentData = {
      amount,
      currency,
      // Stripe specific data
    };
    this.stripe.processPayment(paymentData, (err: any, result: any) => {
      if (err) {
        return callback(err);
      }
      return callback(null, result);
    });
  }
}

// Adapter for PayPal payment gateway
class PayPalPaymentAdapter {
  private paypalAdapter: PayPalAdapter;

  constructor() {
    const paypal = require('paypal');
    this.paypalAdapter = new PayPalAdapter(paypal);
  }

  processPayment(amount: number, currency: string, callback: Function) {
    this.paypalAdapter.processPayment(amount, currency, callback);
  }
}

// Adapter for Stripe payment gateway
class StripePaymentAdapter {
  private stripeAdapter: StripeAdapter;

  constructor() {
    const stripe = require('stripe');
    this.stripeAdapter = new StripeAdapter(stripe);
  }

  processPayment(amount: number, currency: string, callback: Function) {
    this.stripeAdapter.processPayment(amount, currency, callback);
  }
}

// Usage
const paypalAdapter = new PayPalPaymentAdapter();
const stripeAdapter = new StripePaymentAdapter();

paypalAdapter.processPayment(100, 'USD', (err: any, result: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});

stripeAdapter.processPayment(100, 'USD', (err: any, result: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
});


// In this example, we have two payment gateways: PayPal and Stripe. We also have two Adapters: PayPalPaymentAdapter and StripePaymentAdapter. Both Adapters implement a common interface that our application can use to process payments.

// When our application wants to process a payment using PayPal gateway, it calls `processPayment()` on the PayPalPaymentAdapter instance, which internally calls the `processPayment()` method on the PayPalAdapter instance and returns the result in a common format. Similarly, when our application wants to process a payment using Stripe gateway, it calls `processPayment()` on the StripePaymentAdapter instance, which internally calls the `processPayment()` method on the StripeAdapter instance and returns the result in a common format.

// By using the Adapter pattern, we can make both payment gateways work together seamlessly without having to change our application code every time we switch to a different payment gateway. We can simply create a new Adapter for the new payment gateway that implements the common interface and our application can use it without any changes.
