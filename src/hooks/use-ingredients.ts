import {Api} from "@/components/services/api-client"
import {Ingredient} from "@prisma/client"
import {useEffect, useState} from "react"
import {useSet} from "react-use"

interface ReturnProps {
    ingredients: Ingredient[]
    loading: boolean
    selectedIngredients: Set<string>
    onAddId: (id: string) => void
}

export const useIngredients = (): ReturnProps => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedIds, {toggle}] = useSet(new Set<string>([]))

    useEffect(() => {
        async function fetchIngredients() {
            try {
                setLoading(true)
                const ingredients = await Api.ingredients.getAll()
                setIngredients(ingredients)
            } catch (error) {
                console.log(error)
            } finally {
                setLoading(false)
            }
        }

        fetchIngredients().then(() => console.log("Fetch ingredients"))
    }, [])

    return {
        ingredients,
        loading,
        onAddId: toggle, selectedIngredients: selectedIds
    }
}
