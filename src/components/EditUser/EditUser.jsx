import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectToken, selectUser } from '../../Reducers/authSlice';

function EditUser() {
   const dispatch = useDispatch();
   const token = useSelector(selectToken);
   const user = useSelector(selectUser);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState('');
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');

   useEffect(() => {
      if (user) {
         setNewUsername(user.userName);
         setFirstname(user.firstName);
         setLastname(user.lastName);
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
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ userName: newUsername }),
         });

         if (response.ok) {
            dispatch({
               type: 'SET_USER',
               payload: {
                  username: newUsername,
                  firstname: firstname,
                  lastname: lastname,
               },
            });
         } else {
            console.error('Erreur lors de l envoi du nouveau nom d utilisateur');
         }
      } catch (error) {
         console.error('Erreur lors de la requête :', error);
      }

      setNewUsername('');
      setShowForm(false);
   };

   return (
      <>
         <section className="account-header">
            <h1>Welcome back, {firstname} {lastname}!</h1>
            {!showForm && (
               <button className="transaction-button button" onClick={toggleForm}>Edit your name</button>
            )}
         </section>

         {showForm && (
            <form className="account-form" onSubmit={handleSubmit}>
               <label>First Name:</label>
               <input type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} disabled />

               <label>Last Name:</label>
               <input type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} disabled />

               <label>New Username:</label>
               <input type="text" value={newUsername} onChange={handleInputChange} required />

               <button type="submit" className='transaction-button button'>Confirm</button>
            </form>
         )}
      </>
   );
}

export default EditUser;
