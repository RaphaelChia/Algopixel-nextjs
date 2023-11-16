'use client'
import PagesBanner from "@/components/Banners/pagesbanner";
import { genRHFRegisterOptionsLength, genRHFRegisterOptionsRequired } from "@/utils/rhf";
import { FieldValues, useForm } from "react-hook-form";

export default function Page() {
  const { register, handleSubmit, setValue, getValues, formState: { errors, dirtyFields } } = useForm()
  const submitHandler = (data: FieldValues) => {
    console.log("field values: ", data)
  }
  return (
    <div>
      <PagesBanner link="/contact" page="Contact" description="Find us" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:justify-around">
        <div className="flex flex-col gap-[15px] w-full lg:w-fit p-[60px] items-start text-center lg:text-start">
          <span className="text-xl font-bold text-purple w-full">Any Queries?</span>
          <span className="text-5xl font-bold text-gray-800 mb-[30px] w-full">Contact Us</span>
          <div className="w-full flex flex-col md:flex-row lg:flex-col gap-[15px] justify-between lg:justify-normal">


            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full">
              <div className="w-[50px] flex items-start h-[50px]">icon</div>
              <div className="flex flex-col grow text-start">
                <span className=" text-black text-xl font-bold">Location</span>
                <div className="text-slate-700 flex flex-col">
                  <span>Junction 10 #01-09</span>
                  <span>1 woodlands Rd</span>
                  <span>Singapore 677899</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full">
              <div className="w-[50px] flex items-start h-[40px]">icon</div>
              <div className="flex flex-col grow text-start">
                <span className=" text-black text-xl font-bold">Email</span>
                <div className="text-slate-700 flex flex-col">
                  <span>hello@algopixel.sg</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full">
              <div className="w-[50px] flex items-start h-[40px]">icon</div>
              <div className="flex flex-col grow text-start">
                <span className=" text-black text-xl font-bold">Phone</span>
                <div className="text-slate-700 flex flex-col">
                  <span>+65 8800 1637</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow w-full lg:w-auto lg:max-w-[800px] p-[60px] gap-[15px] items-center lg:items-start">
          <span className="text-5xl font-bold ">Drop us a line</span>
          <span>We're here to answer your questions</span>
          <form className="flex flex-col gap-[40px] w-full" onSubmit={handleSubmit(submitHandler)}>
            <div className="relative flex">
              <input
                placeholder="Your Name *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register(
                  "name",
                  {
                    ...genRHFRegisterOptionsRequired(),
                    ...genRHFRegisterOptionsLength(3, 50)
                  }
                )}></input>
              {errors.name && <span className="absolute -bottom-[20px] text-xs text-red-600">{errors.name.message?.toString()}</span>}
            </div>
            <div className="relative flex">
              <input
                placeholder="Your Email *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register(
                  "email",
                  {
                    ...genRHFRegisterOptionsRequired(),
                    ...genRHFRegisterOptionsLength(3, 50),
                    pattern: {
                      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Invalid email"
                    }
                  }
                )}></input>
              {errors.email && <span className="absolute -bottom-[20px] text-xs text-red-600">{errors.email.message?.toString()}</span>}

            </div>
            <div className="relative flex">
              <input
                placeholder="Your Phone *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register(
                  "phone",
                  {
                    ...genRHFRegisterOptionsRequired(),
                    ...genRHFRegisterOptionsLength(3, 12),
                    pattern: {
                      value: /\+65(6|8|9)\d{7}/g,
                      message: "Invalid phone number. e.g. +6599112233"
                    }
                  }
                )}></input>
              {errors.phone && <span className="absolute -bottom-[20px] text-xs text-red-600">{errors.phone.message?.toString()}</span>}
            </div>
            <div className="relative flex">
              <textarea
                rows={4}
                placeholder="Your Query *"
                className="w-full border-[1px] border-slate-200 p-[20px]"
                {...register(
                  "query",
                  {
                    ...genRHFRegisterOptionsLength(1, 200)
                  }
                )}></textarea>
              {errors.query && <span className="absolute -bottom-[20px] text-xs text-red-600">{errors.query.message?.toString()}</span>}
            </div>
            <div className="w-full flex justify-center lg:justify-start">

              <button className="shadow-lg bg-purple w-[180px] h-[50px] rounded-full text-xl font-semibold text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}