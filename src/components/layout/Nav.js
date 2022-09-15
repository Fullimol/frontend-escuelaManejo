import { NavLink } from "react-router-dom";
import '../../styles/layout/Nav.css';

import PlaceIcon from '@mui/icons-material/Place';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import Grid from '@mui/material/Grid';


const Nav = (props) => {
    return (
        <nav>
            <ul>
                <li>
                    <div className='a'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <HomeIcon style={{ marginRight: "10px" }} />
                            </Grid>
                            <Grid item>
                                < NavLink to="/" className={({ isActive }) => isActive ? "activo" : "inactivo"}>Home</NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </li>
                <li>
                    <div className='a'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <GroupsIcon style={{ marginRight: "10px" }} />
                            </Grid>
                            <Grid item>
                                < NavLink to="nosotros" className={({ isActive }) => isActive ? "activo" : "inactivo"}>Nosotros</NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </li>
                <li>
                    <div className='a'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <PhotoLibraryIcon style={{ marginRight: "10px" }} />
                            </Grid>
                            <Grid item>
                                < NavLink to="galeria" className={({ isActive }) => isActive ? "activo" : "inactivo"}>Galería</NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </li>
                <li>
                    <div className='a'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <EventAvailableIcon style={{ marginRight: "10px" }} />
                            </Grid>
                            <Grid item>
                                < NavLink to="novedades" className={({ isActive }) => isActive ? "activo" : "inactivo"}>Novedades</NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </li>
                <li>
                    <div className='a'>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item>
                                <PlaceIcon  className="i" style={{ marginRight: "10px" }} />
                            </Grid>
                            <Grid item>
                                < NavLink to="contacto" className={({ isActive }) => isActive ? "activo" : "inactivo"}>Contacto</NavLink>
                            </Grid>
                        </Grid>
                    </div>
                </li>

            </ul>
        </nav>
    );
}

export default Nav;