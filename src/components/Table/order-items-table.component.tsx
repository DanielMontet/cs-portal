import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import { TablePaginationActions } from "./table-utils";
import { Link } from "react-router-dom";

function createData(
  itemId: string,
  price: number,
  quantity: number,
  name: string,
  imageUrl: string
) {
  return { itemId, price, quantity, name, imageUrl };
}

const rows = [
  createData(
    "asdasdas",
    305,
    1,
    "periperi chicken",
    "https://picsum.photos/300/200"
  ),
  createData(
    "asdsasda",
    452,
    1,
    "chapati na mandondo",
    "https://picsum.photos/300/200"
  ),
  createData(
    "dsfdsfas",
    262,
    1,
    "ugali na nyama",
    "https://picsum.photos/300/200"
  ),
];

export default function OrderItemsTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>
              <p className="text-current font-bold">Image</p>
            </TableCell>
            <TableCell>
              <p className="text-current font-bold">Item ID</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Name</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Price</p>
            </TableCell>
            <TableCell align="center">
              <p className="text-current font-bold">Quantity</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.itemId}>
              <TableCell component="th" scope="row">
                <img
                  src={row.imageUrl}
                  alt="order item image"
                  className="h-12 rounded"
                />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.itemId}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
