import React from 'react';
import { ContentWrapper, OptionButtons, OptionsWrapper, Title } from './styles';

interface Props {
    goNext: () => void;
}

export const AppointmentType: React.FC<Props> = (props) => {
    const { goNext } = props;
    return (
        <ContentWrapper style={{ alignItems: 'center', padding: '34px 0 5px' }}>
            <Title>Was this a diagnostic appointment?</Title>
            <OptionsWrapper>
                <OptionButtons onClick={() => goNext()}>No</OptionButtons>
                <OptionButtons onClick={() => goNext()}>Yes</OptionButtons>
            </OptionsWrapper>
        </ContentWrapper>
    );
};
