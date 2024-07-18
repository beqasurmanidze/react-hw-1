import React from "react";
import data from "../data.js";
import styles from "./Main.module.css";
const Main = () => {
  console.log(styles);
  return (
    <>
      <div className={styles.cont}>
        {data.map((item, index) => {
          return (
            <>
              <div key={index} className={styles.mainCont}>
                <div>
                  <img
                    src={item.imageUrl}
                    alt="image"
                    className={styles.myImg}
                  />
                </div>
                <div>
                  <div className={styles.location}>
                    <p>{item.location}</p>
                    <p>
                      <a href={item.googleMapsUrl}>view on google map</a>
                    </p>
                  </div>
                  <span className={styles.dates}>
                    {item.startDate} - {item.endDate}
                  </span>
                  <p className={styles.p}>{item.description}</p>
                </div>
              </div>
              <div className={styles.underLine}></div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Main;
