import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link,useHistory,useParams } from 'react-router-dom'
import { toast } from 'react-toastify';

const EditBill = () => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
const [amount, setAmount] = useState();
const [status, setStatus] = useState("");
const [date,setDate]=useState()
  const {id}=useParams();
    const bill=useSelector((state)=>state);
    const dispatch=useDispatch();
    const history=useHistory();
    const currentBill = bill.find(
      bill => bill.id === parseInt(id)
    );
    
      useEffect(()=>{
          if(currentBill)
          {
              setDescription(currentBill.description);
              setCategory(currentBill.category);
              setAmount(currentBill.amount);
              setStatus(currentBill.status);
              setDate(currentBill.date);
          }
          

      },
      [currentBill])
     
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
        id: parseInt(id),
        description,
        category,
    amount,
    date,
    status
      }
      console.log(bill.category);
      dispatch({type:"UPDATE_BILL", payload:data})
      toast.success("Bill Updated Successfully")
      history.push("/");
      };
    return (
      <div className="container">
      {
        currentBill? 
        (
          <>
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
                className="btn btn-dark m-3"
                type="submit"
                value="Update Bill"
              />
              <Link to="/"
                className="btn btn-danger m-3"> Cancel </Link>
            </div>
          </form>
                </div>

                </div>
          </>
        ) : <h1 className="display-3 m-5 text-center">Bill number {id} does not exist.</h1>
      }
                </div>
    )
}

export default EditBill
