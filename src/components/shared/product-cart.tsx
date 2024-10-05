import React from "react"
import Link from "next/link"
import {Title} from "./title"
import {Button} from "../ui/button"
import {Plus} from "lucide-react"

interface Props {
    id: number
    name: string
    price: number
    imageUrl: string
    className?: string
}

export const ProductCart: React.FC<Props> = (
    {
        id,
        name,
        price,
        imageUrl,
        className
    }
) => {
    return (
        <div className={className}>
            <Link href={`/product/${id}`}>
                <div className={"flex justify-center p-6 bg-secondary rounded-lg h-[260px]"}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={imageUrl}
                        alt={`${name} Product Image`}
                        className={"w-[215px] h-[215px]"}
                        loading={"lazy"}
                    />
                </div>

                <Title text={name} size={"sm"} className={"mb-1 mt-3 font-bold"}/>

                <p className={"text-sm text-gray-400"}>
                    Цыплёнок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок
                </p>

                <div className={"flex justify-between items-center mt-4"}>
                    <span className={"text-[20px]"}>
                        от <b>{price} ₽</b>
                    </span>

                    <Button variant={"secondary"} className={"text-base font-bold"}>
                        <Plus size={20} className={"mr-1"}/> Добавить
                    </Button>
                </div>
            </Link>
        </div>
    )
}
