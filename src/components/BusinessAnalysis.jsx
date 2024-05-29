import { useEffect, useState } from "react";
import { PromotionCategoryIcon } from "./PromoCategoryIcon";
import { convertToTitleCase, formatDate } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
LineChart, Line
} from 'recharts';
import { Coins, Wallet, Banknote, PersonStanding, Gem, LampDesk, BriefcaseBusiness
} from "lucide-react"

const BusinessAnalysis = () => {
    const revenueData = {
        dates: ["2024-04-25T08:18:02.260+00:00", "2024-04-26T08:18:02.260+00:00", "2024-04-27T08:18:02.260+00:00", "2024-04-28T08:18:02.260+00:00", "2024-04-29T08:18:02.260+00:00"],
        revenues: [500, 200, 250, 170, 400]
    }
    const purchaseData = {
        dates: ["2024-04-25T08:18:02.260+00:00", "2024-04-26T08:18:02.260+00:00", "2024-04-27T08:18:02.260+00:00", "2024-04-28T08:18:02.260+00:00", "2024-04-29T08:18:02.260+00:00"],
        purchases: [1, 2, 0, 1, 3]
    }
    const loginData = {
        dates: ["2024-04-25T08:18:02.260+00:00", "2024-04-26T08:18:02.260+00:00", "2024-04-27T08:18:02.260+00:00", "2024-04-28T08:18:02.260+00:00", "2024-04-29T08:18:02.260+00:00"],
        logins: [2, 3, 4, 1, 5]
    }

    const [businessRevenueData, setBusinessRevenueData] = useState([])
    const [businessPurchaseData, setBusinessPurchaseData] = useState([])
    const [businessLoginData, setBusinessLoginData] = useState([])

    function reformatRevenueData(data){
        let newData = []
        for(var i=0; i<revenueData.dates.length; i++){
            const formattedDate = formatDate(data.dates[i]).split(',')[0]
            const split_date = formattedDate.split(' ')
            let temp = {
                date: split_date.pop() + " " + split_date.pop(),
                revenue: data.revenues[i]
            }
            newData.push(temp)
        }
        setBusinessRevenueData(newData)
    }

    function reformatPurchaseData(data){
        let newData = []
        for(var i=0; i<revenueData.dates.length; i++){
            const formattedDate = formatDate(data.dates[i]).split(',')[0]
            const split_date = formattedDate.split(' ')
            let temp = {
                date: split_date.pop() + " " + split_date.pop(),
                purchases: data.purchases[i]
            }
            newData.push(temp)
        }
        setBusinessPurchaseData(newData)
    }

    function reformatLoginData(data){
        let newData = []
        for(var i=0; i<revenueData.dates.length; i++){
            const formattedDate = formatDate(data.dates[i]).split(',')[0]
            const split_date = formattedDate.split(' ')
            let temp = {
                date: split_date.pop() + " " + split_date.pop(),
                logins: data.logins[i]
            }
            newData.push(temp)
        }
        setBusinessLoginData(newData)
    }

    useEffect(()=>{
        reformatRevenueData(revenueData)
        reformatLoginData(loginData)
        reformatPurchaseData(purchaseData)
    }, [])


    return (
        <div className="w-[125%]">
            <div className="flex items-center my-4">
                <h1  className=" p-3 font-normal text-sm text-slate-500"> Your Analytics For:  &nbsp;&nbsp;&nbsp; <span className="text-2xl text-slate-700 font-normal">Your  Business </span></h1>
                <BriefcaseBusiness size={35}/>
            </div>
            <div>
            <div className="flex gap-6">
                    <div id="line-graph-logins-vs-time" className="bg-white rounded-2xl p-6 w-fit my-5">
                        <div className="p-4 pt-0">
                            <h3 className="text-slate-500 font-normal text-lg">Logins Vs Time Analytics</h3>
                        </div>
                        <LineChart width={650} height={200} data={businessLoginData} className="text-xs" >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="logins" stroke="#8884d8" />
                        </LineChart>
                    </div>
                    <div className="flex flex-col justify-around">
                        <div id="purchase-conversion-rate" className="flex h-2/5 bg-white rounded-2xl items-center gap-5 p-5 justify-around">
                            <div className="rounded-full bg-green-100 p-2">
                                <Wallet/>
                            </div>
                            
                            <div className="flex-col ">
                                <h2 className="text-3xl mb-3">58%</h2>
                                <h4 className="text-xs font-medium text-slate-600">Purchase Conversion Rate</h4>
                            </div>
                        </div>
                        <div id="promotion-conversion-rate" className="flex h-2/5 bg-white rounded-2xl items-center gap-5 p-5 justify-around">
                            <div className="rounded-full bg-blue-100 p-2">
                                <Banknote/>
                            </div>
                            
                            <div className="flex-col ">
                                <h2 className="text-3xl mb-3">21%</h2>
                                <h4 className="text-xs font-medium text-slate-600">Promotion Conversion Rate</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around gap-8">
                    <div id="bar-graph-revenue-vs-time" className="bg-white rounded-2xl p-6 w-fit my-5">
                        <div className="p-4 pt-0">
                            <h3 className="text-slate-500 font-normal text-lg">Revenue Vs Time Analytics</h3>
                        </div>
                        <BarChart
                            className="text-xs"
                                width={430}
                                height={300}
                                data={businessRevenueData}
                                maxBarSize={20}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                                >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip shared={false} trigger="click" />
                            <Legend />
                            <Bar dataKey="revenue" fill="#8884d8" />
                        </BarChart>
                    </div>
                    <div id="line-graph-purchases-vs-time" className="bg-white rounded-2xl p-6 w-fit my-5">
                        <div className="p-4 pt-0">
                            <h3 className="text-slate-500 font-normal text-lg">Purchases Vs Time Analytics</h3>
                        </div>
                        <LineChart width={400} height={300} data={businessPurchaseData} className="text-xs" >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="purchases" stroke="#8884d8" />
                        </LineChart>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default BusinessAnalysis

