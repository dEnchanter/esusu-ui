import { Button } from "@/components/ui/button"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { MoreVerticalIcon } from "lucide-react"
import { Card } from "@/components/ui/card"
import { DatePickerWithRange } from "@/components/DateRangePicker"
import { SummaryBox } from "@/components/SummaryBox"

const page = () => {
  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Transactions</h1>
          <div className="text-sm text-gray-500">9 February 2024</div>
        </div>
        <div className="flex justify-between flex-wrap mb-8">
          <SummaryBox
            title="Total Transaction Value"
            value={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(1000)}
            leftLabel="Successful"
            leftValue={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(720)}
            rightLabel="Failed"
            rightValue={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(280)}
            leftRatio={"60"}
            rightRatio={"40"}
          />
          <SummaryBox
            title="Transaction Count"
            value={'15000'}
            leftLabel="Successful"
            leftValue={"60"}
            rightLabel="Failed"
            rightValue={"40"}
            leftRatio={"70"}
            rightRatio={"30"}
          />
          <SummaryBox
            title="Terminals"
            value={"8500"}
            leftLabel="Active"
            leftValue={"6000"}
            rightLabel="Inactive"
            rightValue={"2500"}
            leftRatio={"78"}
            rightRatio={"22"}
          />
          <SummaryBox
            title="Commission"
            value={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(10000 / 100)}
            leftLabel="PTSP"
            leftValue={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(20000 / 100)}
            rightLabel="TOC"
            rightValue={new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(50000 / 100)}
          />
        </div>
        <div className="flex justify-end space-x-4 mb-6">
          <div>
            <DatePickerWithRange />
          </div>
          <Input className="bg-[#B3B3B3] border p-2 rounded-md w-[15rem]" placeholder="Search anything here..." />
          <Button className="bg-[#3F562C] py-5 px-10">Filter</Button>
        </div>
        <div className="flex space-x-2 mb-4">
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
              <TableHead className="w-[150px]">USER NAME</TableHead>
              <TableHead className="w-[100px]">USER ID</TableHead>
              <TableHead className="w-[200px]">EMAIL ADDRESS</TableHead>
              <TableHead className="w-[150px]">PHONE NUMBER</TableHead>
              <TableHead className="w-[150px]">ADDRESS</TableHead>
              <TableHead className="w-[150px]">REGION/STATE</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody className="text-gray-500">
            <TableRow>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>johndoe@xyz.com</TableCell>
              <TableCell>+2348123456789</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell>Lagos West/ Lagos</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/30 hover:bg-[#ECB1B1]/30">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>johndoe@xyz.com</TableCell>
              <TableCell>+2348123456789</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell>Lagos West/ Lagos</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>johndoe@xyz.com</TableCell>
              <TableCell>+2348123456789</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell>Lagos West/ Lagos</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow className="bg-[#ECB1B1]/30 hover:bg-[#ECB1B1]/30">
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>johndoe@xyz.com</TableCell>
              <TableCell>+2348123456789</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell>Lagos West/ Lagos</TableCell>
              <TableCell>
                <MoreVerticalIcon className="h-5 w-5 text-gray-600" />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">JOHN DOE S.</TableCell>
              <TableCell>20245W14</TableCell>
              <TableCell>johndoe@xyz.com</TableCell>
              <TableCell>+2348123456789</TableCell>
              <TableCell>₦1,000,000</TableCell>
              <TableCell>Lagos West/ Lagos</TableCell>
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