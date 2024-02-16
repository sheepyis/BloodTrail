import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../styles/color";
import menuItems from "./MenuItems";

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 17%;
  padding-left: 2.5%;
`;

const SidebarTitle = styled.p`
  font-weight: 500;
  font-size: 0.9vw;
  color: colors.crewGray;
`;

const SidebarItem = styled.p`
  font-weight: ${({ isCurrent }) => (isCurrent ? 600 : 500)};
  font-size: 0.75vw;
  color: ${({ isCurrent }) => (isCurrent ? colors.mainRed : colors.crewGray)};
  margin-top: 1.5vw;
  display: flex;
`;

const SidebarText = styled.p`
  cursor: pointer;
`

const Sidebar = ({ pageLabel, currentPage }) => {
  const items = menuItems[pageLabel] || [];

  return (
    <SidebarContainer>
      <SidebarTitle>{pageLabel}</SidebarTitle>
      {items.map((item) => (
        
          <SidebarItem isCurrent={item.label === currentPage}>
            
            <SidebarText>
            <Link to={item.path} style={{ textDecoration: 'none' }}>
              {item.label}
            </Link>
            </SidebarText>
            
          </SidebarItem>
        
      ))}
    </SidebarContainer>
  );
};

export default Sidebar;
