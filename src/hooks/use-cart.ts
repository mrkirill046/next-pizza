import {useEffect} from "react"
import {useCartStore} from "../store/cart"
import {CreateCartItemValues} from "@/components/services/dto/cart.dto"
import {CartStateItem} from "../lib/get-cart-details"

type ReturnProps = {
    totalAmount: number
    items: CartStateItem[]
    loading: boolean
    updateItemQuantity: (id: number, quantity: number) => void
    removeCartItem: (id: number) => void
    addCartItem: (values: CreateCartItemValues) => void
}

export const useCart = (): ReturnProps => {
    const cartState = useCartStore((state) => state)

    useEffect(() => {
        cartState.fetchCartItems().then(() => console.log("Fetch cart items"))
    }, []) // WARNING: DONT ADD cartState!!!

    return cartState
}
