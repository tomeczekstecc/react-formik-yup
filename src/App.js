import React from 'react';
import AddDonation from './components/AddDonation'
import {
  Formik,
  FormikActions,
  FormikProps,
  Form,
  Field,
  ErrorMessage
} from "formik";
import * as Yup from "yup";
import './App.css';

function App() {
  return (
    <div className="App">
<AddDonation/>
    </div>
  );
}

export default App;
