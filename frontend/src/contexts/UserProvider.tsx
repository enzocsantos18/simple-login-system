import React, {createContext, useEffect, useState} from 'react';

type UserInfoType = {
  id: string,
  email: string,
  name: string,
  isConfirmed: boolean,
}

interface UserContextData {
  user: UserInfoType;
  setUserInfo: () => void;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);



const UserProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserInfoType>({} as UserInfoType );


  const setUserInfo = () => {
    const infos = JSON.parse(localStorage.getItem('auth') as string);
    if(infos){
      setUser({id: infos.id, email: infos.email, name: infos.name, isConfirmed: infos.isConfirmed})
    }  
  }
  useEffect(() => {
    setUserInfo();
  }, [])

  return (
    <UserContext.Provider value={{user, setUserInfo} as UserContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;