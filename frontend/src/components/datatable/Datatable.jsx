import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { Link, useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import axios from "axios";
import swal from 'sweetalert';



const Datatable = () => {


   const showAlert = (id) => {
    swal({
      title: "Are you sure?",
      text: "Do you really want to delete the record?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        axios.delete('http://localhost:8081/users/delete/'+id)
        .then(res => navigate('/users'))
        .catch(err => console.log(err));
        swal("Deleted Successfully!", {
          icon: "success",
        });
      } else {
        {/*swal("Your imaginary file is safe!");*/}
      }
    });
  }

  const [data,setData] = useState([]);
  useEffect (()=>{
    axios.get('http://localhost:8081')
    .then(res=>setData(res.data))
    .catch(err => console.log(err));
  })

  const navigate = useNavigate();

  {/*const handleDelete = (id) => {
    axios.delete('http://localhost:8081/users/delete/'+id)
    .then(res => navigate('/users'))
    .catch(err => console.log(err));

  }*/}

  const userColumns=[
    { field:"name",headerName:"Name",width:230},
    { field:"email",headerName:"Email",width:230 },
    { field:"age",headerName:"Age",width:100 },
    { field:"status",headerName:"Status",width:160,
      renderCell:(params)=>{
        return(
            <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>
    
        )
      }}];


  const actioncolumn=[
    { field:"action", headerName:"Action", width:200 , renderCell:(params)=>{
      return(
        <div className="cellaction">
          <Link to={`update/${params.id}`} style={{textDecoration:"none"}}>
          <button className="viewbutton">Update</button>
          </Link>
          {/*<Link to="/users/test" style={{textDecoration:"none"}}>
          <div className="viewbutton">View</div>
      </Link>*/}
         {/* <button onClick={e => handleDelete(params.id)} className="deletebutton">Delete</button> */}
          <button onClick={e => showAlert(params.id)} className="deletebutton">Delete</button>
        </div>
      )
    }}
  ];
  return (
    <div className="datatable">
      <div className="datatabletitle">
         Add New user
        <Link to="/users/new" style={{textDecoration:"none"}} className="link">
          Add New
        </Link>
      </div>
      <div style={{ height: 600, width: '100%' }}>
      <DataGrid className="datagrid"
      rows={data}
      columns={userColumns.concat(actioncolumn)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 9 },
        },
      }}
      pageSizeOptions={[5,7,9,10]}
      checkboxSelection
    />
    </div>
  </div>
  )
}

export default Datatable