import { csrfFetch } from "./csrf";

const LOAD = 'reviews/LOAD';
const SET_REVIEW = 'reviews/SET_REVIEW';
const UPDATE_REVIEW = 'reviews/UPDATE_REVIEW';
const REMOVE_REVIEW = 'reviews/REMOVE_REVIEW';

const load = (reviews) => ({
    type: LOAD,
    reviews
});

const setReview = (reviews) => ({
    type: SET_REVIEW,
    reviews
});

const update = (review) => ({
    type: UPDATE_REVIEW,
    review
})

const remove = () => ({
    type: REMOVE_REVIEW,
})

const initialState = {
    reviews: []
}

export const getReviews = (id) => async dispatch => {
//     const res = await csrfFetch(`/api/toys/${id}`)
//     const review = res.json();
//     // if (res.ok) {
//         dispatch(load(review))
//     // }
};

const reviewReducer = (state = initialState, action) => {
    console.log('this si an action',action)
    switch (action.type) {
        case LOAD:
            const thisReview = {
                ...state,
            };
            action.reviews.forEach((review) => {
                thisReview[review.id] = review;
            });

            return thisReview;

        case SET_REVIEW:
            const newState = {
                ...state,
                [action.reviews.id]: action.reviews
            };
        return newState;

        case REMOVE_REVIEW: {
            const newState = {...state};
            delete newState[action.reviewId]
        };
        case UPDATE_REVIEW: {
            return {
                ...state,
                [action.review.id]: action.review
            }
        }

        default:
            return state;
    };
};

export const createReview = (payload) => async dispatch => {

    const thisRev = await csrfFetch('/api/reviews', {
        method: 'POST',
        header: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    });

    const review = await thisRev.json();

    if (thisRev.ok) dispatch(setReview(review));

    return review;
};

export const updateReview = (payload, id) => async dispatch => {

    const res = await csrfFetch(`/api/reviews/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    });

    const review = res.json();

    if (res.ok) return dispatch(update(review));

    return review;
}

export const deleteReview = (id) => async dispatch => {
    const deleting = await csrfFetch(`/api/reviews/${id}`, {
        method: "DELETE",
    })
    dispatch(remove())
    return deleting
};


export default reviewReducer;
