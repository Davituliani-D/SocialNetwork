const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"; 
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"; 

let initialState = {
  users: [
    {
      id: 1,
      photoUrl:
        "https://cdn.dribbble.com/users/5694954/screenshots/13178339/media/eda8b47171a8d2d043a96c5f9a389ca9.jpg?compress=1&resize=400x300",
      followed: true,
      fullName: "Will",
      status: "Junior",
      location: { city: "Tbilisi", country: "Georgia" },
    },
    {
      id: 2,
      photoUrl:
        "https://cdn.dribbble.com/users/5694954/screenshots/13178339/media/eda8b47171a8d2d043a96c5f9a389ca9.jpg?compress=1&resize=400x300",
      followed: false,
      fullName: "Fill",
      status: "Middle",
      location: { city: "Tbilisi", country: "Georgia" },
    },
    {
      id: 3,
      photoUrl:
        "https://cdn.dribbble.com/users/5694954/screenshots/13178339/media/eda8b47171a8d2d043a96c5f9a389ca9.jpg?compress=1&resize=400x300",
      followed: true,
      fullName: "Bill",
      status: "Senior",
      location: { city: "Tbilisi", country: "Georgia" },
    },
  ],
  pageSize: 5,
  totalUsersCount: 20,
  currentPage: 1,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };

    case SET_USERS: {
      return { ...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage }
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUserCount: action.count }
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});

export default usersReducer;
