import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import { Alert } from 'reactstrap';

class NotFound extends Component {


  render() {
    return (
      <>
        <Header header='404 page not found'/>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 py-5">
            <Alert color="danger" className="text-center w-100 my-5">
              The page does not exist or is not accessible anymore.
            </Alert>
            </div>
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}


export default NotFound