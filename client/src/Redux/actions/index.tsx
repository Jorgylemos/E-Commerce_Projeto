// For Add Item to Cart
export const addItem = (product: any) => {
    return {
        type: 'ADDITEM',
        payload: product
    }
}

// For Delete Item from Cart
export const delItem = (product: any) => {
    return {
        type: 'DELITEM',
        payload: product
    }
}
