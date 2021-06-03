import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price}) =>
{   const priceForStrpie  = price * 100;
    const publishableKey = 'pk_test_51IyE5BB2b1hwydIYkYFj8uPZ0bQaYEBqk0sdfSlF0gNEkAAYyzxzVjJOg34Yy5YXvmOFtU8Bbnk2EdRM0kiKRckt00CJNfMm5x';
    
    const onToken = token => {
        console.log(token);
        alert('Payment Successful!');
    }
    return (<StripeCheckout
        label = 'Pay Now'
        name = 'CRWN Clothing Ltd.'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/CUz.svg'
        description = {`Your total is $${price}`}
        amount = {priceForStrpie}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
    />);
};

export default StripeCheckoutButton;