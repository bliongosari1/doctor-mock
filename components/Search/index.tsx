import React, { useState, useEffect } from 'react';
import { InputAdornment } from '@mui/material';
import Router, { useRouter } from 'next/router';
import Image from 'next/image';
import SearchIconGrey from '../../public/assets/icons/search_sm_grey.svg';
import CrossIcon from '../../public/assets/icons/grey_cross.svg';
import NoResultFound from '../../public/assets/images/no_results_found.svg';
import { MainButton } from '../../styles/globalStyles';
import {
    HeaderSearchBar,
    HeaderText,
    PageWrapper,
    SearchText,
    SearchWrapper,
    ImageWrapper,
    SearchDetailsWrapper,
    SecondaryText,
    PrimaryText,
    SearchCardWrapper,
    NoResultWrapper,
    NoResultMainText,
    NoResultSecondaryText,
} from './styles';
import { SearchFilter } from './SearchFilter';
import SearchCard from './SearchCard';

const filterOptions = [
    {
        label: 'Alphabetical',
    },
    {
        label: 'Last seen',
    },
];

const cleanQuery = (query: string | string[] | undefined) => {
    if (query) {
        if (Array.isArray(query)) {
            query = query.join('');
        }
        return query;
    }
    return '';
};

const Search = () => {
    const router = useRouter();
    const query = router.query.q;
    const [input, setInput] = useState(cleanQuery(query));

    const sendQuery = () => {
        Router.push({
            pathname: '/search',
            query: { q: input },
        });
    };

    useEffect(() => {
        setInput(cleanQuery(query));
    }, [query]);

    const clearAll = () => {
        setInput('');
    };

    return (
        <PageWrapper>
            <HeaderText>Search for a patient</HeaderText>
            <SearchWrapper>
                <HeaderSearchBar
                    placeholder="Search for something..."
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                    startAdornment={
                        <InputAdornment style={{ marginRight: 5, minWidth: 30, minHeight: 30 }} position="start">
                            <ImageWrapper>
                                <Image src={SearchIconGrey} height={27} width={25} alt="heidilogo" />
                            </ImageWrapper>
                        </InputAdornment>
                    }
                    endAdornment={
                        input.length > 0 && (
                            <InputAdornment position="end" onClick={() => clearAll()}>
                                <ImageWrapper>
                                    <Image src={CrossIcon} height={30} width={30} alt="crossIcon" />
                                </ImageWrapper>
                            </InputAdornment>
                        )
                    }
                />
                <MainButton onClick={() => sendQuery()} style={{ width: '169px' }}>
                    <SearchText>Search</SearchText>
                </MainButton>
            </SearchWrapper>
            {!query || query.length < 5 ? (
                <>
                    <SearchDetailsWrapper>
                        <div>
                            <PrimaryText style={{ marginRight: '7.5px' }}>
                                {query ? `Patients called "${query}"` : 'All patients'}
                            </PrimaryText>
                            <SecondaryText>100 results</SecondaryText>
                        </div>
                        <SearchFilter options={filterOptions} defaultValue={filterOptions[0].label} />
                    </SearchDetailsWrapper>
                    <SearchCardWrapper>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                        <SearchCard></SearchCard>
                    </SearchCardWrapper>
                </>
            ) : (
                <NoResultWrapper>
                    <Image src={NoResultFound} height={200} width={200} alt="no result" />
                    <NoResultMainText> No results found </NoResultMainText>
                    <NoResultSecondaryText> Check your spelling or try another search term </NoResultSecondaryText>
                </NoResultWrapper>
            )}
        </PageWrapper>
    );
};

export default Search;
