import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  TableSortLabel,
  Paper,
} from "@mui/material";
import Image from "next/image";
import styles from "./CustomTable.module.css";

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

const CustomTableCell = ({ column, item }) => {
  if (column.type === "image") {
    return (
      <div
        style={{
          borderRadius: "50%",
          overflow: "hidden",
          width: "32px",
          height: "32px",
          margin: "auto",
        }}
      >
        <Image src={item[column.id]} alt="" width={32} height={32} />
      </div>
    );
  } else if (column.type === "custom" && column.customRender) {
    return column.customRender(item);
  }
  return item[column.id];
};

const CustomTable = ({ columns, data, onRowClick }) => {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState(columns[0].id);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isSortable = columns.find(
      (column) => column.id === property
    )?.sortable;
    if (!isSortable) return;

    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Sort and paginate the data
  const sortedData = stableSort(data, getComparator(order, orderBy));
  const paginatedData = sortedData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead
            sx={{ background: "rgba(246, 248, 250, 1)", height: "40px" }}
          >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sortDirection={
                    column.sortable && orderBy === column.id ? order : false
                  }
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : "asc"}
                      onClick={(event) => handleRequestSort(event, column.id)}
                    >
                      {column.label}
                    </TableSortLabel>
                  ) : (
                    column.label
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {paginatedData.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                onClick={() => (onRowClick ? onRowClick(row, rowIndex) : null)}
                className={styles.customTableRow}
              >
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align}>
                    <CustomTableCell
                      column={column}
                      item={row}
                      onClick={(e) => e.stopPropagation()}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ overflowX: "hidden" }}
      />
    </Paper>
  );
};

export default CustomTable;
