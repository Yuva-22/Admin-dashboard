export const userColumns=[
 { field:"user",headerName:"User",width:230,renderCell:(params)=>{
    return(
        <div className="cellwithimg">
           <img className="cellimg" src={params.row.img} alt="avatar" />
           {params.row.username}
        </div>
    )} 
},
{ field:"email",headerName:"Email",width:230 },
{ field:"age",headerName:"Age",width:100 },
{ field:"status",headerName:"Status",width:160,
  renderCell:(params)=>{
    return(
        <div className={`cellwithstatus ${params.row.status}`}>{params.row.status}</div>

    )
  }}];


export const userRows = [
    { 
        id: 1, 
        username:"John", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"active",
        email:"1snow@gmail.com",
        age: 35,
    },
    { 
        id:2, 
        username:"Lannister",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"active",
        email:"1snow@gmail.com",
        age: 42 
    },
    {   id: 3, 
        username:"Smith", 
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"passive",
        email:"1snow@gmail.com", 
        age: 45 
    },
    {   id: 4, 
        username: 'Stark',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"active",
        email:"1snow@gmail.com",
        age: 16 
    },
    {   id: 5, 
        username: 'Jaisy',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"pending",
        email:"1snow@gmail.com",
        age: 16 
    },
    {   id: 6, 
        username: 'Shila',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"active",
        email:"1snow@gmail.com",
        age: 16 
    },
    {   id: 7, 
        username: 'Mouri',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"pending",
        email:"1snow@gmail.com",
        age: 16 
    },
    {   id: 8, 
        username: 'Hilton',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"active",
        email:"1snow@gmail.com",
        age: 16 
    },
    {   id: 9, 
        username: 'Gilberg',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj-czWbX4nyHqjUzCSe1iOQyGCAXmTS_B3-sDdFX8&s",
        status:"passive",
        email:"1snow@gmail.com",
        age: 16 
    },
   
  
  ];