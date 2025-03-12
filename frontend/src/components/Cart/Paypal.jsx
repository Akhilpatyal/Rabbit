import {
  PayPalButtons ,
  PayPalScriptProvider,
} from "@paypal/react-paypal-js";

const Paypal = ( {amount,onSuccess,onError}) => {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AY65Nfxsntua4VwPyb-FACjZGWDH_rA73s8JSX1C_-1K0U7P5jm-9UW2_vQhzwmAAgqM51x7WxRMqmqP",
      }}
    >

<PayPalButtons  
    style={{layout:"vertical"}}
    createOrder={(data,actions)=>{
        return actions.order.create({
            purchase_units:[{amount:{value:amount}}]
        })
    }}
    onApprove={(data,actions)=>{
        return actions.order.capture().then(onSuccess);
    }}
    onError={onError}
/>

    </PayPalScriptProvider>
  );
};

export default Paypal;
