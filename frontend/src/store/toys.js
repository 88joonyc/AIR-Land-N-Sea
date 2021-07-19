// this is where thunks will be created for toys

const LOAD = 'toys/LOAD'
const SET_TOYS = 'toys/SET_TOYS'

const load = (toys) => ({
    type: LOAD,
    toys
})

const setToys = (toys) => ({
    type: SET_TOYS,
    toys
});

export const getToys = () => async dispatch => {
    const toyCollection = await fetch('/api/toys')
    const toys = await toyCollection.json();

    dispatch(load(toys))
};

export const getOneToy = (id) => async dispatch => {
    const toy = await fetch(`/api/toys/${id}`)

    if (toy.ok) {
        const thisToy = await toy.json()
        dispatch(setToys(thisToy))
    }
}

const initialState = {};

const toysReducer = (state = initialState, action) => {

    console.log(action)

    switch (action.type) {
        case LOAD:
            const allToys = {
                ...state,
            }
            action.toys.forEach((toy) => {
                allToys[toy.id] = toy;
            });

            return allToys;

        case SET_TOYS:
            const newState = {
                ...state,
            }
            action.toys.forEach((toy) => {
                newState[toy.id] = toy;
            });

            return newState;
        default:
            return state;
    }
};

export default toysReducer;


// // this is where thunks will be created for toys

// const SET_TOYS = 'toys/setToys'

// const setToys = (toys) => ({
//     type: SET_TOYS,
//     toys
// });

// export const getToys = () => async dispatch => {
//     const toyCollection = await fetch('/api/toys')
//     const toys = await toyCollection.json();

//     dispatch(setToys(toys))
// };

// export const getOneToy = (id) => async dispatch => {
//     const toy = await fetch(`/api/toys/${id}`)

//     if (toy.ok) {
//         const thisToy = await toy.json()
//         dispatch(setToys(thisToy))
//     }
// }

// const initialState = {

// };

// const toysReducer = (state = initialState, action) => {

//     // console.log(action.id)

//     switch (action.type) {
//         case SET_TOYS:
//             // if (!state[action.toy.id]) {
//                 const newState = {
//                     ...state,
//                     [action.toy.id]: action.toy
//                 };
//                 action.toys.forEach((toy) => {
//                     newState[toy.id] = toy;
//                 });

//                 return newState;
//             // }
//             default:
//                 return {
//                     ...state,
//                     [action.toy.id]: {
//                         ...state[action.toy.id],
//                         ...action.toy
//                     }
//                 };
//     }
// };

// export default toysReducer;








// // this is where thunks will be created for toys

// const LOAD = 'toys/LOAD'
// const SET_TOYS = 'toys/SET_TOYS'

// const load = (toys) => ({
//     type: LOAD,
//     payload: toys
// })

// const setToys = (toys) => ({
//     type: SET_TOYS,
//     payload: toys
// });

// export const getToys = () => async dispatch => {
//     const toyCollection = await fetch('/api/toys')
//     const toys = await toyCollection.json();

//     dispatch(load(toys))
// };

// export const getOneToy = (id) => async dispatch => {
//     const toy = await fetch(`/api/toys/${id}`)


//     if (toy.ok) {
//         const thisToy = await toy.json()

//         console.log('this toy:', thisToy)
//         dispatch(setToys(thisToy))
//     }
// }

// const initialState = {toys: []};

// const toysReducer = (state = initialState, action) => {

//     console.log('this action:', action)

//  switch (action.type) {
//         case SET_TOYS:
//             if (!state[action.toys.id]) {
//                 const newState = {
//                     ...state,
//                     [action.toys.id]: action.toy
//                 };
//                 action.toys.forEach((toy) => {
//                     newState[toy.id] = toy;
//                 });
//                 return newState;
//             }
//             return {
//                 ...state,
//                 [action.toy.id]: {
//                     ...state[action.toy.id],
//                     ...action.toy
//                 }
//             };
//             default:
//                 return state

//     }
// };

// export default toysReducer;
