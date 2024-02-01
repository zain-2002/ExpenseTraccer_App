'use client'
import React from "react";
import { useCallback,useEffect,useState } from 'react';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, User, Chip, Tooltip, getKeyValue} from "@nextui-org/react";
import {EditIcon} from "./EditIcon";
import {DeleteIcon} from "./DeleteIcon";
import {EyeIcon} from "./EyeIcon";
import { useFormContext } from "@/context/FormContext";
import { Modal } from 'antd';
import DetailForm from "./DetailForm";

const statusColorMap = {
  Income: "success",
  Expense: "danger",
};
const columns = [
    {name: "USER", uid: "name"},
     {name: "AMOUNT", uid: "amount"},
     {name: "DETAIL", uid: "details"},
     {name: "TYPE", uid: "type"},
     {name: "ACTIONS", uid: "actions"},
   ];
   
 
export default function TableComp() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModelReadOnly, setModelReadOnly] = useState(false);
  const [isModelEdit, setModelEdit] = useState(false);
const [tempData,setTempData]=useState({})
const {formData,setFormData}=useFormContext()
const [tempDelData,setTempDelData]=useState({})

useEffect(() => {
  if (tempDelData.id) {
    setFormData((prevFormData) => {
      const updatedData = prevFormData.filter((item) => item.id !== tempDelData.id);
      return updatedData;
    });

    
  }
}, [tempDelData.id, setFormData]);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
const handleRead=(data)=>{
openModal();
setModelReadOnly(true);
setTempData(data)
}
const handleEdit=(data)=>{
  setModelEdit(true)
  openModal();
  setTempData(data)
  }
  

  const handleDelete = (id) => {
    setTempDelData({ id });
  };
  
   
  const renderCell = useCallback((formData, columnKey) => {
    const cellValue = formData[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{radius: "lg", src: formData.avatar}}
            description={formData.email}
            name={cellValue}
          >
            {formData.email}
          </User>
        );
      case "amount":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
          </div>
        );
        case "details":
            return (
              <div className="flex flex-col">
                <p className="text-bold text-sm capitalize">{cellValue}</p>
              </div>
            );
      case "type":
        return (
          <Chip className="capitalize" color={statusColorMap[formData.type]} size="md" variant="flat">
            {cellValue}
          </Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-4">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50"  onClick={()=>handleRead(formData)}> 
                <EyeIcon />
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50" onClick={()=>handleEdit(formData)}>
                <EditIcon />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={()=>handleDelete(formData.id)}>
                <DeleteIcon />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className="flex justify-center">

    
  <Table aria-label="Example table with custom cells" className="md:w-6/12 mt-4 text-xl">
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={formData}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
    <Modal
        title={`${isModelReadOnly ? 'You can read Details:' : 'You can edit Details:'}`}
        centered
        open={isModalOpen}
        footer={null} 
        onCancel={() => {setIsModalOpen(false)
          setModelReadOnly(false) 
          setModelEdit(false)}}
      >
    <DetailForm valId={tempData.id} inputVal={tempData.amount} txtAreaVal={tempData.details} readOnly={isModelReadOnly} edited={isModelEdit} closeModal={closeModal}/>
      </Modal>
    </div>
  );
}
