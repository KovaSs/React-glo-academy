import React, {Component} from 'react';
import Header from '../../header';
import Footer from '../../footer';
import beansLogoDark from '../../../images/Beans_logo_dark.svg';
import {FormBase, FormAnswer} from '../../form';
import ErrorBlock from '../../error';

class ContactUsPage extends Component {

    state = {
      answer: false,
      error: false 
    }


  onToggleContent = () => {
    this.setState({
      answer: !this.state.answer
    })
  }

  render() {
    const {answer, error} = this.state;
    const content = error ? <ErrorBlock/> : !answer 
      ? <FormBase onToggleContent={this.onToggleContent}/> 
      : <FormAnswer onToggleContent={this.onToggleContent}/>;

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
                {content}
            </div>
          </section>
        <Footer/>
      </>
    )
  }
}


export default ContactUsPage