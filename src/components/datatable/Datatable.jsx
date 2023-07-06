import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource"
import { Link } from "react-router-dom";
import { useState } from "react";



const Datatable = () => {

  const [data,setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter(item=>item.id !== id))
  }

  const actioncolumn=[
    { field:"action", headerName:"Action", width:200 , renderCell:(params)=>{
      return(
        <div className="cellaction">
          <Link to="/users/test" style={{textDecoration:"none"}}>
          <div className="viewbutton">View</div>
          </Link>
          <div className="deletebutton" onClick={()=>handleDelete(params.row.id)}>Delete</div>
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





    <div style={{ height: 650, width: '100%' }}>
    <DataGrid className="datagrid"
      rows={data}
      columns={userColumns.concat(actioncolumn)}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 10 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  </div>
  </div>
  )
}

export default Datatable