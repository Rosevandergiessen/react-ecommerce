import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavigationContainer = styled.div`
  heigth: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  z-index: 1;
`

export const LogoContainer = styled(Link)`
  height: 70px;
  width: 180px;
  padding: 0px;
  position: absolute;
  top: 30px;
`

export const NavLinks = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 25px;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`

export const MyNavLink = styled(NavLink)`
  padding: 10px 15px;
  cursor: pointer;
    &.active{
      color: #dacc0a;
    }
`
