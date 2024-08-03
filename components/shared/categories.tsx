import { cn } from "@/lib/utils";
import React from "react";

interface Props {
    className?: string;
}

const cats = ['Светлое', 'Тёмное', 'Пшеничное', 'IPA (India Pale Ale)', 'Стаут', 'Портер', 'Лагер', 'Эль'];
const activeIndex = 1;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map((cat, index) => (
                    <a
                        key={index}
                        className={cn('flex items-center font-bold h-11 rounded-2xl px-5', {
                            'bg-white shadow-md shadow-gray-200 text-primary': index === activeIndex,
                        })}
                    >
                        <button>{cat}</button>
                    </a>
                ))
            }
        </div>
    )
}