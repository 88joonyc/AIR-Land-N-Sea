// this is where thunks will be created for toys

import { csrfFetch } from "./csrf";

const LOAD = 'toys/LOAD';
const SET_TOYS = 'toys/SET_TOYS';
const UPDATE_TOY = 'toys/UPDATE_TOY';
const REMOVE_TOY = 'toys/REMOVE_TOY'

const load = (toys) => ({
    type: LOAD,
    toys
});

const setToys = (toys) => ({
    type: SET_TOYS,
    toys
});

const update = (toy) => ({
    type: UPDATE_TOY,
    toy
})

const remove = () => ({
    type: REMOVE_TOY,
})

export const getToys = () => async dispatch => {
    const toyCollection = await csrfFetch('/api/toys');
    const toys = await toyCollection.json();
    dispatch(load(toys))
};

export const getOneToy = (id) => async dispatch => {
    const toy = await csrfFetch(`/api/toys/${id}`)
    if (toy.ok) {
        const thisToy = await toy.json()
        dispatch(setToys(thisToy))
    };
};

const initialState = {
    toys: [],
};

const toysReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const allToys = {
                ...state,
            };
            console.log('this is toy action', action)
            action.toys.forEach((toy) => {
                allToys[toy.id] = toy;
            });

            return allToys;

        case SET_TOYS:
            const newState = {
                ...state,
                [action.toys.id]: action.toys
            };
        return newState;

        case REMOVE_TOY: {
            const newState = {...state};
            delete newState[action.toyId]
        };
        case UPDATE_TOY: {
            return {
                ...state,
                [action.toy.id]: action.toy
            }
        }

        default:
            return state;
    };
};

export const createToy = (payload) => async dispatch => {

    const thisToy = await csrfFetch('/api/toys', {
        method: 'POST',
        header: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    });

    const newToy = await thisToy.json();

    if (thisToy.ok) dispatch(setToys(newToy));

    return newToy;
};

export const updateToy = (payload, id) => async dispatch => {

    const toy = await csrfFetch(`/api/toys/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    });

    const editToy = toy.json();

    if (toy.ok) return dispatch(update(editToy));

    return editToy;
}

export const deleteToy = (id) => async dispatch => {
    const deleting = await csrfFetch(`/api/toys/${id}`, {
        method: "DELETE",
    })
    dispatch(remove())
    return deleting
};


export default toysReducer;
