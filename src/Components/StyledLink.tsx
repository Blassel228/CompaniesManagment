import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavLinkStyledNavbar = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 1.6rem;
  font-family:
    "Consolas", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    monospace;
  margin-right: 2rem;
  transition: color 0.3s ease;
  justify-content: center;

  &:hover {
    color: #6200ea;
  }
`;

export const NavLinkStyledSidebar = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 1.6rem;
  font-family:
    "Consolas", "Menlo", "DejaVu Sans Mono", "Bitstream Vera Sans Mono",
    monospace;
  padding: 1rem 2rem;
  width: 80%;
  display: block;
  text-align: center;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;

  &:hover {
    background-color: #6200ea;
    transform: translateX(10px);
  }
`;
