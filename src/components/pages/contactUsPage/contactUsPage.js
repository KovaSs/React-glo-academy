import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';

class ContactUsPage extends Component {

  render() {
    return (
      <>
        <Header header='Contact us'/>
          <section className="shop">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-4">
                  <div className="title">Tell us about your tastes</div>
                  <img className="beanslogo" src={beansLogoDark} alt="Beans logo" />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-lg-7">

                </div>
              </div>
            </div>
          </section>
        <Footer/>
      </>
    )
  }
}


export default ContactUsPage