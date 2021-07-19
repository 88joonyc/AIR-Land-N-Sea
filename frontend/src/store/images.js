
import { csrfFetch } from "./csrf";

const LOAD = 'images/LOAD';
const SET_IMAGE = 'images/SET_IMAGE';

const load = (images) => ({
    type: LOAD,
    images
});

const setImage = (images) => ({
    type: SET_IMAGE,
    images
});

export const getImages = () => async dispatch => {
    const img = await csrfFetch('/api/images');
    const images = await img.json();

    dispatch(load(images));
};

// export const getOneImage = (id) => async dispatch => {

// };

initialState = {
    images = []
}

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:



    }
};

export default imageReducer;
