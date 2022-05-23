import * as React from "react";
import styles from "@emotion/styled";

type Props = React.ComponentProps<"table"> & {
  columns: string[];
  data: (string | number | (() => string | number))[][];
};

const STable = styles.table`
  width: 100%;
  border-collapse: collapse;
`;

const STh = styles.th`
  border: solid 1px var(--primary);
  padding: var(--space-content-sm);
`;

const STd = styles.td`
  border: solid 1px var(--primary);
  padding: var(--space-content-sm);
`;

// FIXME avoid using index as key
export const Table = ({ columns, data, ...rest }: Props) => {
  return (
    <STable {...rest}>
      <thead>
        <tr>
          {columns.map((c, index) => {
            const key = `th-${index}`;
            return <STh key={key}>{c}</STh>;
          })}
        </tr>
      </thead>

      <tbody>
        {data.map((row, rowIndex) => {
          const rowKey = `row-${rowIndex}`;
          return (
            <tr key={rowKey}>
              {row.map((col, colIndex) => {
                const value = typeof col === "function" ? col() : col;
                const columnKey = `${rowKey}-col-${colIndex}`;
                return <STd key={columnKey}>{value}</STd>;
              })}
            </tr>
          );
        })}
      </tbody>
    </STable>
  );
};
