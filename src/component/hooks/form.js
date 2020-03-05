import {useState} from 'react';

const useForm = cb =>{
  const [values, setValues] = useState({});
  const handelSubmit = e =>{
    if (e) e.preventDefault();
    cb(values);
  };
  const handelChange = e =>{
    e.persist();
    setValues(values =>({...values, [e.target.name]:e.target.value}));
  };
  const handelInput = {
    onChange : e =>{
      e.persist();
      setValues(values => ({...values, [e.target.name]: e.target.value}));},
  };
  return [handelSubmit, handelChange, handelInput, values];
};

export default useForm;
