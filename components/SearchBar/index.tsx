import React, { useState } from 'react';
import { InputAdornment } from '@mui/material';
import Image from 'next/image';
import SearchIconGrey from '../../public/assets/icons/search_sm_grey.svg';
import { SecondaryButton } from '../../styles/globalStyles';
import { HeaderSearchBar, SearchText, SearchWrapper } from './styles';
import Router from 'next/router';

const index = () => {
    const [input, setInput] = useState('');
    const sendQuery = () => {
        Router.push({
            pathname: '/search',
            query: { q: input },
        });
    };

    return (
        <>
            <SearchWrapper>
                <HeaderSearchBar
                    placeholder="Search for something..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    startAdornment={
                        <InputAdornment style={{ marginRight: 15 }} position="start">
                            <Image src={SearchIconGrey} height={27} width={25} alt="heidilogo" />
                        </InputAdornment>
                    }
                />
                <SecondaryButton onClick={() => sendQuery()} style={{ background: '#EDF1F7' }}>
                    <SearchText>Search</SearchText>
                </SecondaryButton>
            </SearchWrapper>
        </>
    );
};

export default index;
