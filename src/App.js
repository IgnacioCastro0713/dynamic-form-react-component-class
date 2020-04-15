import React, {Component, Fragment} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {

  state = {
    inputFields: [
      {firstName: '', lastName: ''}
    ]
  };

  addFields = () => {
    this.setState(prevState => ({
      inputFields: [...prevState.inputFields, {firstName: '', lastName: ''}]
    }));
  };

  removeFields = index => {
    this.setState(prevState => {
      let fields = [...prevState.inputFields];
      fields.splice(index, 1);
      return {inputFields: fields};
    })
  };

  inputChange = (idx, e) => {
    const newFields = this.state.inputFields.map((field, index) => {
      if (idx !== index) {
        return field
      }
      return {...field, [e.target.name]: e.target.value}
    });
    this.setState({inputFields: newFields});
  };

  submit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div className="container mt-5">
        <form onSubmit={this.submit}>
          <div className="form-row">
            {this.state.inputFields.map((inputField, index) => (
              <Fragment key={`${inputField}~${index}`}>
                <div className="form-group col-sm-6">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" className="form-control" id="firstName" name="firstName"
                         value={inputField.firstName}
                         onChange={event => this.inputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-4">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" className="form-control" id="lastName" name="lastName"
                         value={inputField.lastName}
                         onChange={event => this.inputChange(index, event)}
                  />
                </div>
                <div className="form-group col-sm-2">
                  <button className="btn btn-link" type="button"
                          onClick={() => this.removeFields(index)}>
                    -
                  </button>
                  <button className="btn btn-link" type="button"
                          onClick={() => this.addFields()}>
                    +
                  </button>
                </div>
              </Fragment>
            ))}
          </div>
          <div className="submit-button">
            <button className="btn btn-primary mr-2" type="submit">
              Save
            </button>
          </div>
          <br/>
          <pre>
          {JSON.stringify(this.state.inputFields, null, 2)}
        </pre>
        </form>
      </div>
    )
  }
}

export default App;
