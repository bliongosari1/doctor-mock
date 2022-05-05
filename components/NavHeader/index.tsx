import React, { useState } from 'react';
import CompactHeidiLogo from '../../public/assets/logos/heidi-icon-compact.svg';
import House from '../../public/assets/icons/Nav/home.svg';
import Logout from '../../public/assets/icons/Nav/logout.svg';
import Image from 'next/image';
import { useTheme } from 'styled-components';
import { LeftWrapper, NavHeaderContainer, NavLink, NavLinkWrapper, NavText, ImageWrapper } from './styles';
import Link from 'next/link';
import { connect } from 'react-redux';
import { RootState, Dispatch } from '../../store';
import type { Patient } from '../../types/api';
import { useRouter } from 'next/router';
import SearchBar from '../SearchBar';
import StyledSVG from '../StyledSVG';
import LogoutConfirmation from '../Modals/LogoutConfirmation';

interface Props {
    patient?: Patient | null;
    removePatient: () => void;
}

const INACTIVE_COLOR = '#8F9BB3';

export const NavHeader: React.FC<Props> = (props) => {
    const { removePatient } = props;
    const theme = useTheme();
    const router = useRouter();
    const NavLinks = [
        {
            display_name: 'Dashboard',
            link: '/',
            onClick: () => removePatient(),
            image: House,
            active: router.pathname === '/',
        },
        {
            display_name: 'Log out',
            link: '/',
            onClick: () => setLogoutModalToggle(true),
            image: Logout,
            active: router.pathname === '/account',
        },
    ];

    const [logoutModalToggle, setLogoutModalToggle] = useState(false);

    return (
        <NavHeaderContainer>
            <LogoutConfirmation isToggle={logoutModalToggle} toggle={setLogoutModalToggle} />
            <LeftWrapper>
                <Link href="/" passHref>
                    <ImageWrapper onClick={() => removePatient()}>
                        <Image src={CompactHeidiLogo} height={60} width={60} alt="heidilogo" />
                    </ImageWrapper>
                </Link>
                <NavLinkWrapper>
                    {NavLinks.map((navItem) => (
                        <NavLink
                            key={navItem.display_name}
                            onClick={() => {
                                router.push(navItem.link);
                                if (navItem.onClick) {
                                    navItem.onClick();
                                }
                            }}
                        >
                            <StyledSVG
                                src={navItem.image}
                                height={25}
                                width={25}
                                color={navItem.active ? theme.palette.primary.main : INACTIVE_COLOR}
                            />
                            <NavText style={{ color: navItem.active ? theme.palette.primary.main : INACTIVE_COLOR }}>
                                {navItem.display_name}
                            </NavText>
                        </NavLink>
                    ))}
                </NavLinkWrapper>
            </LeftWrapper>
            <SearchBar />
        </NavHeaderContainer>
    );
};

const mapState = (state: RootState) => ({
    patient: state.patient.currentPatient,
});

const mapDispatch = (dispatch: Dispatch) => ({
    removePatient: dispatch.patient.removePatient,
});

export default connect(mapState, mapDispatch)(NavHeader);
