import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../Reducers/authSlice";
import { updateUserName } from "../../Reducers/apiSlice";

function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token);

  const [showForm, setShowForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    updateUserName(newUsername, token).then((data) =>
      dispatch(setUser(data.body))
    );
  };

  return (
    <>
      <section className="account-header">
        <h1>
          Welcome back
          <br />
          {user?.firstName} {user?.lastName} !
        </h1>
        {!showForm && (
          <button className="transaction-button button" onClick={toggleForm}>
            Edit your name
          </button>
        )}
      </section>

      {showForm && (
        <form className="account-form" onSubmit={handleSubmit}>
          <label>First Name:</label>
          <input type="text" value={user.firstName} disabled />

          <label>Last Name:</label>
          <input type="text" value={user.lastName} disabled />

          <label>New Username:</label>
          <input
            type="text"
            value={newUsername}
            placeholder={user.userName}
            onChange={(e) => setNewUsername(e.target.value)}
            required
          />

          <button
            onSubmit={(e) => handleInputChange(e)}
            type="submit"
            className="transaction-button button"
          >
            Confirm
          </button>
        </form>
      )}
    </>
  );
}

export default EditUser;
