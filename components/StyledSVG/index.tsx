import React from 'react';
import theme from '../../theme';

import { CustomSVG } from './styles';
interface SVGProps {
    src: string;
    color?: string;
    width?: number | string;
    height?: number | string;
    style?: React.CSSProperties;
}

export const StyledSVG: React.FC<SVGProps> = (props) => {
    const { color = theme.palette.primary.main, height, width, src, style } = props;
    return style ? (
        <div style={style}>
            <CustomSVG color={color} src={src} height={height} width={width} />
        </div>
    ) : (
        <CustomSVG color={color} src={src} height={height} width={width} />
    );
};

export default StyledSVG;
