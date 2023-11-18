"use client";

import { PencilIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
 
const TABLE_HEAD = ["Course", "Date", "Time", "Mode",  "Price", "Details"];
 
const TABLE_ROWS = [
  {
    img: "/courses/thunkable.png",
    name: "Thunkable",
    date: "Sunday, 3 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "In-person",
    price: "$220",
    details: "App Development | Suitable for 10-12 years old",
  },
  {
    img: "/courses/python.png",
    name: "Python",
    date: "Friday, 8 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "Online",
    price: "$180",
    details: "Computer Science | 10-18 years old",
  },
  {
    img: "/courses/scratch.png",
    name: "Scratch",
    date: "Sunday, 10 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "In-person",
    price: "$220",
    details: "Game Development | 7-9 years old",
  },
  {
    img: "/courses/webdev.png",
    name: "HTML/CSS",
    date: "Tuesday, 12 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "Online",
    price: "$180",
    details: "Web Development | 10-18 years old",
  },
  {
    img: "/courses/scratch.png",
    name: "Scratch",
    date: "Thursday, 14 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "Online",
    price: "$180",
    details: "Game Development | 7-9 years old",
  },
  {
    img: "/courses/python.png",
    name: "Python",
    date: "Saturday, 16 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "Online",
    price: "$180",
    details: "Computer Science | 10-18 years old",
  },
  {
    img: "/courses/webdev.png",
    name: "HTML/CSS",
    date: "Sunday, 17 Dec 2023",
    time: "9:00am-2.00pm",
    mode: "In-person",
    price: "$220",
    details: "Web Development | 10-18 years old",
  },
];
 
export function HolidayClasses() {
  return (
    <div className="bg-gradient-to-b from-[#F0F6FB] to-white-300 p-5">
    <Card className="m-12 ">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="m-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Typography variant="h5" color="blue-gray">
              December 2023 Class Schedule
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              These are details about our upcoming classes
            </Typography>
          </div>
          {/* <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72">
              <Input
                label="Search"
                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
              />
            </div>
            <Button className="flex items-center gap-3" size="sm">
              <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" /> Download
            </Button>
          </div> */}
        </div>
      </CardHeader>
      <CardBody className="overflow-none px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody >
            {TABLE_ROWS.map(
              (
                {
                  img,
                  name,
                  date,
                  time,
                  mode,
                  price,
                  details,
                },
                index,
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
 
                return (
                  <tr key={name} className="hover:bg-purple hover:bg-opacity-20">
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
                          className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                        />
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-bold"
                        >
                          {name}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {time}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mode}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {price}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {details}
                      </Typography>
                    </td>
                    {/* <td className={classes}>
                      <div className="w-max">
                        <Chip
                          size="sm"
                          variant="ghost"
                          value={status}
                          color={
                            status === "paid"
                              ? "green"
                              : status === "pending"
                              ? "amber"
                              : "red"
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                          <Avatar
                            src={
                              account === "visa"
                                ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                            }
                            size="sm"
                            alt={account}
                            variant="square"
                            className="h-full w-full object-contain p-1"
                          />
                        </div>
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal capitalize"
                          >
                            {account.split("-").join(" ")} {accountNumber}
                          </Typography>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal opacity-70"
                          >
                            {expiry}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <Tooltip content="Edit User">
                        <IconButton variant="text">
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td> */}
                  </tr>
                );
              },
            )}
          </tbody>
        </table>
      </CardBody>
      {/* <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm">
          Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton variant="outlined" size="sm">
            1
          </IconButton>
        </div>
        <Button variant="outlined" size="sm">
          Next
        </Button>
      </CardFooter> */}
    </Card>
    </div>
  );
}