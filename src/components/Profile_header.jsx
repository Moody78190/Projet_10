import { selectUser } from "../Reducers/authSlice"
import { useSelector } from "react-redux"

const Profile_header = () => {
  const user = useSelector(selectUser)

  return (
    <div className="header">
      <h1>Welcome back<br />{user?.firstName} {user?.lastName} !</h1>
      <h2 className="sr-only">Accounts</h2>
    </div>
  )
}

export default Profile_header