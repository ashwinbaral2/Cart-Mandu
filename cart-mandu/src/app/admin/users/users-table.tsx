'use client'
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button';
import {MoreHorizontal} from 'lucide-react';
import EditProduct from "./edit-user";
import DeleteProduct from "./delete-user";
const columns = [
    {
        accessorKey: "name.firstname",
        header: "First Name",
    },
    {
        accessorKey: "name.lastname",
        header: "Surname",
    },
    {
        accessorKey: "username",
        header: "Username",
    },
    {
        accessorKey: "email",
        header: "E-mail",
    },
    {
        accessorKey: "phone",
        header: "Phone number",
    },
    {
        accessorKey: "address.city",
        header: "City",
    },
    {
        accessorKey: "address.street",
        header: "Street",
    },
    {
        accessorKey: "address.number",
        header: "Street number",
    },
    {
        accessorKey: "address.zipcode",
        header: "Zipcode",
    },
    {
    id: "actions",
    enableHiding: false,
    cell: ({ row}: any) => {
        const payment = row.original
    

        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <EditProduct item={row.original} />
                    <DeleteProduct item={row.original}/>
                    
                </DropdownMenuContent>
            </DropdownMenu>
        )
    }
}
]
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="overflow-hidden rounded-md border">
            <Table>
                <TableHeader>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => {
                                return (
                                    <TableHead key={header.id}>
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                )
                            })}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {table.getRowModel().rows?.length ? (
                        table.getRowModel().rows.map((row) => (
                            <TableRow
                                key={row.id}
                                data-state={row.getIsSelected() && "selected"}
                            >
                                {row.getVisibleCells().map((cell) => (
                                    <TableCell key={cell.id}>
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={columns.length} className="h-24 text-center">
                                No results.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}


const UsersTable = (props: any) => {
    return (
        <div>
            <div className="flex  justify-center">
                <DataTable columns={columns} data={props.users} />
            </div>
        </div>
    )
}

export default UsersTable
{/* its component but not added to component section because its not reusable */}
