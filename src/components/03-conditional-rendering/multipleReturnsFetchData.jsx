import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setISLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [{ name, avatar_url, bio }, setUser] = useState({
    name: "",
    avatar_url: "",
    bio: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rss = await fetch(url);
        if (!rss.ok) {
          setIsError(true);
          setISLoading(false);
          return;
        }
        const user = await rss.json();
        setUser(user);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
      setISLoading(false);
    };
    fetchData();
  }, []);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error...</h2>;
  }
  // const [name, bio, avatar_url] = user {will also work instead of changing it at the top.}
  return (
    <div>
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
