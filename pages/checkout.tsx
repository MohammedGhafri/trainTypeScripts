import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIP_PUBLISHABLE_KEY}`);
// const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');





export default function checkout() {

   
    const handleClick = async (event) => {
       
        const {sessionId}=await fetch('/api/checkout/session',{method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify({quantity:1})
        }).then(res=>res.json())

        // When the customer clicks on the button, redirect them to Checkout.
        console.log(process.env.PRICE_ID)
        const stripe = await stripePromise;
        const{error}=await stripe.redirectToCheckout({
            sessionId,
        });
    
     
    };
    return (
        <div>
            <h1>
                Checkout By Ghafri
            </h1>

            <button role="link" onClick={handleClick}>
                Checkout
            </button>
        </div>
    )
}