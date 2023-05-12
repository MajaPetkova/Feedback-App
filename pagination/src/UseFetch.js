import { useState, useEffect } from "react";

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100';

export const UseFetch = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProfiles = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    getProfiles();
  }, []);
  return { data, loading };
};
