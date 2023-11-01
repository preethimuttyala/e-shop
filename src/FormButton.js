

import React, { useEffect, useState } from "react";

import ModalButton from "./ModalButton";

 

export default function FormButton() {
   const [isModalOpen, setIsModalOpen] = useState(false);

 function openModal() {
 setIsModalOpen(true);
}

function closeClick(){
setIsModalOpen(false);
 }

useEffect(()=>{
 if(!isModalOpen)
 {
  let ele =document.getElementById('exampleModalToggle')
 if(ele)
ele.style.display='none'

}

},[isModalOpen])


  return (
     <div>
       <div>
        <button className="btn btn-danger"type="button"onClick={openModal}>Fill Form</button>
</div>
 {isModalOpen && <ModalButton   closeClick={closeClick} />}
</div>

  );

}

 