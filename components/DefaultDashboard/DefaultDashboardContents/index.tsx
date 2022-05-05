import React from 'react';
import { DashboardContainer, HorizontalContainer, VerticalContainer } from '../../../styles/globalStyles';
import {
    DashboardImageHelpWrapper,
    DashboardImageTipWrapper,
    Text,
    Title,
    Subtitle,
    TextWrapper,
    QuickTipWrapper,
    SmallHeading,
    QuickTipTitle,
    HelpDashboard,
    QuickTipDashboard,
    Tabs,
    TabsWrapper,
    BlackHeading,
    InfoItem,
    InfoItemTextWrapper,
    InfoItemMainText,
    InfoItemSecondaryText,
    ResourcesIconWrapper,
    DocumentsIconWrapper,
    LeftWrapper,
} from './styles';
import Image from 'next/image';
import DashboardHelp from '../../../public/assets/images/help_icons.svg';
import DashboardTip from '../../../public/assets/images/tip_icon.svg';
import ExportIcon from '../../../public/assets/icons/export_lg.svg';
import LinkIcon from '../../../public/assets/icons/link.svg';
import BlueResourcesIcon from '../../../public/assets/icons/blue_resources.svg';
import PinkDocumentIcon from '../../../public/assets/icons/pink_document.svg';
interface Props {}

const resources = [
    {
        title: 'Health pathways',
        link: 'http://abcdef.com',
    },
    {
        title: 'Health pathways',
        link: 'http://abcdef.com',
    },
    {
        title: 'Health pathways',
        link: 'http://abcdef.com',
    },
];

export const DefaultDashboardContents: React.FC<Props> = () => {
    return (
        <>
            <HorizontalContainer style={{ marginBottom: '10px' }}>
                <VerticalContainer style={{ marginRight: '5px', flex: '1.5' }}>
                    <HelpDashboard>
                        <DashboardImageHelpWrapper>
                            <Image src={DashboardHelp} height={220} width={220} alt="" />
                        </DashboardImageHelpWrapper>
                        <TextWrapper>
                            <Subtitle>Jackie,</Subtitle>
                            <Title>You've helped 183 people on Heidi</Title>
                            <Text>Keep up the great work!</Text>
                        </TextWrapper>
                    </HelpDashboard>
                </VerticalContainer>
                <VerticalContainer style={{ marginLeft: '5px', flex: '1' }}>
                    <QuickTipDashboard>
                        <DashboardImageTipWrapper>
                            <Image src={DashboardTip} height={132} width={132} alt="" />
                        </DashboardImageTipWrapper>
                        <QuickTipWrapper>
                            <SmallHeading>Quick tips</SmallHeading>
                            <QuickTipTitle>Getting the most out of Heidi</QuickTipTitle>
                        </QuickTipWrapper>
                    </QuickTipDashboard>
                </VerticalContainer>
            </HorizontalContainer>
            <VerticalContainer>
                <DashboardContainer>
                    <TabsWrapper>
                        <Tabs>
                            <BlackHeading>Resources</BlackHeading>
                            {resources.map((resource, index) => (
                                <InfoItem key={index}>
                                    <LeftWrapper>
                                        <ResourcesIconWrapper>
                                            <Image src={BlueResourcesIcon} height={25} width={25} alt="" />
                                        </ResourcesIconWrapper>
                                        <InfoItemTextWrapper>
                                            <InfoItemMainText>{resource.title}</InfoItemMainText>
                                            <InfoItemSecondaryText>{resource.link}</InfoItemSecondaryText>
                                        </InfoItemTextWrapper>
                                    </LeftWrapper>
                                    <Image src={ExportIcon} height={22} width={22} alt="" />
                                </InfoItem>
                            ))}
                        </Tabs>
                        <Tabs>
                            <BlackHeading>Patient sheets</BlackHeading>
                            {resources.map((resource, index) => (
                                <InfoItem key={index}>
                                    <LeftWrapper>
                                        <DocumentsIconWrapper>
                                            <Image src={PinkDocumentIcon} height={25} width={25} alt="" />
                                        </DocumentsIconWrapper>
                                        <InfoItemTextWrapper>
                                            <InfoItemMainText>{resource.title}</InfoItemMainText>
                                            <InfoItemSecondaryText>{resource.link}</InfoItemSecondaryText>
                                        </InfoItemTextWrapper>
                                    </LeftWrapper>
                                    <Image
                                        src={LinkIcon}
                                        height={22}
                                        width={22}
                                        alt=""
                                        style={{ alignSelf: 'flex-end' }}
                                    />
                                </InfoItem>
                            ))}
                        </Tabs>
                    </TabsWrapper>
                </DashboardContainer>
            </VerticalContainer>
        </>
    );
};

export default DefaultDashboardContents;
