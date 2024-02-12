export async function getProducts() {
    const res = await fetch(`${process.env.BASE_URL}/api/products`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

export async function getProductById(id: string) {
    const res = await fetch(`${process.env.BASE_URL}/api/products/${id}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json()
}

