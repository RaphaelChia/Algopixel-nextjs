"use client";
import {
  genRHFRegisterOptionsLength,
  genRHFRegisterOptionsRequired,
} from "@/utils/rhf";
import { FieldValues, useForm } from "react-hook-form";
import { MapIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "@heroicons/react/24/outline";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact1() {
  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm();
  const submitHandler = (data: FieldValues, e:any) => {
    console.log("field values: ", data);
    e.preventDefault();
    if (!formRef.current) return
    console.log(formRef.current)
    emailjs.sendForm('service_pjho77k', 'template_4tg47x3', formRef.current , 't_cr2hag0nIz3hFqm')
      .then((result) => {
          if(result.text.toLowerCase()==="ok"){
            toast("Email sent! We'll be in touch with you shortly.")
          }
      }, (error) => {
          console.log(error.text);
          toast("Trouble sending email. Please drop us an email at XXX.")
      });
  };
  return (
      <div className="flex flex-col lg:flex-row items-center lg:items-start w-full lg:justify-around mb-10">
        <ToastContainer/>
        <div className="flex flex-col gap-[15px] w-full lg:w-fit p-[60px] items-start text-center lg:text-start">
          <span className="text-xl font-bold text-purple w-full">
            Any Queries?
          </span>
          <span className="text-4xl font-bold text-gray-800 mb-[30px] w-full">
            Find Us At
          </span>
          <div className="w-full flex flex-col md:flex-row lg:flex-col gap-[15px] justify-between lg:justify-normal">
            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full">
              <div className="w-[50px] flex items-center justify-center h-[50px]">
                <MapIcon className="w-10 h-10 stroke-purple animate-wiggle" />
              </div>
              <div className="flex flex-col grow text-start md:text-center lg:text-start mx-4 leading-relaxed">
                <span className="text-black text-xl font-bold my-2">Location</span>
                <div className="text-slate-700 flex flex-col">
                  <span>Junction 10 #01-09</span>
                  <span>1 woodlands Rd</span>
                  <span>Singapore 677899</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full ">
              <div className="w-[50px] flex items-center justify-center h-[40px]">
                <EnvelopeIcon className="w-10 h-10 stroke-purple animate-wiggle" />
              </div>
              <div className="flex flex-col grow text-start md:text-center lg:text-start mx-4 leading-relaxed">
                <span className=" text-black text-xl font-bold my-2">Email</span>
                <div className="text-slate-700 flex flex-col">
                  <span>hello@algopixel.sg</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row md:flex-col lg:flex-row justify-center items-center w-full md:w-1/3 lg:w-full">
              <div className="w-[50px] flex items-center justify-center h-[40px]">
                <PhoneIcon className="w-10 h-10 stroke-purple animate-wiggle" />
              </div>
              <div className="flex flex-col grow text-start md:text-center lg:text-start mx-4 leading-relaxed">
                <span className=" text-black text-xl font-bold my-2">Phone</span>
                <div className="text-slate-700 flex flex-col">
                  <span>+65 8800 1637</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col grow w-full lg:w-auto lg:max-w-[800px] p-[60px] gap-[15px] items-center lg:items-start">
          <span className="text-4xl font-bold ">Drop us a line</span>
          <span>We&apos;re here to answer your questions</span>
          <form
            className="flex flex-col gap-[20px] w-full"
            onSubmit={handleSubmit(submitHandler)}
            ref={formRef}
          >
            <div className="relative flex">
              <input
                placeholder="Your Name *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register("from_name", {
                  ...genRHFRegisterOptionsRequired(),
                  ...genRHFRegisterOptionsLength(3, 50),
                })}
              ></input>
              {errors.name && (
                <span className="absolute -bottom-[20px] text-xs text-red-600">
                  {errors.name.message?.toString()}
                </span>
              )}
            </div>
            <div className="relative flex">
              <input
                placeholder="Your Email *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register("from_email", {
                  ...genRHFRegisterOptionsRequired(),
                  ...genRHFRegisterOptionsLength(3, 50),
                  pattern: {
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: "Invalid email",
                  },
                })}
              ></input>
              {errors.email && (
                <span className="absolute -bottom-[20px] text-xs text-red-600">
                  {errors.email.message?.toString()}
                </span>
              )}
            </div>
            <div className="relative flex">
              <input
                placeholder="Your Phone *"
                className="w-full h-[50px] border-[1px] border-slate-200 px-[20px]"
                {...register("from_phone", {
                  ...genRHFRegisterOptionsRequired(),
                  ...genRHFRegisterOptionsLength(3, 12),
                  pattern: {
                    value: /\+65(6|8|9)\d{7}/g,
                    message: "Invalid phone number. e.g. +6599112233",
                  },
                })}
              ></input>
              {errors.phone && (
                <span className="absolute -bottom-[20px] text-xs text-red-600">
                  {errors.phone.message?.toString()}
                </span>
              )}
            </div>
            <div className="relative flex">
              <textarea
                rows={4}
                placeholder="Your Query *"
                className="w-full border-[1px] border-slate-200 p-[20px]"
                {...register("from_query", {
                  ...genRHFRegisterOptionsLength(1, 200),
                })}
              ></textarea>
              {errors.query && (
                <span className="absolute -bottom-[20px] text-xs text-red-600">
                  {errors.query.message?.toString()}
                </span>
              )}
            </div>
            <div className="w-full flex justify-center lg:justify-start">
              <button className="shadow-lg bg-purple w-[180px] h-[50px] rounded-full text-xl font-semibold text-white">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
  );
}
