import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../Reducers/authSlice";
import { updateUserName } from "../../Reducers/apiSlice";

function EditUser() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token); 

  const [showForm, setShowForm] = useState(false);
  const [newUsername, setNewUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  useEffect(() => {
    if (user) {
      setNewUsername(user.username || "");
      setFirstname(user.firstname || "");
      setLastname(user.lastname || "");
    }
  }, [user]);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleInputChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await updateUserName(newUsername, token);
      if (response.status === 200) {
        dispatch(setToken(response.token));
        dispatch({
          type: "SET_USER",
          payload: {
            username: newUsername,
            firstname,
            lastname,
          },
        });
      } else {
        console.error("Erreur lors de l envoi du nouveau nom d utilisateur");
      }
    } catch (error) {
      console.error("Erreur lors de la requête");
    }

    setNewUsername("");
    setShowForm(false);
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
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            disabled
          />

          <label>Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            disabled
          />

          <label>New Username:</label>
          <input
            type="text"
            value={newUsername}
            onChange={handleInputChange}
            required
          />

          <button type="submit" className="transaction-button button">
            Confirm
          </button>
        </form>
      )}
    </>
  );
}

export default EditUser;
