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


export const getReviews = (id) => async dispatch => {
    const res = await csrfFetch(`/api/reviews/${id}`)
    const review = await res.json();
    dispatch(load(review))
};

const initialState = {
    reviews: null
}

const reviewReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOAD:
            if (action.reviews) {
                return {"reviews": action.reviews}
            }

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
        return

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
