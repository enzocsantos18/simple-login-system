import React, {createContext, useEffect, useState} from 'react';

type UserInfoType = {
  id: string,
  email: string,
}

interface UserContextData {
  user: UserInfoType;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);



const UserProvider: React.FC = ({ children }) => {

  const [user, setUser] = useState<UserInfoType>({} as UserInfoType );

  useEffect(() => {
    const infos = JSON.parse(localStorage.getItem('auth') as string);
    if(infos){
      setUser({id: infos.id, email: infos.email})
    }  
  }, [])

  return (
    <UserContext.Provider value={{user} as UserContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;