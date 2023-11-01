import React, { useState } from "react";

import { useEffect } from "react";

 export default function ModalButton(props) {
 const [formData, setFormData] = useState({name: "", email: "",
});

 function handleInputChange(e) {
 const { name, value } = e.target;
 setFormData({ ...formData,[name]: value,});
}
function onSubmit(e) {e.preventDefault();
  // console.log(formData.name);
// console.log(formData.email);
}
  return (
 <div class="modal fade show" id="exampleModalToggle" aria-hidden="true" style={{display:"block"}} aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
  <div class="modal-content">
  <div class="modal-header">
  <h1 class="modal-title fs-5" id="exampleModalToggleLabel">User Form</h1>
  <button type="button" class="btn-close" data-bs-dismiss="modal"   aria-label="Close" onClick={props.closeClick}></button>
</div>
  <div class="modal-body">
  <form onSubmit={onSubmit} className="d-flex justify-content-between">
  <div className="form-group">
    <label htmlFor="name">Name</label><input type="text"id="name"name="name"value={formData.name} onChange={handleInputChange}/>
 </div>
<div className="form-group">
<label htmlFor="email">Email</label><input type="email" id="email"name="email"value={formData.email}onChange={handleInputChange}/>
</div>
</form>
</div>
<div class="modal-footer">
<button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" onSubmit={onSubmit}>Submit</button>
</div>
</div>
 </div>

</div>

);

}