import React from 'react';
import ArrowDownIcon from '../../../public/assets/icons/arrow_down_lg.svg';
import StyledSVG from '../../StyledSVG';

interface Props {
    color?: string;
}

export const ArrowDown: React.FC<Props> = (props) => {
    const { color = '#1693BB' } = props;

    return <StyledSVG src={ArrowDownIcon} color={color} height={24} width={24}></StyledSVG>;
};

export default ArrowDown;
