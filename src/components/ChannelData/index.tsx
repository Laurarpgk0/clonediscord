import React, { useRef, useEffect } from "react";
import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect(() => {
        const div = messagesRef.current;
        if (div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                {Array.from(Array(15).keys()).map((n) => (
                    <ChannelMessage
                        key={n}
                        author="Laura Gomes"
                        date="07/04/2022"
                        content="Hoje é meu aniversário"
                    />
                ))}
                <ChannelMessage
                    author="João Pedro"
                    date="07/04/2022"
                    content={
                        <>
                            <Mention>@Laura Gomes</Mention>, Me carrega no LOL
                            de novo por favor
                        </>
                    }
                />
            </Messages>
            <InputWrapper />
            <Input type="text" placeholder="Conversarem #chat-livre" />
            <InputIcon />
        </Container>
    );
};

export default ChannelData;
