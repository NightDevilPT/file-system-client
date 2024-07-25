'use client'

// HistoryTable.tsx
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { DateFormatEnum, formatDate } from "@/utils/date";
import { generateDescription } from '@/utils/history-description';
import { History } from '@/types/history';
import icons from '@/utils/icons';

const columns = [
  { name: "ICON", uid: "eventName" },
  { name: "DESCRIPTION", uid: "description" },
  { name: "CREATED AT", uid: "createdAt" },
];

interface HistoryTableProps {
  data: History[];
}

export default function FSRecentActivity({ data }: HistoryTableProps) {
  const renderCell = React.useCallback(
    (item: History, columnKey: string | number) => {
      switch (columnKey) {
        case "description":
          return (
            <div className="w-auto h-auto text-sm font-rubik">
              {generateDescription(item)}
            </div>
          );
        case "eventName":
          return (
            <div className="w-8 h-8 text-default-400">
              {icons(item.eventName as any)}
            </div>
          );
        case "createdAt":
          return (
            <div className="w-auto h-auto text-sm font-rubik">
              {formatDate(new Date(item.createdAt), DateFormatEnum.DD_MM_YYYY)}
            </div>
          );
        default:
          return null;
      }
    },
    []
  );

  return (
    <Table
      color="primary"
      selectionMode="single"
      shadow="none"
      classNames={{ wrapper: ["p-3"] }}
    >
      <TableHeader columns={columns} className="p-0">
        {column => (
          <TableColumn key={column.uid} align="center">
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={data}>
        {item => (
          <TableRow key={item.id} className="cursor-pointer">
            {columnKey => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
