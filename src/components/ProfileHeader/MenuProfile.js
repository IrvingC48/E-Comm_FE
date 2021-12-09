import React, { useContext, useEffect } from 'react'
import { Popover, Button, Menu, Position } from 'evergreen-ui'
import { Link } from "react-router-dom";
import { HiUserCircle } from "react-icons/hi";


//Context
import ProfileContext from '../../context/Profile/ProfileContext';

const MenuProfile = () => {
    const { isAuth, profile, isThereAuth, deleteProfile } = useContext(ProfileContext);

    useEffect(() => {

    }, [isAuth])

    const logOut = () => {
        localStorage.removeItem('Token');
        deleteProfile()
        isThereAuth()
    };

    return (
        <div className="navbar-item">
            <Popover
                trigger='hover'
                position={Position.BOTTOM_LEFT}
                content={
                    <Menu>
                    <Menu.Group title="Actions">
                        {(!isAuth)
                        ?
                            <Menu.Item>
                                <Link to='/signin'>Sign In...</Link>
                            </Menu.Item>
                        :
                            <Menu.Item>
                                <Link to='/my_profile'>My Profile...</Link>
                            </Menu.Item>
                        }
                        {(!isAuth) &&
                            <Menu.Item >
                                <Link to='/signup'>Sign Up...</Link>
                            </Menu.Item>
                        }
                    </Menu.Group>
                        <Menu.Divider />
                        <Menu.Group>
                        {isAuth &&
                            <Menu.Item intent="danger">
                                <Link to='/' onClick={logOut}>Log Out...</Link>
                            </Menu.Item>
                        }
                        </Menu.Group>
                    </Menu>
                }
                >
                <Button marginRight={12} iconBefore={<HiUserCircle/>}>{(isAuth) ? profile.userName : 'Profile'}</Button>
            </Popover>
        </div>
    )
}

export default MenuProfile
