import React from "react";
import { Link, withRouter } from "react-router-dom";
// withRouter는 다른 컴포넌트를 감싸고, 라우터에 어떠한 정보를 줌
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  background-color: rgba(20, 20, 20, 0.7);
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const Item = styled.li`
  width: 60px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
  /* &:not(:last-child) {
      margin-right: 10px;
    } */
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));

// const HeaderC = props => (
//   <Header>
//     {console.log(props)}
//     <List>
//       <Item current={true}>
//         <SLink href="/">Movies</SLink>
//       </Item>
//       <Item current={true}>
//         <SLink href="/tv">TV</SLink>
//       </Item>
//       <Item current={true}>
//         <SLink href="/search">Search</SLink>
//       </Item>
//     </List>
//   </Header>
// );

// export default withRouter(HeaderC);
