import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import NewsGenres from './components/NewsGenres';

const App = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <NewsGenres />
            </main>
            <Footer />
        </div>
    );
};

export default App;