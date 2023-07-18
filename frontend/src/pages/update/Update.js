import React from "react";
import "./update.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import swal from 'sweetalert';


const Update = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [age,setAge] = useState('')
  const [status,setStatus] = useState('')
  
  const navigate = useNavigate();
  const {id} = useParams();
  
  const handleSubmit = (event) => {
    swal({
      title: "User details updated",
      text: "",
      icon: "success",
    });

    event.preventDefault();
    axios.put('http://localhost:8081/users/update/'+id,{name,email,age,status})
    .then(res=>{
        navigate('/users');
    }).catch(err => console.log(err));
  }

  const [file,setFile] = useState("");
  return (
    <div className="update">
      <Sidebar />
      <div className="updatecontainer">
        <Navbar />
        <div className="top">
          <h1>Update User</h1>
        </div>
        <div className="bottom">
          <div className="left">
             <img src={file ? URL.createObjectURL(file) : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAAAOVBMVEW9w8d/j5p7jJewuL28wsbBxsqosbeutrydqK+irLOQnaaJl6GEk524v8OBkJu0u8CWoqp3iJSNmqNDSKslAAACtklEQVR4nO3b226jMBRAUdtwuBnbwP9/7BxzTxSaPFQTqewlUUWQB7plXBNSYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGckFT9L8u1T/L7Qu3d8+e2T/DaZnH0Tybru9qNptMObK66z7u6VSufa3EDkqoQ0jkpLJUlVcfEOKu2VujxJh5fvoNJaSQZnrXX9yxhUWiuVOZJmOl105f7Xn0prpbBWqo/93m+vqLTNS3MkOx4Tk9dpan1JpW1easc8lIY9htfBtWWi0jaWpI3ONg+R9kxUOtZLEsxTpC0TlY6198kWac1EpYdKafmI5Ii0ZKLSuVKILmc6R8orTSqZU6UQNUp6iqSrAyqZo9IcycbnSNZRyeyVlkgvUClbKl1GotJsudu9jESl2flul0pXqPSJpdJ4+QCFlUC2zEvVNSqZ/TOBa1TKRjv8/Ag88TzOiOfZ7gc++Z7A60dQ95Lqn6VvnyCAm5D9x+MunHWlLimHc5i6IdMTyc8oy/z9CSnXQVTlZZHuFFmH1XJgO76/70ak98VcKfV93827tJJ0Q2+bvImp9EAeXb73nRate9/fbrBJLKJoJfGtblXelSv1lQmuMinqmCrF2CTtpMG8GJekdHdbXkqUoRGtFIPez86DZK6ks1UsdZDp9da29VRLozfDyUuKJhh/9X25v0qi0ZHiRaxWao9KYaskfVM1dqlUaCXbeX+7WxWtJLXXSjE9jKWjkhOdpup8TLRmsHL9BdU/S6xuXZ/n65DsfCXlSnr9GbtUsnVqx1rqmIouj7k2pObbZ/3f5d846Bgqh2mq5kFStDqqdF7SrdSjxdRVVaG7piHP3mGYuuZ2/0Swr70fLiQ5b8t+Pb6spG54xX0uTp3lw5O3Ao0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBv+gd8SBlzfUtSbQAAAABJRU5ErkJggg=="} alt="" />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit} >
              <div className="forminput">
                <label htmlFor="file">Image : <DriveFolderUploadIcon  className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} 
                style={{display:"none"}}/>
              </div>
              <div className="forminput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Username" />
              </div>
              <div className="forminput">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter Name" className="form-control"
                onChange = {e=> setName(e.target.value)} />
              </div>
              <div className="forminput">
                <label htmlFor="">Email</label>
                <input type="email" placeholder="Enter Email" className="form-control"
                onChange = {e=> setEmail(e.target.value)} />
              </div>
              <div className="forminput">
                <label htmlFor="">Age</label>
                <input type="number" placeholder="Enter Age" className="form-control"
                onChange = {e=> setAge(e.target.value)} />
              </div>
              <div className="forminput">
                <label htmlFor="" for="status">Status</label>
                {/*<input type="text" placeholder="Active/Pending/Passive" className="form-control"
                onChange = {e=> setStatus(e.target.value)} required/>*/}
                <select name="status" id="status" className="status" onChange = {e=> setStatus(e.target.value)} required >
                    <option value="select">Choose Status</option>
                    <option value="Active">Active</option>
                    <option value="Pending">Pending</option>
                    <option value="Passive">Passive</option>
                </select>
              </div>      
              <button>Update</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Update