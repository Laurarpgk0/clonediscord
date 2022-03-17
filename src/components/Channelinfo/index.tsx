import React from "react";
import {
    Container,
    Description,
    Separator,
    HashtagIcon,
    Title,
} from "./styles";

const Channelinfo: React.FC = () => {
    return (
        <Container>
            <HashtagIcon />
            <Title>chat-livre</Title>
            <Separator />
            <Description>Canal aberto para conversas</Description>
        </Container>
    );
};

export default Channelinfo;
