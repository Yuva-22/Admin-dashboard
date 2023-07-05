import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns,userRows } from "../../datatablesource"



const Datatable = () => {

  const actioncolumn=[
    { field:"action", headerName:"Action", width:200 , renderCell:()=>{
      return(
        <div className="cellaction">
          <div className="viewbutton">View</div>
          <div className="deletebutton">Delete</div>
        </div>
      )
    }}
  ];
  return (
    <div style={{ height: 650, width: '100%' }} className="datatable">
    <DataGrid
      rows={userRows}
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
  )
}

export default Datatable