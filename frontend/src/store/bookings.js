import { csrfFetch } from "./csrf";

const SET_BOOKINGS = 'bookings/SET_BOOKINGS';
const LOAD = 'bookings/LOAD';
// const ADD_BOOKING = 'booking/ADD_BOOKING'

const load = (bookings) => ({
    type: LOAD,
    bookings
})

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings
});

// const addABooking = (booking) => ({
//     type:
// });

export const getBookings = () => async dispatch => {
    const books = await csrfFetch('/api/bookings')
    const bookings = await books.json();

    dispatch(load(bookings))
};

export const getOneBooking = (id) => async dispatch => {
    const book = await csrfFetch(`/api/bookings/${id}`)

    if (book.ok) {
        const booking = await book.json()
        dispatch(setBookings(booking))
    }
}

export const createBooking = (payload) => async dispatch => {

    const thisBooking = await csrfFetch('/api/bookings', {
        method: 'POST',
        header: {"Content-Type": 'application/json'},
        body: JSON.stringify(payload)
    });

    const newBooking = await thisBooking.json();

    if (newBooking.ok) dispatch(setBookings(newBooking))

    return newBooking;
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD:
            const loadingBooking = {
                ...state
            }
            action.bookings.forEach((book) => {
                loadingBooking[book.id] = book
            })
            return loadingBooking

            case SET_BOOKINGS:
                const newState = {
                ...state,
                [action.bookings.id]: action.bookings
            }
            return newState;
        default:
            return state;
    }
};

export default bookingsReducer;
