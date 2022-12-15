import React from "react";
import Alert from "react-bootstrap/Alert";

// const Card = () => {
//   return (
//     <div>
//       <h2>namaste javascript</h2>

function Card() {
  return (
    <>
      {[
        "primary",
        "secondary",
        "success",
        "danger",
        "warning",
        "info",
        "light",
        "dark",
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}

      <style type="text/css">
        {`
    .btn-flat {
      background-color: purple;
      color: white;
    }

    .btn-xxl {
      padding: 1rem 1.5rem;
      font-size: 1.5rem;
    }
    `}
      </style>
      
    </>
  );
}

// export default BasicExample;

//     </div>
//   )
// }

export default Card;
