import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import Image from "next/image";

const Signup = () => {
  let [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="hidden md:block">
          <button
            type="button"
            className="bg-purple flex justify-center text-white w-full font-semibold rounded-full border border-purple py-3 px-4 lg:px-8 navbutton hover:bg-white hover:text-purple"
            onClick={openModal}
          >
            Sign Up
          </button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-4">
                      <div>
                        <div className="flex items-center justify-center mb-10">
                          <Link
                            href="/"
                            className="text-2xl font-semibold text-black ml-4"
                          >
                            <Image
                              src="/algopixel/algopixel_logo.png"
                              alt="logo"
                              width={300}
                              height={200}
                            />
                          </Link>
                        </div>
                      </div>
                      <div className="space-y-4">
                      <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Link href="https://forms.gle/UDiEWqC5gGkddNUm8" target="_blank">
                            Holiday Classes - December 2023
                      </Link>
                        </button>
                        <button className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple py-3 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <Link href="https://forms.gle/zH4Ebrrkc3ugx9E37" target="_blank">
                            Weekly Classes - January 2024 onwards
                    </Link>
                        </button>
                    </div>
                    </div>
                  </div>

                  <div className="mt-2 flex justify-end">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Signup;
