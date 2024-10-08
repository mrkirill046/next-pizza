"use client"

import React, {useEffect, useRef} from "react"
import {Title} from "./title"
import {useIntersection} from "react-use"
import {cn} from "@/lib/utils"
import {ProductCart} from "./product-cart"
import {useCategoryStore} from "@/store/category"

interface Props {
    title: string
    items: any[]
    className?: string
    listClassName?: string
    categoryId: number
}

export const ProductsGroupList: React.FC<Props> = (
    {
        title,
        items,
        className,
        listClassName,
        categoryId
    }
) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = useRef(null)
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4
    })

    useEffect(() => {
        if(intersection?.isIntersecting) {
            setActiveCategoryId(categoryId)
        }
    }, [categoryId, intersection?.isIntersecting, setActiveCategoryId])

    return (
        <div className={className} id={title} ref={intersectionRef}>
            <Title text={title} size={"lg"} className={"font-extrabold mb-5"}/>

            <div className={cn("grid grid-cols-3 gap-[50px]", listClassName)}>
                {items.map((product: any, index: number) => (
                    <ProductCart
                        key={index}
                        ingredients={product.ingredients}
                        id={product.id}
                        name={product.name}
                        price={product.items[0].price}
                        imageUrl={product.imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

