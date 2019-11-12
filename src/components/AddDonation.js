import React, { Component } from 'react'
import FormInput from './FormInput'
export class AddDonation extends Component {


  render() {
    return (
      <div>
<section>
  <h2>Add donation</h2>
  <FormInput header="YourName"/>
  <FormInput header="YourPladge"/>
  <button className='center'>Donate</button>
</section>
      </div>
    )
  }
}

export default AddDonation
