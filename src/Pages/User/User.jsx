import EditUser from "../../components/EditUser/EditUser";
import Transactions from "../../components/Transactions";
import { getUser } from "../../Reducers/apiSlice";
import { useEffect } from "react";
import { selectToken, setUser } from "../../Reducers/authSlice";
import { useSelector, useDispatch } from "react-redux";

const User = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    getUser(token).then((data) => {
      dispatch(setUser(data.body));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="main bg-dark">
      <EditUser />
      <Transactions />
    </main>
  );
};

export default User;
