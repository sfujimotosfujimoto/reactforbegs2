import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor(){
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // };
  goToStore(e) {
    e.preventDefault();
    const storeId = this.storeInput.value;
    console.log(`Going to ${storeId}`);
    this.context.router.transitionTo(`/store/${storeId}`);


    console.log(this.storeInput.value);

  }
  render() {
    return(
      <form className="store-selector" onSubmit={(e) => this.goToStore(e)} >
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name"
        defaultValue={getFunName()} ref={(input) => { this.storeInput = input }} />
        <button type="submit">Visit Store =></button>
      </form>
    )

  }
};

StorePicker.contextTypes = {
  router: React.PropTypes.object
}
export default StorePicker;
