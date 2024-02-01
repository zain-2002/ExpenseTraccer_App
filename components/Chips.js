'use client'
import { useChipsContext } from "@/context/ChipsContext";
import { useState ,useContext} from "react";


const Chips = () => {
    const {type, setChipsType} = useChipsContext()

  return (
    <div className="flex justify-center gap-4 p-6">

    <button className={`${type === 'Income'? 'bg-lime-600 text-white' : 'bg-white text-black'}  md:text-[36px] sm:text-[26px] font-semibold p-2 px-6 rounded-full border-4 shadow-md `} onClick={()=>setChipsType('Income')}>Income</button>
    <button className={`${type === 'Expense'? 'bg-red-600 text-white' : 'bg-white text-black'}  md:text-[36px] sm:text-[26px] font-semibold p-2 px-6 rounded-full border-4 shadow-md `} onClick={()=>setChipsType('Expense')}>Expense</button>


    </div>
  )
}

export default Chips