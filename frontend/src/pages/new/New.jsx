import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useState } from "react";

const New = ({inputs,title}) => {

  const [file,setFile] = useState("");
  return (
    <div className="new">
      <Sidebar />
      <div className="newcontainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
             <img src={file ? URL.createObjectURL(file) : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAAAOVBMVEW9w8d/j5p7jJewuL28wsbBxsqosbeutrydqK+irLOQnaaJl6GEk524v8OBkJu0u8CWoqp3iJSNmqNDSKslAAACtklEQVR4nO3b226jMBRAUdtwuBnbwP9/7BxzTxSaPFQTqewlUUWQB7plXBNSYwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwGckFT9L8u1T/L7Qu3d8+e2T/DaZnH0Tybru9qNptMObK66z7u6VSufa3EDkqoQ0jkpLJUlVcfEOKu2VujxJh5fvoNJaSQZnrXX9yxhUWiuVOZJmOl105f7Xn0prpbBWqo/93m+vqLTNS3MkOx4Tk9dpan1JpW1easc8lIY9htfBtWWi0jaWpI3ONg+R9kxUOtZLEsxTpC0TlY6198kWac1EpYdKafmI5Ii0ZKLSuVKILmc6R8orTSqZU6UQNUp6iqSrAyqZo9IcycbnSNZRyeyVlkgvUClbKl1GotJsudu9jESl2flul0pXqPSJpdJ4+QCFlUC2zEvVNSqZ/TOBa1TKRjv8/Ag88TzOiOfZ7gc++Z7A60dQ95Lqn6VvnyCAm5D9x+MunHWlLimHc5i6IdMTyc8oy/z9CSnXQVTlZZHuFFmH1XJgO76/70ak98VcKfV93827tJJ0Q2+bvImp9EAeXb73nRate9/fbrBJLKJoJfGtblXelSv1lQmuMinqmCrF2CTtpMG8GJekdHdbXkqUoRGtFIPez86DZK6ks1UsdZDp9da29VRLozfDyUuKJhh/9X25v0qi0ZHiRaxWao9KYaskfVM1dqlUaCXbeX+7WxWtJLXXSjE9jKWjkhOdpup8TLRmsHL9BdU/S6xuXZ/n65DsfCXlSnr9GbtUsnVqx1rqmIouj7k2pObbZ/3f5d846Bgqh2mq5kFStDqqdF7SrdSjxdRVVaG7piHP3mGYuuZ2/0Swr70fLiQ5b8t+Pb6spG54xX0uTp3lw5O3Ao0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBv+gd8SBlzfUtSbQAAAABJRU5ErkJggg=="} alt="" />
          </div>
          <div className="right">
            <form >
            <div className="forminput">
                <label htmlFor="file">Image : <DriveFolderUploadIcon  className="icon"/></label>
                <input type="file" id="file" onChange={e=>setFile(e.target.files[0])} 
                style={{display:"none"}}/>
              </div>
              {inputs.map((input)=>(
                <div className="forminput" key={input.id}>
                    <label>{input.label}</label>
                    <input type = {input.type} placeholder={input.placeholder} />
                </div>
              ))}
              
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New