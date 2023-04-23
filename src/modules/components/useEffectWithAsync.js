import React from "react";
import { useParams } from "react-router-dom";

const UseEffectWithAsync = () => {
  // ❌ Don't do this!
  useEffect(async () => {
    const users = await fetchUsers();
    setUsers(users);

    return () => {
      // this never gets called, hello memory leaks...
    };
  }, []);

  // 🆗 Ship it
  useEffect(() => {
    (async () => {
      const users = await fetchUsers();
      setUsers(users);
    })();

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  // 🆗 Ship it
  useEffect(() => {
    const getUsers = async () => {
      const users = await fetchUsers();
      setUsers(users);
    };

    getUsers(); // run it, run it

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const { id } = useParams();
  return (
    <div className="body">
      <h1>Restaurant Menu : {id}</h1>
    </div>
  );
};

export default UseEffectWithAsync;
