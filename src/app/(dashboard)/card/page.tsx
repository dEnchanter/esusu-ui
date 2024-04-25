import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { MoreVerticalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"

const page = () => {
  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Cards</h1>
          <div className="text-sm text-gray-500">9 February 2024</div>
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
              <TableHead className="w-[150px]">CARD NUMBER</TableHead>
              <TableHead className="w-[150px]">CARD TYPE</TableHead>
              <TableHead className="w-[150px]">ASSIGNED TO</TableHead>
              <TableHead className="w-[150px]">USER ID</TableHead>
              <TableHead className="w-[150px]">REQUESTED VIA</TableHead>
              <TableHead className="w-[150px]">STATUS</TableHead>
              <TableHead className="w-[150px]">DATE ISSUED</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">#000003</TableCell>
              <TableCell>Physical</TableCell>
              <TableCell>JOHN DOE S.</TableCell>
              <TableCell>2024SW14</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Activated</TableCell>
              <TableCell>10/4/2024</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="font-medium">#000003</TableCell>
              <TableCell>Physical</TableCell>
              <TableCell>JOHN DOE S.</TableCell>
              <TableCell>2024SW14</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Activated</TableCell>
              <TableCell>10/4/2024</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">#000003</TableCell>
              <TableCell>Physical</TableCell>
              <TableCell>JOHN DOE S.</TableCell>
              <TableCell>2024SW14</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Activated</TableCell>
              <TableCell>10/4/2024</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/10">
              <TableCell className="font-medium">#000003</TableCell>
              <TableCell>Physical</TableCell>
              <TableCell>JOHN DOE S.</TableCell>
              <TableCell>2024SW14</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Activated</TableCell>
              <TableCell>10/4/2024</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-zinc-100">
              <TableCell className="font-medium">#000003</TableCell>
              <TableCell>Physical</TableCell>
              <TableCell>JOHN DOE S.</TableCell>
              <TableCell>2024SW14</TableCell>
              <TableCell>Agent</TableCell>
              <TableCell>Activated</TableCell>
              <TableCell>10/4/2024</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  )
}

export default page