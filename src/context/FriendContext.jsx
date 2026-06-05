import { createContext, useContext, useEffect, useState } from "react";
import getFriends from "../lib/Call";


const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    const fetchFriends = async () => {
        const data = await getFriends();
        
        setFriends(data);
        setLoading(false);
        
    };

    fetchFriends();
    
    }, []);
    
  return (
    <FriendsContext.Provider value={{ friends, loading }}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);