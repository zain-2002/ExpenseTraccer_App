'use client'
import { useChipsContext } from '@/context/ChipsContext';
import { useFormContext } from '@/context/FormContext';
import React from 'react'
import { useState ,useRef,useEffect} from 'react';

const DetailForm = ({valId,inputVal,txtAreaVal,readOnly,edited,closeModal}) => {
    const {formData, addFormData,editFormData} = useFormContext();
    const {type}=useChipsContext();
    const [inputValue, setInputValue] = useState(inputVal);
    const inputRef = useRef();
    const [textareaValue, setTextareaValue] = useState(txtAreaVal);
    useEffect(() => {
     
        setInputValue(inputVal);
        setTextareaValue(txtAreaVal);
     
    }, [inputVal, txtAreaVal]);
    const handleTextareaChange = (event) => {
      setTextareaValue(event.target.value);
    };
  
    const handleInputChange = () => {
      let newValue = parseInt(inputRef.current.value);
  
      if (newValue < 0 ) {
        setInputValue(0);
      } else {
        setInputValue(newValue);
      }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
   if (edited) {
    editFormData(valId,inputValue,textareaValue);
    closeModal();
   }
   else{
    const formDataVal = {
      id:formData.length +1,
      amount: inputValue,
      details: textareaValue,
      name:'user',
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026024d",
      email: "tony.reichert@example.com",
      type
    };

    addFormData(formDataVal);
    setInputValue('');
    setTextareaValue('');
   }
       
      
      };
  return (
<>

<div className="w-full max-w-sm mt-4 p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 mx-auto">
    <form className="space-y-6" action="#" onSubmit={handleSubmit}>
      {edited?(<h5 className="text-xl font-medium text-gray-900 dark:text-white">Edit the Details:</h5>): (<h5 className="text-xl font-medium text-gray-900 dark:text-white">{`${readOnly ? 'Read the Details' :'Fill the following form' }`}</h5>)}
        
        <div>
        <label htmlFor="number-input" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Enter the amount:</label>
    <input type="number" id="number-input" aria-describedby="helper-text-explanation" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 text-md" placeholder="0" required  value={inputValue}
      ref={inputRef}
      onChange={handleInputChange}
      readOnly={readOnly}/>
        </div>
        <div>
           
<label htmlFor="message" className="block mb-2 text-md font-medium text-gray-900 dark:text-white">Details:</label>
<textarea value={textareaValue} id="message" rows="4" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter the source/details here..." onChange={handleTextareaChange} readOnly={readOnly} required></textarea>

        </div>
 {!readOnly && (<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{`${edited ? 'Edit': 'Submit' }`}</button>)}
        
     
    </form>
</div>


</>
  )
}

export default DetailForm