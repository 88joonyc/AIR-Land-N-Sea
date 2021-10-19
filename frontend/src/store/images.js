
import { csrfFetch } from "./csrf";

const LOAD = 'images/LOAD';
const SET_IMAGES = 'images/SET_IMAGE';
const DELETE_IMAGE = 'images/DELETE_IMAGE'

const load = (images) => ({
    type: LOAD,
    images
});

const setImage = (images) => ({
    type: SET_IMAGES,
    images
});

const remove = (imageId) => ({
    type: DELETE_IMAGE,
    imageId
})

export const getImages = (toyId) => async dispatch => {
    const img = await csrfFetch(`/api/images/${toyId}`);
    const images = await img.json();
    dispatch(load(images))
};



const initialState = {
    images: null
}

export const createAlbum = (payload) => async dispatch => {
    const formData = new FormData();
    formData.append("image", payload.imageS3)

    const album = await csrfFetch('/api/images', {
        method: "POST",
        headers: {
            "Content-Type": "multipart/form-data",
        },
        body: formData,
    });
    const albumSet = await album.json();
    dispatch(setImage(albumSet.images));
};

// export const createAlbum = (payload) => async dispatch => {

//     const album = await csrfFetch('/api/images', {
//         method: 'POST',
//         header: {"Content-Type": 'application/json'},
//         body: JSON.stringify(payload)
//     });

//     const albumSet = await album.json();

//     if (album.ok) dispatch(setImage(albumSet));

//     return albumSet;
// };

export const deleteImage = (payload) => async dispatch => {
    const image = await csrfFetch(`/api/images/${payload}`, {
        method: "DELETE"
    })
    dispatch(remove(image))
    return image
}

const imageReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD:
            if (action.images) {
                return {"images": action.images}
            }
        case SET_IMAGES:
            // console.log('this is action.cimages',action.images)
            const imageState = {
                ...state,
                images: action.images
            }
            return imageState;

        case DELETE_IMAGE: {
            return {...state}
        }

        default:
            return state;
    };
};

export default imageReducer;
