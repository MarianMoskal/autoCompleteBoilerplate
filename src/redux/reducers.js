const INITIAL_STATE = { users: [] };

export const usersReducer = (state = INITIAL_STATE.users, { type, payload }) => {
    switch (type) {
        case 'fetchUsers':
            return [...state, ...payload];

        default:
            return state;
    }
};