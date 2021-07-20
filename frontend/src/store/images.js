
import { csrfFetch } from "./csrf";

const LOAD = 'images/LOAD';
const SET_IMAGES = 'images/SET_IMAGE';

const load = (images) => ({
    type: LOAD,
    images
});

const setImage = (images) => ({
    type: SET_IMAGES,
    images
});

export const getImages = (toyId) => async dispatch => {
    const img = await csrfFetch('/api/images');
    const images = await img.json();
};



const initialState = {
    images: []
}

export const createAlbum = (payload) => async dispatch => {
    const album = await csrfFetch('/api/images', {
        method: 'POST',
        header: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    });

    const albumSet = await album.json();

    if (album.ok) dispatch(setImage(albumSet));

    return albumSet;
};

const imageReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD:
            const newState = {
                ...state,
            };
            action.images.forEach((image) => {
                newState[image.id] = image;
            });
        case SET_IMAGES:
            const imageState = {
                ...state,
                [action.images]: action.images
            }
            action.images.forEach(img => state.images.push(img))
        return imageState;

        default:
            return state;
    };
};

export default imageReducer;
