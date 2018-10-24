import users from '../../data/users';

const initalState = {
  users
}

export default function(state = initalState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
