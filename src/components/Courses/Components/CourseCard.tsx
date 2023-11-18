import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { HTMLAttributes, ReactNode } from 'react'
import { datatype } from '..';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    key: number;
    item: datatype;
}

export default function CourseCard(props: Props) {
    const item = props.item
    return (
        <div key={props.key} className={cn("overflow-hidden rounded-2xl flex flex-col bg-white", props.className)}>
            <Image src={item.imgSrc} alt={"banner"} width={800} height={400} className="mb-1" />
            <div className="px-[25px]">
                <h3 className="text-2xl font-bold text-darkblue mt-5">{item.heading}</h3>
                <h5 className="text-xs font-normal text-darkblue opacity-70 mt-2">{item.suitable}</h5>
                <h4 className='text-sm font-normal leading-loose text-darkblue opacity-75 my-4'>{item.paragraph}</h4>
            </div>
        </div>
    )
}
