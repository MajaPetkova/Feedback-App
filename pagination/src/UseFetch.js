import { useState, useEffect } from "react";
import { paginate } from "./util";


const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const UseFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProfiles = async () => {
    const res = await fetch(url);
    const data = await res.json();
    paginate(data)
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getProfiles();
  }, []);
  return { data, loading };
};
