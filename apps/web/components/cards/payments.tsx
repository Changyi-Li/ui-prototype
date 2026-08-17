"use client"

import { EllipsisIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const payments = [
  { status: "success", email: "ken99@example.com", amount: "$316.00" },
  { status: "success", email: "Abe45@example.com", amount: "$242.00" },
  { status: "processing", email: "Monserrat44@example.com", amount: "$837.00" },
  { status: "failed", email: "carmella@example.com", amount: "$721.00" },
  { status: "pending", email: "jason78@example.com", amount: "$450.00" },
  { status: "success", email: "sarah23@example.com", amount: "$1,280.00" },
]

export function CardsPayments() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Payments</CardTitle>
        <CardDescription>Manage your payments.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  data-name="select"
                  className="w-10 [&>[role=checkbox]]:translate-y-[2px] [&:has([role=checkbox])]:pl-3"
                >
                  <Checkbox aria-label="Select all" />
                </TableHead>
                <TableHead data-name="status" className="w-24">
                  Status
                </TableHead>
                <TableHead data-name="email">Email</TableHead>
                <TableHead data-name="amount" className="w-24">
                  <div className="text-right">Amount</div>
                </TableHead>
                <TableHead data-name="actions" className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.email}>
                  <TableCell
                    data-name="select"
                    className="[&>[role=checkbox]]:translate-y-[2px] [&:has([role=checkbox])]:pl-3"
                  >
                    <Checkbox aria-label="Select row" />
                  </TableCell>
                  <TableCell data-name="status">
                    <div className="capitalize">{payment.status}</div>
                  </TableCell>
                  <TableCell data-name="email">
                    <div className="lowercase">{payment.email}</div>
                  </TableCell>
                  <TableCell data-name="amount">
                    <div className="text-right font-medium">
                      {payment.amount}
                    </div>
                  </TableCell>
                  <TableCell data-name="actions">
                    <DropdownMenu>
                      <DropdownMenuTrigger
                        render={
                          <Button
                            variant="ghost"
                            size="icon"
                            className="size-8 p-0"
                          />
                        }
                      >
                        <EllipsisIcon />
                        <span className="sr-only">Open menu</span>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-32">
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem>Make a copy</DropdownMenuItem>
                        <DropdownMenuItem>Favorite</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem variant="destructive">
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end gap-2">
          <div className="text-muted-foreground flex-1 text-sm">
            0 of {payments.length} row(s) selected.
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
