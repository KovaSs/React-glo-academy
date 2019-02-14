import React from 'react';
import { Alert } from 'reactstrap';

const ErrorBlock = () => {
  return (
    <Alert color="danger" className="text-center w-100 mt-5">
      Ooooops, something goes wrong.
    </Alert>
  )
}


export default ErrorBlock