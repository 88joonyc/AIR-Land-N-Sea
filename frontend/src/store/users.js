import { csrfFetch } from "./csrf";

const LOAD = 'users/LOAD'


const load = (users) => ({
    type: LOAD,
    users,
})

const initialState = {users: null}

const usersReducer = (state = initialState, action) => {

    switch(action.type) {
        case LOAD:
        const users = {
            ...state,
            };
            action.users.forEach((user) => {
                users[user.id] = user;
            });

            return users


        default:
            return state;
    }
};

export const getUsers = () => async disptch => {
    const use = await csrfFetch('/api/users/');
    const user = await use.json();
    disptch(load(user))
};


export default usersReducer;
