import CategoryFilters from '@/components/CategoryFilters'
import { getProducts } from '@/lib/api'

export default async function page() {
    const products = await getProducts()
    // console.log(products)
    return (
        <div>
            <CategoryFilters products={products} />
        </div>
    )
}
