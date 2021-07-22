import { csrfFetch } from "./csrf";

const SET_BOOKINGS = 'bookings/SET_BOOKINGS';
const LOAD = 'bookings/LOAD';
const UPDATE_BOOKING = 'bookings/UPDATE_BOOKING';
const DELETE = 'bookings/DELETE';

const load = (bookings) => ({
    type: LOAD,
    bookings
})

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings
});

const update = (bookings) => ({
    type: UPDATE_BOOKING,
    bookings
});

const remove = () => ({
    type: DELETE
});

export const getBookings = () => async dispatch => {
    const books = await csrfFetch('/api/bookings')
    const bookings = await books.json({
        // where: {
        //     include: User
        // }
    });

    dispatch(load(bookings))
};

export const getOneBooking = (id) => async dispatch => {
    const book = await csrfFetch(`/api/bookings/${id}`)
        if (book.ok) {
            const booking = await book.json()
            if (booking) {
                dispatch(setBookings(booking))
            }
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

            case UPDATE_BOOKING: {
                return {
                    ...state,
                    [action.bookings.id]: action.bookings
                }
            }

            case DELETE: {
                const newState = {...state};
                delete newState[action.bookings.id]
            }
        default:
            return state;
    }
};

export const updateBooking = (payload, id) => async dispatch => {

    const book = await csrfFetch(`/api/booking/${id}`, {
        method: "PUT",
        body: JSON.stringify(payload)
    })
    const edited = book.json();

    if(book.ok) return dispatch(update(edited));
    return edited;
};

export const deleteBooking = (id) => async dispatch => {
    const deleting = await csrfFetch(`/api/booking/${id}`, {
        method: "DELETE",
    });
    dispatch(remove())
    return deleting
};

export default bookingsReducer;
