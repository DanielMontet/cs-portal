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

function createData(orderId: string, amount: number, status: string) {
  return { orderId, amount, status };
}

const rows = [
  createData("asdasdas", 305, "received"),
  createData("asdsasda", 452, "prepared"),
  createData("dsfdsfas", 262, "allocated"),
  createData("Fasdasss", 159, "prepared"),
  createData("sadsadss", 356, "delivered"),
  createData("sadasdsa", 408, "prepared"),
  createData("asdsadaa", 237, "allocated"),
  createData("sadsasao", 375, "received"),
  createData("Kiddsfds", 518, "on its way"),
  createData("Lsdfsdf", 392, "received"),
  createData("asdsadasd", 318, "on its way"),
  createData("asdasdsad", 360, "delivered"),
  createData("sdfdsffd", 437, "on its way"),
];

export default function OrderTable() {
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
              <p className="text-current font-bold">Order ID</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Amount</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Status</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Action</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                {row.orderId}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.amount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.status}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Link
                  style={{ display: "block", margin: "1rem 0" }}
                  to={`/order-detail/${row.orderId}`}
                  key={row.orderId}
                >
                  View
                </Link>
              </TableCell>
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

// order received
// order prepared
// order allocated
// order on its way
// order delivered
