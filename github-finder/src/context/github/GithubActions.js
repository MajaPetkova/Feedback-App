

//get search users
  export const searchUsers = async (text) => {
    // setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`https://api.github.com/search/users?${params}`);
    const { items } = await res.json();
    // setUsers(data);
    // setLoading(false);
    // dispatch({
    //   type: "GET_USERS",
    //   payload: items,
    // });
    return items
  };
   //get single user
  export const getUser = async (login) => {
    // setLoading();

    const res = await fetch(`https://api.github.com/users/${login}`);
    
    if (res.status === 404) {
      window.location = "/not-found";
    } else {
      const data = await res.json();
      
      return data;
    //   dispatch({
    //     type: "GET_USER",
    //     payload: data,
    //   });
    }
  };
   // get user repos
 export const getUserRepos = async (login) => {
    // setLoading();
    const params = new URLSearchParams({
      sort: 'created',
      per_page: 10
    });

    const res = await fetch(`https://api.github.com/users/${login}/repos?${params}`);
    const data = await res.json();
    
    return data;
    //   dispatch({
    //     type: "GET_REPOS",
    //     payload: data,
    //   });
  };