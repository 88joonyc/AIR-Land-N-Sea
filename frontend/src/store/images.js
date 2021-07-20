
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

    // console.log(toyId)
    const images = await img.json();
    // let loadImg = []
    // images.forEach(i => {
        // console.log('imgagg', i.toyId)
        // if (i.toyId === Number(toyId)) {
        //     loadImg.push(i)
        // }
        // console.log('load',loadImg)
    // })
    // dispatch(load(loadImg));

    // console.log('img', images)

};

// export const getOneImage = (id) => async dispatch => {

// };

const initialState = {
    images: []
}

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
