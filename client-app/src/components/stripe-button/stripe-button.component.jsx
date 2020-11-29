import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HskpbISTRPOdD55WGbQkUmjT9BdFlfeK3nvnVtlum9RvOfv5L9IePXrByL0CQUNzjvVyO3utxCWtBi39rndVQPf00w1pJskd0";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Cloth Line"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/Cuz.svg"
      description={`Your toatl is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
