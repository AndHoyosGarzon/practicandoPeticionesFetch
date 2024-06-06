import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { getUsersFetch } from "../JS/fetchApis";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaUserSecret } from "react-icons/fa";

export const Cards = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsersFetch(setUsers);
  }, [users]);

  return (
    <div className={style.content}>
      {users.map((el) => {
        return (
          <div key={el.id} className={style.cardLayout}>
            <p className="fw-bolder">
              {el.name}
              <span className="ms-2">
                <FaUserSecret />
              </span>
            </p>
            <p className="fw-bolder">
              {el.username}
              <span className="ms-2">
                <RiInstagramFill color="red" />
              </span>
            </p>
            <p className="fw-bolder">
              {el.email}
              <span className="ms-2">
                <MdAttachEmail color="blue" />
              </span>
            </p>
            <p className="fw-bolder">
              {el.address.city}
              <span className="ms-2">
                <FaLocationDot color="darkred" />
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
};
