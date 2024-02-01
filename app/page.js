import Chips from "@/components/Chips";
import DetailForm from "@/components/DetailForm";
import Stats from "@/components/Stats";
import TableComp from "@/components/TableComp";
import Image from "next/image";

export default function Home() {
  return (
  <div style={{marginBottom:'50px'}} >
  <h1 className="md:text-[42px] sm:text-[35px] text-[30px] font-bold text-center p-4 rounded-sm border-b-4 shadow-sm  ">Expense Management APP</h1>
 <Chips/>
 <DetailForm />
 <TableComp/>
 <Stats/>
 </div>
  );
}
