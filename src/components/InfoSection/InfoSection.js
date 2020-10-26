import React from "react";
import { Link } from "react-router-dom";
import {
    InfoSec,
    InfoRow,
    TextWrapper,
    InfoColumn,
    SubTitle,
    Heading,
    TopLine,
    Img,
    ImgWrapper,
} from "./InfoSection.elements";
import { Container, Button } from "../../GlobalStyle";
const InfoSection = ({
    lightBg,
    primary,
    buttonLabel,
    imgStart,
    lightTopLine,
    topLine,
    lightText,
    headline,
    lightTextDesc,
    description,
    img,
    alt,
    start,
}) => {
    return (
        <>
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}>
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>
                                    {topLine}
                                </TopLine>
                                <Heading lightText={lightText}>
                                    {headline}
                                </Heading>
                                <SubTitle lightTextDesc={lightTextDesc}>
                                    {description}
                                </SubTitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>
                                        {buttonLabel}
                                    </Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    );
};

export default InfoSection;
