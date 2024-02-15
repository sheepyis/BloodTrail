import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from "../../styles/color";
import menuItems from "./MenuItems";


const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5vw;
`;

const BreadcrumbLink = styled(Link)`
  font-weight: 500;
  font-size: 0.6vw;
  color: ${colors.crewGray2};
  cursor: pointer;
`;

const Breadcrumbs = ({ pageLabel, currentPage }) => {
  const currentPagePath = menuItems[pageLabel]?.find(item => item.label === currentPage)?.path || "/";

  return (
    <BreadcrumbsContainer>
    <BreadcrumbLink>
    <Link to={"/"} style={{ textDecoration: 'none' }}>홈</Link>
    </BreadcrumbLink>
    {">"}
    <BreadcrumbLink>
    <Link to={menuItems[pageLabel]?.[0]?.path} style={{ textDecoration: 'none' }}>{pageLabel}</Link>
    </BreadcrumbLink>
    {">"}
    <BreadcrumbLink>
    <Link to={currentPagePath} style={{ textDecoration: 'none' }}>{currentPage}</Link>
    </BreadcrumbLink>
    </BreadcrumbsContainer>
  );
};

export default Breadcrumbs;
