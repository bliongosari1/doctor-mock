import React from 'react';
import {
    FullDetailWrapper,
    DetailTitle,
    TextDetailWrapper,
    DetailSubtitle,
    DetailText,
    ColumnWrapper,
    SignatureWrapper,
} from './styles';

const Signature = require('../../../public/assets/images/signature.png');
interface Props {}

export const GPDetails: React.FC<Props> = () => {
    return (
        <FullDetailWrapper>
            <DetailTitle> GP details </DetailTitle>
            <TextDetailWrapper>
                <ColumnWrapper>
                    <DetailSubtitle> Provider Number </DetailSubtitle>
                    <DetailText> 123456789 </DetailText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <DetailSubtitle>Name</DetailSubtitle>
                    <DetailText> Dr Thomas Kelly</DetailText>
                    <SignatureWrapper>
                        <img src={Signature} height={27} width={50} alt="sig" />
                    </SignatureWrapper>
                </ColumnWrapper>
                <ColumnWrapper>
                    <DetailSubtitle>Phone</DetailSubtitle>
                    <DetailText> 0480123456 </DetailText>
                </ColumnWrapper>
                <ColumnWrapper>
                    <DetailSubtitle>Address</DetailSubtitle>
                    <DetailText>10/49 Smith Street, Fitzroy Melbourne 3066</DetailText>
                </ColumnWrapper>
            </TextDetailWrapper>
            {/* <DetailTitle>GP details</DetailTitle>
            <TextDetailWrapper>
                <DetailSubtitle> Provider Number </DetailSubtitle>
            </TextDetailWrapper> */}
        </FullDetailWrapper>
    );
};

export default GPDetails;
