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
import { GlobalAppContext, meal, order } from "../../types/props.types";
import { AppProps } from "../../types/props.types";
import { cartItem } from "../../types/props.types";
import { useContext } from "react";

export default function MealsTable() {
  const { meals, handleAddToCart, handleSubtractFromCart, cart } =
    useContext(GlobalAppContext);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - meals.length) : 0;

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
              <p className="text-current font-bold">Title</p>
            </TableCell>
            <TableCell>
              <p className="text-current font-bold">Meal ID</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Sold</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Remaining</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Price</p>
            </TableCell>
            <TableCell align="right">
              <p className="text-current font-bold">Quantity</p>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? meals.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : meals
          ).map((row: meal) => {
            let quantity = cart.map((item) => {
              if (item.mealId === row.mealId) {
                return item.quantity;
              }
            });

            return (
              <TableRow key={row.mealId}>
                <TableCell component="th" scope="row">
                  <span className="flex items-center gap-5">
                    <img
                      className="h-10 w-10 rounded-lg"
                      src={row.img}
                      alt=""
                    />
                    <p>{row.title}</p>
                  </span>
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.mealId}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.sold}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.remaining}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {row.price}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  <span className="flex gap-0 items-center justify-center">
                    <button
                      onClick={(e) => handleSubtractFromCart(row)}
                      className="bg-gray-200 border-x border-y border-gray-400 text-current font-medium text-sm px-3 py-2"
                    >
                      -
                    </button>
                    <span className="border-y border-gray-400 px-3 py-2" id="">
                      {quantity ? quantity : "x"}
                    </span>
                    <button
                      onClick={(e) => handleAddToCart(row)}
                      className="bg-gray-200 border-x border-y border-gray-400 text-current font-medium text-sm px-3 py-2"
                    >
                      +
                    </button>
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
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
              count={meals.length}
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
