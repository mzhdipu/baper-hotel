import React from 'react';
import Banner from '../../Components/Home/Banner/Banner';
import SearchForm from '../../Components/Home/SearchForm/SearchForm';

const Home = () => {
    return (
        <div className='container-width'>
            <Banner></Banner>
            <SearchForm></SearchForm>
        </div>
    );
};

export default Home;