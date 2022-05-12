// console.log("From index.js")

// Actions
function orderCake() {
    return {
        type: CAKE_ORDERD,
        quantity: 1,
    }
}

const initialState = {
    numOfCakes: 10,
    anotherProperty: 0
}

// Reducers: (previousState, action) => newState
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case CAKE_ORDERD: 
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1,
            }
            default:
                return state;
    }
}