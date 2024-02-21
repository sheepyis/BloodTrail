import React, { useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../styles/color";
import axios from "axios";
import ItemMyUpload from "./item-myupload";
import MyUploadData from "./MyUploadData";

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
        setData(MyUploadData);
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
                        title={item.title}
                        name={item.name}
                        postday={item.postday}
                        view={item.view}
                        like={item.like}
                    />
                ))
            )}
        </StyleItem>
    );
};

export default ListMyUpload;
