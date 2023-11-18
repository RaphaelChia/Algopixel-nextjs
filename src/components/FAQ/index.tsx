"use client";

import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const faqitems = [
  {
    question: "Who can enroll in your coding enrichment school?",
    response:
      "Our coding school is open to students of all ages, from beginners to advanced coders. We offer different programs tailored to various age groups and skill levels.",
  },
  {
    question: "What programming languages and technologies do you teach?",
    response:
      "We offer a wide range of programming languages and technologies, including but not limited to Python, JavaScript, HTML/CSS, and more. Our curriculum is designed to cover a broad spectrum of coding languages and tools.",
  },
  {
    question:
      "Do I need any prior coding experience to enroll in your courses?",
    response:
      "No, we welcome students with all levels of experience, from complete beginners to experienced coders. Our programs are structured to accommodate different skill levels.",
  },
  {
    question:
      "What is the duration of your programs, and how often are classes held?",
    response: "The duration of our programmes are usually 12 weeks long.",
  },
  {
    question: "Can I attend classes remotely or in-person?",
    response:
      "We offer both in-person and online classes, allowing you to choose the format that best suits your needs and location.",
  },
  {
    question: "How do I enroll in your coding school, and what are the fees?",
    response:
      "To enroll, simply visit our website, fill out the registration form, and select the program you're interested in. The fees vary based on the program, and financial aid or scholarships may be available for eligible students. (to discuss)",
  },
  {
    question:
      "How can I get more information or contact your school for inquiries?",
    response:
      "You can contact us through our contact us page provided on our website, including phone numbers and email addresses. We also have an admissions team ready to answer your questions",
  },
];

export default function Faq() {
  return (
    <div className="bg-white dark:bg-neutral-900 w-full px-4 pt-16 pb-16 mb-8">
      <h2 className="text-4xl font-bold text-center">
        Frequently Asked Questions
      </h2>

      <p className="pt-6 pb-16 text-base max-w-2xl text-center m-auto dark:text-neutral-400">
        Decoding Curiosity: Answers to Common Queries About Algopixel
      </p>
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-transparent dark:bg-transparent">
        {faqitems.map(({ question, response }) => (
          <div key={question}>
            <Disclosure>
              {({ open }) => (
                <div className="mt-4">
                  <Disclosure.Button
                    className={`${
                      open
                        ? "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-100 rounded-b-none"
                        : ""
                    } flex w-full justify-between rounded-lg bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800 px-4 py-4 text-left text-base font-medium `}
                  >
                    <h2 className="font-semibold">{question}</h2>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transition-transform" : ""
                      } h-5 w-5 flex-shrink-0`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel
                    className={`${
                      open
                        ? "px-4 pt-4 pb-2 text-base dark:text-neutral-400"
                        : ""
                    } bg-neutral-100 dark:bg-neutral-800 rounded-b-lg leading-loose`}
                  >
                    <p>{response}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </div>
  );
}
