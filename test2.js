const actions = [
    { type: 'update_hp', payload: -200 },
    { type: 'update_pos', payload: { x: 5, y: -10 } }
];

const initialState = {
    hp: 1000,
    xPosition: 200,
    yPosition: 200
};

const reducer = (state, action) => {
    switch (action.type){

        case 'update_hp':
            return{...state,hp:state.hp+action.payload};

        case 'update_pos':
            return{
            ...state, xPosition: state.xPosition+action.payload.x,
            yPosition: state.xPosition+action.payload.y
            };

        default:
            return state;
        }

    
    // return state; // delete this line and replace it with a switch statement
};

const state = actions.reduce(reducer, initialState);
console.log(state);