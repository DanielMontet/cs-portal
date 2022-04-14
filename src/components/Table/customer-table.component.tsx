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



export default function CustomerListTable<AppProps>({userData}) {
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
              <p className="text-current font-bold">User ID</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Email</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Username</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Phone Number</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Last Known Address</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Company</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? userData!.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : userData!
          ).map((row) => (
            <TableRow key={row.orderId}>
              <TableCell component="th" scope="row">
                <Link
                  className="text-blue-700 hover:text-blue-500"
                  to={`/customers/${row.id}`}
                  key={row.id}
                >
                  {row.id}
                </Link>
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.username}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.phone}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {`${row.address.street},${row.address.city}`}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.company.name}
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
              count={userData.length}
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
