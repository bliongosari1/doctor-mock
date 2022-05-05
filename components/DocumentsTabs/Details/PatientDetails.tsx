import React from 'react';
import {
    FullDetailWrapper,
    DetailTitle,
    TextDetailWrapper,
    DetailSubtitle,
    DetailText,
    ColumnWrapper,
    TwoItemsWrapper,
} from './styles';

interface Props {}

export const PatientDetails: React.FC<Props> = () => {
    return (
        <FullDetailWrapper>
            <DetailTitle> Patient details </DetailTitle>
            <TextDetailWrapper>
                <ColumnWrapper>
                    <DetailSubtitle> Name </DetailSubtitle>
                    <DetailText> Eleanor Pena </DetailText>
                </ColumnWrapper>
                <TwoItemsWrapper>
                    <ColumnWrapper style={{ marginRight: '30px' }}>
                        <DetailSubtitle>D.O.B</DetailSubtitle>
                        <DetailText> 07/10/96</DetailText>
                    </ColumnWrapper>
                    <ColumnWrapper>
                        <DetailSubtitle>Sex</DetailSubtitle>
                        <DetailText>F</DetailText>
                    </ColumnWrapper>
                </TwoItemsWrapper>
                <ColumnWrapper>
                    <DetailSubtitle>Phone number</DetailSubtitle>
                    <DetailText> 0480123456 </DetailText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <DetailSubtitle>Medicare number</DetailSubtitle>
                    <DetailText>123456789</DetailText>
                </ColumnWrapper>
            </TextDetailWrapper>
        </FullDetailWrapper>
    );
};

export default PatientDetails;
