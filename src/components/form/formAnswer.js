import React, {Component} from 'react';
import img from '../../images/Group.png';
import reply from '../../images/reply.png';

class FormAnswer extends Component {
  
  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="form-answer-wrapper">
            <div className="form-answer-title">
            Thank you so much <br/> We contact you as soon as posible
            </div>

            <img src={img} alt="breakfast"/>

            <div className="form-answer-button-wrap">
              <button 
                onClick={this.props.onToggleContent}
                className="form-answer-button">
                Another ? <img src={reply} alt="reply"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FormAnswer