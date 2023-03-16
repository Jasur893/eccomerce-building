import { createContext, useMemo, useState } from 'react';
import { query, where, getDocs, collection } from "firebase/firestore"; 
import { auth, db } from '../FirebaseConfigs/firebaseConfig'; 
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext()


const UserProvider = ({children}) => {
  const navigate = useNavigate()
  //getUser
  function GetCurrentUser() {
    const [user, setUser] = useState('')
    // const userCollectionRef = collection(db, 'users')
    useMemo(() => {
      auth.onAuthStateChanged(userlogged => {
        if(userlogged){
          const getUsers = async() => {
            const q = query(collection(db, "users"),where("uid", "==", userlogged.uid))
            const data = await getDocs(q)
            setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
          }
          getUsers()
        } else {
          setUser(null)
        }
      })
    },[])
    return user
  }
  const loggeduser =  GetCurrentUser()
  //logOut User
  const handleLogOut = () => {
    auth.signOut()
      .then(() => {
        navigate("/")
      })
  }

  return <UserContext.Provider value={{
      userValue1: loggeduser,
      userValue2: handleLogOut,
    }}
  >
    {children}
  </UserContext.Provider>
}

export default UserProvider