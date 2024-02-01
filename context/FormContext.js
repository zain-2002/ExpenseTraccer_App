'use client'
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState([]);
  const addFormData = (data) => {
    setFormData((prevData) => [...prevData, data]);
  };
  const editFormData=(id,inputVal,txtAreaVal)=>{
    const updatedData = formData.map((item) => {
      if (item.id === id) { 
        return {
          ...item,
          amount: inputVal, 
          details: txtAreaVal,
        };
      }
      return item;
    });
    setFormData(updatedData)
  }
 

  return (
    <FormContext.Provider value={{ formData, addFormData,editFormData,setFormData }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};
