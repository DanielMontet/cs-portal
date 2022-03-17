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
import { order } from "../../types/props.types";
import { AppProps } from "../../types/props.types";

export default function OrderTable<AppProps>({ orderData }: any) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  console.log(orderData);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - orderData.length) : 0;

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
            ? orderData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : orderData
          ).map((row: order) => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                <Link
                  className="text-blue-700 hover:text-blue-500"
                  to={`/order-detail/${row.orderId}`}
                  key={row.orderId}
                >
                  {row.orderId}
                </Link>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.amount}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.status}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                <Link
                  className="text-blue-700 hover:text-blue-500"
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
              count={orderData.length}
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
