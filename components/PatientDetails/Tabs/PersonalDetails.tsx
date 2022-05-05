import React from 'react';
import { TabTitle, TabWrapper, TabSubtitle, RowLink, TabText } from './styles';

interface Props {}

export const PersonalDetails: React.FC<Props> = () => {
    return (
        <>
            <TabWrapper>
                <TabTitle>Personal Details</TabTitle>

                <TabSubtitle style={{ fontSize: '15px' }}>Contact Info</TabSubtitle>
                <RowLink>
                    <TabText> First Name</TabText>
                    <TabText> Josh </TabText>
                </RowLink>
                <RowLink>
                    <TabText> Last Name</TabText>
                    <TabText> Smith </TabText>
                </RowLink>
                <RowLink>
                    <TabText> First Name</TabText>
                    <TabText> Josh </TabText>
                </RowLink>
                <RowLink>
                    <TabText> Last Name</TabText>
                    <TabText> Smith </TabText>
                </RowLink>
                <TabSubtitle style={{ fontSize: '15px', marginTop: '14px' }}>Emergency Contact</TabSubtitle>
                <RowLink>
                    <TabText> First Name</TabText>
                    <TabText> Josh </TabText>
                </RowLink>
                <RowLink>
                    <TabText> Last Name</TabText>
                    <TabText> Smith </TabText>
                </RowLink>
                <RowLink>
                    <TabText> First Name</TabText>
                    <TabText> Josh </TabText>
                </RowLink>
                <RowLink onClick={() => {}}>
                    <TabText> Last Name</TabText>
                    <TabText> Smith </TabText>
                </RowLink>
            </TabWrapper>
        </>
    );
};

export default PersonalDetails;
