import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddBill = () => {
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
  const [amount, setAmount] = useState();
  const [status, setStatus] = useState();
  const [date,setDate]=useState()
  const bill=useSelector((state)=>state);
  const dispatch = useDispatch();
  const history=useHistory();
  const handleSubmit=(e)=>
  {
      e.preventDefault();
      if(!description || !category || !status || !date || !amount )
  {
    return toast.warning("Please Fill in all Fields!")
  }
  if(status!='Paid' && status!='Unpaid')
  {
    return toast.warning("Status should be 'Paid' or 'Unpaid' ! ")
  }
  const data={
    id: bill[bill.length-1].id+1,
    description,
    category,
    amount,
    date,
    status,
  }
  dispatch({type:"ADD_BILL", payload:data})
  toast.success("Bill Added Successfully")
  history.push("/");
  };
  
    return (
        <div className="container">
            <div className="row">
                <h1 className="display-3  text-center"> Add Bill
                </h1> 
                <div className="col-md-6 shadow mx-auto p-5">
                <form onSubmit={handleSubmit} >
                <div className="form-group p-1">
              <input
                className="form-control"
                type="text"
                placeholder="Description"
                value={description} onChange={e=>setDescription(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                type="text"
                placeholder="Category"
                value={category} onChange={e=>setCategory(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                type="number"
                placeholder="Amount(in Rs)"
                value={amount} onChange={e=>setAmount(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                type="text"
                placeholder="Status (Paid/Unpaid)"
                value={status} onChange={e=>setStatus(e.target.value)}
              />
            </div>
            <div className="form-group p-1">
              <input
                className="form-control"
                type="date"
                placeholder="Date"
                value={date} onChange={e=>setDate(e.target.value)}
              />
            </div>
            
            
            <div className="form-group p-1">
              <input
                className="btn btn-block btn-dark"
                type="submit"
                value="Add Bill"
              />
            </div>
          </form>
                </div>

                </div>
                </div>

         
    )
}

export default AddBill
