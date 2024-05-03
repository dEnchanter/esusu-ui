import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { MoreHorizontalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"
import { currentDate } from "@/helper/date";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const page = () => {
  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Audit Logs</h1>
          <div className="text-sm text-gray-500">{currentDate()}</div>
        </div>
        <div className="flex justify-end space-x-4 mb-6">
          <div>
            <DatePickerWithRange />
          </div>
          <Input className="bg-[#B3B3B3]/50 border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div>
        <Table className="">
          <TableHeader className="bg-[#d9d8d8]">
            <TableRow>
              <TableHead className="w-[100px]">TIME</TableHead>
              <TableHead className="w-[100px]">USER</TableHead>
              <TableHead className="w-[100px]">ROLE</TableHead>
              <TableHead className="w-[100px]">ACTIVITY</TableHead>
              <TableHead className="w-[100px]">IP ADDRESS</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            <TableRow className="bg-zinc-100">
              <TableCell className="flex flex-col text-[#EC712E]">
                <span>28th, Feb. 2024</span>
                <span>08:00am</span>
              </TableCell>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell className="">Admin</TableCell>
              <TableCell>Updated Business Profile</TableCell>
              <TableCell className="">102.215.57.68</TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="flex flex-col text-[#EC712E]">
                <span>28th, Feb. 2024</span>
                <span>08:00am</span>
              </TableCell>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell className="">Admin</TableCell>
              <TableCell>Edited Agent - John Doe's profile</TableCell>
              <TableCell className="">102.215.57.68</TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="flex flex-col text-[#EC712E]">
                <span>28th, Feb. 2024</span>
                <span>08:00am</span>
              </TableCell>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell className="">Admin</TableCell>
              <TableCell>Deactivated User - John Doe's Profile</TableCell>
              <TableCell className="">102.215.57.68</TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="flex flex-col text-[#EC712E]">
                <span>28th, Feb. 2024</span>
                <span>08:00am</span>
              </TableCell>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell className="">Admin</TableCell>
              <TableCell>Suspended Group-Savings for School</TableCell>
              <TableCell className="">102.215.57.68</TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="flex flex-col text-[#EC712E]">
                <span>28th, Feb. 2024</span>
                <span>08:00am</span>
              </TableCell>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell className="">Admin</TableCell>
              <TableCell>Updated Business Profile</TableCell>
              <TableCell className="">102.215.57.68</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default page