import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows=[
    {
        id:123456,
        product: "Acer Nitro 5",
        img :"https://static-ecapac.acer.com/media/catalog/product/b/0/b0b8zvwc5g.main_un.qfhsi.006.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        customer:"John smith",
        date:"22 December",
        amount:81000,
        method:"Cash on Delivery",
        status:"Approved",
    },
    {
        id:123456,
        product: "Acer Nitro 5",
        img :"https://static-ecapac.acer.com/media/catalog/product/b/0/b0b8zvwc5g.main_un.qfhsi.006.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        customer:"John smith",
        date:"22 December",
        amount:81000,
        method:"Cash on Delivery",
        status:"Pending",
    },
    {
        id:123456,
        product: "Acer Nitro 5",
        img :"https://static-ecapac.acer.com/media/catalog/product/b/0/b0b8zvwc5g.main_un.qfhsi.006.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        customer:"John smith",
        date:"22 December",
        amount:81000,
        method:"Cash on Delivery",
        status:"Approved",
    },
    {
        id:123456,
        product: "Acer Nitro 5",
        img :"https://static-ecapac.acer.com/media/catalog/product/b/0/b0b8zvwc5g.main_un.qfhsi.006.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        customer:"John smith",
        date:"22 December",
        amount:81000,
        method:"Cash on Delivery",
        status:"Approved",
    },
    {
        id:123456,
        product: "Acer Nitro 5",
        img :"https://static-ecapac.acer.com/media/catalog/product/b/0/b0b8zvwc5g.main_un.qfhsi.006.png?optimize=high&bg-color=255,255,255&fit=bounds&height=500&width=500&canvas=500:500&format=jpeg",
        customer:"John smith",
        date:"22 December",
        amount:81000,
        method:"Cash on Delivery",
        status:"Approved",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking Id</TableCell>
            <TableCell className="tablecell">Product</TableCell>
            <TableCell className="tablecell">Customer</TableCell>
            <TableCell className="tablecell">Date</TableCell>
            <TableCell className="tablecell">Amount</TableCell>
            <TableCell className="tablecell">Method</TableCell>
            <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
            >
              <TableCell className="tablecell">{row.id}</TableCell>
              <TableCell className="tablecell">
                <div className="cellwrapper">
                    <img src={row.img} alt="image" className="image" />
                    {row.product}
                </div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List