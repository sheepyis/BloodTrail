import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import axios from "axios";
import ItemMyUpload from "./item-myupload";

const StyleItem = styled.div`
    width: 100%;
`

const NoDataMessage = styled.p`
    font-size: 0.75vw;
    font-weight: 500;
    color: ${colors.crewGray};
`

const ListMyUpload = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.error("Error: ", error);
            });
    }, []);

    return (
        <StyleItem>
            {data.length === 0 ? (
                <NoDataMessage>작성한 글이 없습니다.</NoDataMessage>
            ) : (
                data.map((item, index) => (
                    <ItemMyUpload
                        key={index}
                        id={item.id}
                        title={item.email}
                        name={item.name}
                        postday={item.address.suite}
                        view={item.id}
                        like={item.id}
                    />
                ))
            )}
        </StyleItem>
    );
};

export default ListMyUpload;
