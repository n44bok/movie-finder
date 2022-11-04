import { NavLink } from "react-router-dom";
import { Container } from 'CommonStyled/Common.styled.jsx';
import { Nav, MenuItem } from './Navigation.styled';
import css from './Navigation.module.css';


export const Navigation = () => {
    return (
        <Container>
            <nav>
                <Nav>
                    <MenuItem>
                        <NavLink to="/"
                            className={({ isActive }) => !isActive ? `${css.link}` : `${css.activeLink}`}
                        >Home</NavLink>
                    </MenuItem>
                    <MenuItem>
                        <NavLink
                            to="/movies"
                            className={({ isActive }) => !isActive ? `${css.link}` : `${css.activeLink}`}
                        >Movies</NavLink>
                    </MenuItem>
                </Nav>
            </nav>
        </Container>
    );
};