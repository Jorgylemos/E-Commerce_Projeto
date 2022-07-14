const cart: any = [];
const cartHandle = (state = cart, action: any) => {
    const product = action.payload;

    switch (action.type) {
        case "ADDITEM":
            // Checa se o item já existe;
            const exist = state.find((e: any) => e.id === product.id);
            if (exist) {
                // Acrescentar a quantidade
                return state.map((e: any) => e.id === product.id ? {
                    ...e, qty: e.qty + 1
                } : e
                );
            } else {
                const product = action.payload;

                return [
                    ...state, {
                        ...product,
                        qty: 1
                    }
                ]
            }
            break;

        case "DELITEM":
            const exist1 = state.find((e: any) => e.id === product.id);
            if (exist1.qty === 1) {
                return state.filter((e: any) => e.id !== exist1.id);
            } else {
                return state.map((e: any) =>
                    e.id === product.id ? {
                        ...e, qty: e.qty - 1
                    } : e
                );
            }
            break;


        default:
            return state;
            break

    };

}

export default cartHandle