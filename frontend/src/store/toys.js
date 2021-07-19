// this is where thunks will be created for toys

const SET_TOYS = 'toys/setToys'

const setToys = (toys) => ({
    type: SET_TOYS,
    toys
});

export const getToys = () => async dispatch => {
    const toyCollection = await fetch('/api/toys')
    const toys = await toyCollection.json();

    dispatch(setToys(toys))
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
    switch (action.type) {
        case SET_TOYS:
            const newState = {...state}
            action.toys.forEach((toy) => {
                newState[toy.id] = toy;
            });

            return newState;
        default:
            return state;
    }
};

export default toysReducer;
