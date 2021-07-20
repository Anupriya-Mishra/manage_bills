import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link } from "react-router-dom"
import { toast } from 'react-toastify';

const Home = () => {
    const bill=useSelector(state=>state);
    const dispatch=useDispatch();
    const deleteBill=(id)=>
    {
        dispatch({type:"DELETE_BILL",payload:id});
        toast.success("Bill Deleted successfully")
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 my-5  text-right">
                    <Link to="/add" className="btn btn-outline-dark"> Add Bill </Link>
                </div>
                <div className="col-md-12 mx-auto">
                <table className="table table-hover">
                <thead className="table-header bg-dark text-white">
                <tr>
                <th scope="col">S No.</th>
                <th scope="col">Description</th>
                <th scope="col">Category</th>
                <th scope="col">Amount (in Rs)</th>
                <th scope="col">Date</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
                {
                    bill.map((bill,id)=>
                    {
                        return (
                            <tr key={id}>
                            <td>{id+1}</td>
                            <td>{bill.description}</td>
                            <td>{bill.category}</td>
                            <td>{bill.amount}</td>
                            <td>{bill.date}</td>
                            <td>{bill.status}</td>
                            <td>
                                <Link  to={`/edit/${bill.id}`} className="btn btn-small btn-primary m-3"> Edit
                                </Link>
                                <button type="button" onClick={()=>deleteBill(bill.id)} className="btn btn-small btn-danger">Delete</button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
            </table>
                </div>

                </div>

            </div>
       
    )
}

export default Home
