import React from "react";
import data from "../data.js";
import styles from "./Main.module.css";
const Main = () => {
  return (
    <div>
      {data.map((item, index) => {
        return (
          <>
            <div key={index} className="mainCont">
              <div>
                <img src={item.imageUrl} alt="image" className={styles.myImg} />
              </div>
              <div className="something">
                <p>{item.location}</p>

                <p>
                  <a href={item.googleMapsUrl}>view on google map</a>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Main;
