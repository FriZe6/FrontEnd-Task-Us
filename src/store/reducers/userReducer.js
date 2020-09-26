const initialState = {
    users: [],
    loggedUser: {
        "_id": "5f68936cf878123b2cd354436ce96d",
        "username": "guest",
        "fullName": "Guest User",
        "password": "",
        "email": "guest@gmail.com",
        "notifications": [{
            "byUser": {
                "fullName": "Liam Zety"
            },
            "content": "board: Liam Zety Removed a you from the board",
            "createdAt": Date.now() - 1000 * 60 * 2
        },
        {
            "byUser": {
                "fullName": "Sharon Obama"
            },
            "content": "board: Sharon Added you to the board - Caljul20",
            "createdAt": Date.now() - 1000 * 60 * 3
        }],
    },
    userProfile: null
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_USERS':
            return {
                ...state,
                users: action.users
            }
        case 'SHOW_PROFILE':
            return {
                ...state,
                userProfile: action.user
            }
        case 'SET_USER':
            return {
                ...state,
                loggedUser: action.user
            }
        default:
            return state
    }
}