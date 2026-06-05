import { createContext, useContext, useEffect, useState } from "react";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
  const [friends, setFriends] = useState([]);
  const [timelines, setTimelines] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFriends = async () => {
      const res = await fetch("/friends.json");
      const data = await res.json();
      setFriends(data);
      setLoading(false);
    };
    fetchFriends();
  }, []);

  const addTimelineEntry = (friendId, entry) => {
    setTimelines((prev) => ({
      ...prev,
      [friendId]: [{ ...entry, id: Date.now() }, ...(prev[friendId] ?? [])],
    }));
  };

  const getTimeline = (friendId) => timelines[friendId] ?? [];

  return (
    <FriendsContext.Provider value={{ friends, loading, addTimelineEntry, getTimeline }}>
      {children}
    </FriendsContext.Provider>
  );
};

export const useFriends = () => useContext(FriendsContext);