const urlsObj = {
  users: "https://jsonplaceholder.typicode.com/users",
  urlComents: "https://jsonplaceholder.typicode.com/comments",
  urlPhotos: "https://jsonplaceholder.typicode.com/photos",
};
export const getUsersFetch = async (setUsers) => {
  await fetch(urlsObj.users)
    .then((res) => {
      if (!res.ok) throw Error(res.ok);
      return res.json();
    })
    .then((data) => {
      setUsers(data);
    })
    .catch((error) => console.log(error));
};
