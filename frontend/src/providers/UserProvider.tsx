import React, {createContext, useEffect, useState} from 'react';
import { useHistory } from 'react-router';

type UserInfoType = {
  id: string,
  email: string,
}

type UserInfoParam = {
  id: string,
  email: string,
  token: string,
}

interface UserContextData {
  user: UserInfoType;
  token: string ;
  handleLogin(userInfo: UserInfoParam): void;
  handleLogout(): void;
}

export const UserContext = createContext<UserContextData>({} as UserContextData);



const UserProvider: React.FC = ({ children }) => {

  const [token, setToken] = useState('');
  const [user, setUser] = useState<UserInfoType>({} as UserInfoType );

  const history = useHistory();


  useEffect(() => {
    const infos = JSON.parse(localStorage.getItem('auth') as string);

    if(infos){
      setToken(infos.token)
      setUser({id: infos.id, email: infos.email})
    }
  }, [])

  function handleLogin(userInfo: UserInfoParam){
    localStorage.setItem('auth', JSON.stringify(userInfo))
    if(userInfo){
      setToken(userInfo.token)
      setUser({id: userInfo.id, email: userInfo.email})
    }
  }

  function handleLogout(){
    localStorage.removeItem('auth');
    setToken('');
    setUser({} as UserInfoType);
    history.push('/login')
  
  }

  return (
    <UserContext.Provider value={{token,user, handleLogin,handleLogout} as UserContextData}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;