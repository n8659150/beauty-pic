import React, { useState, useEffect } from "react";
import { Img } from "react-image";
import VisibilitySensor from 'react-visibility-sensor';
import axios from "axios";
import { URL, port, apiRoute } from "../../config";
const fullURL = `http://${URL}:${port}/${apiRoute}`;
function group(array, subGroupLength) {
    let index = 0;
    let newArray = [];
    while (index < array.length) {
        newArray.push(array.slice(index, (index += subGroupLength)));
    }
    return newArray;
}
export function Beauty(props) {
    const [imgData, setImgData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const response = await axios(
            `${fullURL}=285906324`,
          );
          const subGroupLength = Math.floor(
            response.data.imgSrc.length / 3
        );
        const groupedImgArray = group(
            response.data.imgSrc,
            subGroupLength
        );
        setImgData(groupedImgArray);
        };
        fetchData();
      }, []);
    
    return (
        imgData.length && (
            <div>
            <div className="masonry" id="masonry">
                {imgData.map((subGroupImage) => {
                    return (
                        <div className="column">
                            {subGroupImage.length &&
                                subGroupImage.map((imgSrc, index) => (
                                    <Img
                                        className="image"
                                        src={imgSrc}
                                        decode={false}
                                        key={index}
                                        container={(children) => (
                                            <div className="item">
                                                <VisibilitySensor>
                                                {children}
                                                </VisibilitySensor>
                                            </div>
                                        )}
                                    />
                                ))}
                        </div>
                    );
                })}
            </div>
            {/* { imgData.length && <VisibilitySensor onChange={(visible) => console.log('visible', visible) }>
                 <span>Load more.</span>
             </VisibilitySensor>} */}
             </div>
        )
    );
}
