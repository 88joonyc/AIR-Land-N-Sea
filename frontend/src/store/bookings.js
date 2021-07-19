const SET_BOOKINGS = 'bookings/setBookings'

const setBookings = (bookings) => ({
    type: SET_BOOKINGS,
    bookings
});

export const getBookings = () => async dispatch => {
    const books = await fetch('/api/bookings')
    const bookings = await books.json();

    dispatch(setBookings(bookings))
};

const initialState = {};

const bookingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_BOOKINGS:
            const newState = {...state}
            action.bookings.forEach((booking) => {
                newState[booking.id] = booking;
            });

            return newState;
        default:
            return state;
    }
};

export default bookingsReducer;