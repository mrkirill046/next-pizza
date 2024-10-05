import {prisma} from "@/prisma/prisma-client"
import {notFound} from "next/navigation"
import {Container} from "@/components/shared/container"
import {ProductImage} from "@/components/shared/product-image"
import {Title} from "@/components/shared/title"
import {GroupVariants} from "@/components/shared/group-variants"

export default async function Page({params: {id}}: { params: { id: string } }) {
    const product = await prisma.product.findFirst({where: {id: Number(id)}})

    if (!product) {
        return notFound()
    }

    return (
        <Container className={"flex flex-col my-10"}>
            <div className={"flex flex-1"}>
                <ProductImage imageUrl={product.imageUrl} size={40}/>

                <div className={"w-[490px] bg-gray-100 p-7"}>
                    <Title text={product.name} size={"md"} className={"font-extrabold mb-1"}/>
                    <p className={"text-gray-400"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>

                    <GroupVariants
                        selectedValue={"2"}
                        items={[
                            {
                                name: "Маленькая",
                                value: "1"
                            },
                            {
                                name: "Средняя",
                                value: "2"
                            },
                            {
                                name: "Большая",
                                value: "3",
                                disabled: true
                            }
                        ]}
                    />
                </div>
            </div>
        </Container>
    )
}
