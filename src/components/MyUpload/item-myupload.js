import styled from "styled-components";
import colors from "../../styles/color";

const StyleItem = styled.div`
    width: 100%;
    height: 2.5vw;
    border: none;
    border-bottom: 0.05vw solid ${colors.lightGray};
    display: flex;
    align-items: center;
`

const MyUploadP = styled.p`
    font-weight: 500;
    font-size: 0.75vw;
    color: ${colors.crewGray};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const ItemMyUpload = (props) => {
    const { id, title, name, postday, view, like } = props;

    return (
        <StyleItem key={id}>
            <div className="left" style={{width: "54%", padding: "0 0.7vw"}}>
                <MyUploadP style={{cursor: "pointer"}}>{title}</MyUploadP>
            </div>
            <div className="right" style={{width: "46%", display: "flex", textAlign: "center"}}>
                <div className="name" style={{width: "25%"}}>
                    <MyUploadP style={{color: colors.crewGray3}}>{name}</MyUploadP>
                </div>
                <div className="postday" style={{width: "25%"}}>
                    <MyUploadP style={{color: colors.crewGray3}}>{postday}</MyUploadP>
                </div>
                <div className="name" style={{width: "25%"}}>
                    <MyUploadP style={{color: colors.crewGray3}}>{view}</MyUploadP>
                </div>
                <div className="name" style={{width: "25%"}}>
                    <MyUploadP style={{color: colors.crewGray3}}>{like}</MyUploadP>
                </div>
            </div>
        </StyleItem>
    )
}

export default ItemMyUpload;