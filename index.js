const { createStore } = require("redux");

const BUY_CAKE = 'BUY_CAKE'
// Defining action object
const reduxAction={
    type: BUY_CAKE
}

// Define ActionCreator
function actionCreator(){
    return reduxAction;
}

const initalCake = {
    numOfCake: 6
}
// reducer
// reducer= (initialState, action) => updatedState
const reducer = (state= initalCake, action) => {
    switch (action.type) {
        case BUY_CAKE:
            
            return{
                ...state,
                numOfCake: state.numOfCake - 1
            }
    
        default:
            return state
    }
}

// createing store
const store = createStore(reducer)
console.log('Initial State', store.getState())
store.subscribe(() => console.log('Updated redux state', store.getState() ))

store.dispatch(actionCreator())
store.dispatch(actionCreator())
store.dispatch(actionCreator())

