import { csrfFetch } from "./csrf";

const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const UPDATE_USER = 'session/UPDATE_USER'

// const RESTORE_USER = 'session/restoreUser';

// what is expected from serssion with an actve user:

// {
//   user: {
//     id,
//     email,
//     username,
//     createdAt,
//     updatedAt
//   }
// }

const setUser = (user) => {
    return {
        type: SET_USER,
        payload: user,
    };
};

// what is expected from session with no active user:

// {
//   user: null
// }

const removeUser = (userId) => {
    return {
        type: REMOVE_USER,
    };
};

const update = (user) => ({
    type: UPDATE_USER,
    user
})

// login thunk action

export const login = (user) => async dispatch => {
    const { credential, password } = user;
    const loginUser = await csrfFetch('/api/session', {
        method: "POST",
        body: JSON.stringify({
            credential,
            password,
        }),
    });

    const data = await loginUser.json();
    dispatch(setUser(data.user));
    return loginUser;
};

const initialState = { user: null };

// session reducer

const sessionReducer = (state = initialState, action) => {
    let newState;
    switch(action.type) {
        case SET_USER:
            newState = Object.assign({}, state);
            newState.user = action.payload;
            return newState;
        case REMOVE_USER:
            newState = Object.assign({}, state);
            newState.user = null;
            return newState;
        case UPDATE_USER:
            return {
                ...state,
                [action.user.id]: action.user
            };
        default:
            return state;
    }
};

export const restoreUser = () => async dispatch => {
    const restoreUser = await csrfFetch('/api/session');
    const data = await restoreUser.json();

    dispatch(setUser(data.user))
    return restoreUser
}

export const signUpUser = (user) => async dispatch => {
    const { firstName, lastName, username, email, password} = user
    const newUser = await csrfFetch('/api/users', {
        method: "POST",
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            email,
            password,
        })

    })
    const data = await newUser.json();
    dispatch(setUser(data.user))
    return newUser
}

export const loggingOut = () => async dispatch => {
    const logOut = await csrfFetch('/api/session', {
        method: "DELETE",
    })
    dispatch(removeUser())
    return logOut
};

export const editUser = (payload, id) => async dispatch => {
    const resUser = await csrfFetch(`/api/session/${id}`, {
        method: 'PUT',
        body: JSON.stringify({payload})
    });

    const editThisUser = resUser.json();

    if (resUser.ok) return dispatch(update(editThisUser))

    return editThisUser;
};

export default sessionReducer;
