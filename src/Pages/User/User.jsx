import EditUser from "../../components/EditUser/EditUser"
import Profile_header from "../../components/Profile_header"
import Transactions from "../../components/Transactions"

const User = () => {
  return (
    <main className="main bg-dark">
      <Profile_header/>
      <EditUser/>
      <Transactions/>
    </main>
  )
}

export default User