"use client"

import { Button } from "@/components/ui/button"
import { CurrencyIcon, DotIcon, GroupIcon, HelpCircleIcon, MoreVerticalIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BarChart, CurvedlineChart } from "@/components/component/stats-chart"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const page = () => {
  return (
    <div>
      <Card className="bg-[#E5E5E5] p-6 rounded-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Statistics</h1>
          <div className="text-sm text-gray-500">9 February 2024</div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-[#F0FDF4] p-4">
            <CardContent className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Total Users</p>
              <GroupIcon className="text-[#4ADE80]" />
              <p className="text-2xl font-bold">126</p>
            </CardContent>
          </Card>
          <Card className="bg-[#FEF3C7] p-4">
            <CardContent className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Revenue</p>
              <CurrencyIcon className="text-[#FDE047]" />
              <p className="text-2xl font-bold">₦265,795</p>
            </CardContent>
          </Card>
          <Card className="bg-[#FEF3C7] p-4">
            <CardContent className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Total Deposits</p>
              <CurrencyIcon className="text-[#FDE047]" />
              <p className="text-2xl font-bold">79</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F0FDF4] p-4">
            <CardContent className="flex flex-col space-y-2">
              <p className="text-sm text-gray-500">Total Groups</p>
              <GroupIcon className="text-[#4ADE80]" />
              <p className="text-2xl font-bold">17</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-4">
          {/* <Card className="col-span-1">
            <CardContent>
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">All Requests</h2>
                <DotIcon className="text-gray-600" />
              </div>
              <div className="mt-4">
                <Badge variant="secondary">1132 Requests</Badge>
              </div>
            </CardContent>
          </Card> */}
          <Card className="col-span-3">
            <CardContent>
              <div className="flex justify-between items-center p-2">
                <h2 className="text-xl font-bold">Revenue Overview</h2>
                <div className="flex items-center justify-center space-x-3">
                  <div className="w-[10rem]">
                    <Select>
                      <SelectTrigger id="month">
                        <SelectValue placeholder="This Month" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="january">January</SelectItem>
                        <SelectItem value="february">February</SelectItem>
                        <SelectItem value="march">March</SelectItem>
                        <SelectItem value="april">April</SelectItem>
                        <SelectItem value="may">May</SelectItem>
                        <SelectItem value="june">June</SelectItem>
                        <SelectItem value="july">July</SelectItem>
                        <SelectItem value="august">August</SelectItem>
                        <SelectItem value="september">September</SelectItem>
                        <SelectItem value="october">October</SelectItem>
                        <SelectItem value="november">November</SelectItem>
                        <SelectItem value="december">December</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="w-[10rem]">
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="2022" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2022">2022</SelectItem>
                        <SelectItem value="2023">2023</SelectItem>
                        <SelectItem value="2024">2024</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>  
                <MoreVerticalIcon className="text-gray-600" />
              </div>
              <CurvedlineChart className="w-full h-[300px]" />
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-4">
          <Card className="col-span-2">
            <CardContent>
              <div className="flex justify-between items-center p-5">
                <h2 className="text-xl font-bold">Transactions</h2>
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    Today
                  </Button>
                  <span className="text-sm text-gray-500">09/04/2023</span>
                  <MoreVerticalIcon className="text-gray-600" />
                </div>
              </div>
              <BarChart className="w-full h-[300px]" />
            </CardContent>
          </Card>
          <Card className="col-span-1">
            <CardContent className="p-3">
              <div className="flex justify-between">
                <h2 className="text-xl font-bold">Cards</h2>
                <MoreVerticalIcon className="text-gray-600" />
              </div>
              <div className="flex justify-around mt-4">
                <div>
                  <p className="text-2xl font-bold">05</p>
                  <p className="text-sm text-gray-500">Physical</p>
                </div>
                <div>
                  <p className="text-2xl font-bold">05</p>
                  <p className="text-sm text-gray-500">Virtual</p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">Drivers</h3>
                <div className="mt-2">
                  <Avatar>
                    <AvatarImage alt="Ayo Okoye" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>AO</AvatarFallback>
                  </Avatar>
                  <span className="ml-2 font-medium">Ayo Okoye</span>
                  <Badge className="ml-auto" variant="secondary">
                    +40
                  </Badge>
                </div>
                <div className="mt-2">
                  <Avatar>
                    <AvatarImage alt="Owolabi Ajif" src="/placeholder.svg?height=32&width=32" />
                    <AvatarFallback>OA</AvatarFallback>
                  </Avatar>
                  <span className="ml-2 font-medium">Owolabi Ajif</span>
                  <Badge className="ml-auto" variant="secondary">
                    +60
                  </Badge>
                </div>
              </div>
              <Button className="mt-4 w-full justify-center" variant="ghost">
                <HelpCircleIcon className="text-gray-600" />
                <span className="ml-2">Support</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Card>
    </div>
  )
}

export default page