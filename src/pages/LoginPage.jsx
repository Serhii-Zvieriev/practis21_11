import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/auth/auth-operation";

const initialState = {
  email: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "email":
      return { ...state, [action.type]: action.payload };
    case "password":
      return { ...state, [action.type]: action.payload };
    default:
      return state;
  }
}

export function LoginPage() {
  const [state, setState] = useReducer(reducer, initialState);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(state));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={state.email}
        onChange={(e) =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={(e) =>
          setState({ type: e.target.name, payload: e.target.value })
        }
      />
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
