import React from 'react';
import { useTable } from 'react-table';

const data = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Mike Brown', age: 40, city: 'Chicago' },
];

const columns = [
  { Header: 'ID', Accessor: 'id' },
  { Header: 'Name', Accessor: 'name', sortable: true }, // Enable sorting for 'name'
  { Header: 'Age', Accessor: 'age', sortable: true }, // Enable sorting for 'age'
  { Header: 'City', Accessor: 'city' },
];

const MyTable = () => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ data, columns });

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((column) => (
              <th key={column.id} {...column.getHeaderProps()}>
                {column.render('Header')}
                {column.isSorted ? (column.isSortedDesc ? ' ' : ' ') : ''}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr key={row.id} {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td key={cell.id} {...cell.getCellProps()}>
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;
