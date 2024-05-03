import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { MoreHorizontalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { currentDate } from "@/helper/date"

const page = () => {
  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Groups</h1>
          <div className="text-sm text-gray-500">{currentDate()}</div>
        </div>
        <div className="flex justify-end space-x-4 mb-6">
          <div>
            <DatePickerWithRange />
          </div>
          <Input className="bg-[#B3B3B3]/50 border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div>
        <div className="flex space-x-2">
          <Button className="text-xs text-[#3F562C] underline font-extralight" variant="ghost">
            All
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Incoming
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Outgoing
          </Button>
          <Button className="text-xs text-[#3F562C] font-extralight" variant="ghost">
            Failed
          </Button>
        </div>
        <Table>
          <TableHeader className="bg-[#d9d8d8]">
            <TableRow>
              <TableHead className="w-[200px]">GROUP NAME</TableHead>
              <TableHead className="w-[150px]">GROUP ID</TableHead>
              <TableHead className="w-[150px]">CATEGORY</TableHead>
              <TableHead className="w-[250px]">MEMBERS</TableHead>
              <TableHead className="w-[150px]">CREATOR</TableHead>
              <TableHead className="w-[150px]">BALANCE</TableHead>
              <TableHead className="w-[150px]">STATUS</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>Housing</TableCell>
              <TableCell className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>IT</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>IS</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>GG</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Sub-Agent</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell className="text-green-500">Active</TableCell>
              <TableCell>
                <MoreHorizontalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>Travel</TableCell>
              <TableCell className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>WB</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>TY</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Individual</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell className="text-red-500">Ended</TableCell>
              <TableCell>
                <MoreHorizontalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>Rent</TableCell>
              <TableCell className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>ETH</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Super-Agent</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell className="text-green-500">Active</TableCell>
              <TableCell>
                <MoreHorizontalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>School Fees</TableCell>
              <TableCell className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>AD</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>IU</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>SU</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Sub-Agent</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell className="text-green-500">Active</TableCell>
              <TableCell>
                <MoreHorizontalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>Vacation</TableCell>
              <TableCell className="flex">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn " />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>AO</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.pn" />
                  <AvatarFallback>CG</AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell>Sub-Agent</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell className="text-red-500">Ended</TableCell>
              <TableCell>
                <MoreHorizontalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default page