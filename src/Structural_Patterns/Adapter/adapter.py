when working with different payment gateway APIs, Payment gateways such as PayPal, Stripe, and Square have different APIs and data structures for processing payments. In this case, we can use the Adapter pattern to make all payment gateways work together seamlessly.

Here's an example code:


# PayPal payment gateway adapter
class PayPalAdapter:
    def __init__(self, paypal):
        self.paypal = paypal

    def process_payment(self, amount):
        # PayPal specific code to process payment
        self.paypal.process(amount)

# Stripe payment gateway adapter
class StripeAdapter:
    def __init__(self, stripe):
        self.stripe = stripe

    def process_payment(self, amount):
        # Stripe specific code to process payment
        self.stripe.charge(amount)

# Square payment gateway adapter
class SquareAdapter:
    def __init__(self, square):
        self.square = square

    def process_payment(self, amount):
        # Square specific code to process payment
        self.square.charge(amount)

# Adapter for payment gateways
class PaymentGatewayAdapter:
    def __init__(self, payment_gateway):
        self.payment_gateway = payment_gateway

    def process_payment(self, amount):
        self.payment_gateway.process_payment(amount)

# Usage
paypal_adapter = PaymentGatewayAdapter(PayPalAdapter(PayPal()))
stripe_adapter = PaymentGatewayAdapter(StripeAdapter(Stripe()))
square_adapter = PaymentGatewayAdapter(SquareAdapter(Square()))

paypal_adapter.process_payment(100)
stripe_adapter.process_payment(100)
square_adapter.process_payment(100)


# In this example, we have three payment gateways: PayPal, Stripe, and Square. We also have three Adapters: PayPalAdapter, StripeAdapter, and SquareAdapter. All Adapters implement a common interface that our application can use to process payments.

# When our application wants to process a payment using PayPal, it creates a new instance of the PayPalAdapter and passes it to the PaymentGatewayAdapter. The PaymentGatewayAdapter then calls the `process_payment()` method on the PayPalAdapter instance, which internally calls the `process()` method on the PayPal instance and processes the payment. Similarly, when our application wants to process a payment using Stripe or Square, it creates a new instance of the StripeAdapter or SquareAdapter and passes it to the PaymentGatewayAdapter.

# By using the Adapter pattern, we can make all payment gateways work together seamlessly without having to change our application code every time we switch to a different payment gateway. We can simply create a new Adapter for the new payment gateway that implements the common interface and our application can use it without any changes.
