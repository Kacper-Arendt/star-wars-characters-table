import React, {useMemo} from "react";
import styled from "styled-components";
import {useSortBy, useTable, usePagination} from 'react-table';

const Wrapper = styled.div`
  grid-area: table;
  width: 100%;
  height: 100%;

  background-color: #fff;
`;

const Table = styled.table`
  width: 100%;

  text-align: center;
  border-spacing: 0;
  font-size: 1.2rem;
  white-space: nowrap;
  text-transform: capitalize;
  
  thead{
    border-bottom: 2px solid black;
  }

  th {
    font-weight: normal;
    padding: 1rem 2rem;

    :first-of-type {
      padding: 0;
    }
  }

  td {
    padding: 1.5rem 0;
  }
`;


export const TableComponent = () => {
    const columns = useMemo(() => [
        {
            Header: 'Name',
            accessor: 'name',
        },
        {
            Header: 'Born',
            accessor: 'born',
        },
        {
            Header: 'Homeworld',
            accessor: 'homeworld',
        },
        {
            Header: 'Vehicles and Starships',
            accessor: 'vehicles',
        },
        {
            Header: 'Status',
            accessor: 'status',
        },
    ], []) as any;
    const data = useMemo(() => [{
        name: 'name',
        born: 'luty',
        homeworld: 'warszawa',
        vehicles: 'ford',
        status: 'active'
    }], []);
    const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data},
        useSortBy, usePagination
    );

    return (
        <Wrapper>
            <Table {...getTableProps}>
                <thead>
                {
                    headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render('Header')}
                                    </th>
                                ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </Wrapper>
    )
}