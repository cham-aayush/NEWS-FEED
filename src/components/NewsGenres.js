import React, { useState } from 'react';

const genres = [
    { name: 'Technology', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c' },
    { name: 'Sports', image: 'https://cdn.britannica.com/22/238522-050-F29FD74E/FIFA-2022-World-Cup-Argentina.jpg' },
    { name: 'Health', image: 'https://static.vecteezy.com/system/resources/previews/002/136/625/non_2x/world-health-day-illustration-concept-with-characters-people-are-exercising-yoga-living-healthy-vector.jpg' },
    { name: 'Entertainment', image: 'https://5.imimg.com/data5/SELLER/Default/2020/10/OX/FX/UB/98833934/entertainment-programs-500x500.jpg' },
    { name: 'Business', image: 'https://online.hbs.edu/Style%20Library/api/resize.aspx?imgpath=/PublishingImages/Desk%20of%20Business%20Woman.png&w=1200&h=630' },
    { name: 'Science', image: 'https://static.vecteezy.com/system/resources/thumbnails/022/006/725/small/science-background-illustration-scientific-design-flasks-glass-and-chemistry-physics-elements-generative-ai-photo.jpeg' },
    { name: 'Politics', image: 'https://img.freepik.com/free-vector/politics-flat-icons-set_98292-1321.jpg' },
    { name: 'Travel', image: 'https://thumbs.dreamstime.com/b/happy-couple-love-travel-raised-hands-cliff-happy-couple-love-travel-raised-hands-cliff-norway-man-woman-112188598.jpg' },
    { name: 'Lifestyle', image: 'https://media.greatbigphotographyworld.com/wp-content/uploads/2022/05/lifestyle-photo-of-playing-children.jpeg' },
    { name: 'Education', image: 'https://plus.unsplash.com/premium_photo-1682125773446-259ce64f9dd7?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' },
    { name: 'Environment', image: 'https://t3.ftcdn.net/jpg/02/85/51/44/360_F_285514482_EdWlMKZzjVV6YH2pIXUmAbjvaMv5kRep.jpg' },
    { name: 'Food', image: 'https://www.foodiesfeed.com/wp-content/uploads/2023/09/fresh-vegetables.jpg' },
];

const NewsGenres = () => {
    const [selectedGenres, setSelectedGenres] = useState([]);

    const toggleGenre = (genre) => {
        setSelectedGenres((prev) =>
            prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
        );
    };

    const handleSubmit = () => {
        if (selectedGenres.length > 0) {
            alert(`You have selected: ${selectedGenres.join(', ')}`);
        } else {
            alert('Please select at least one genre.');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-teal-200">
            <div className="container mx-auto p-4 bg-black bg-opacity-0 rounded-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {genres.map((genre) => (
                        <div
                            key={genre.name}
                            className={`card bg-black rounded-xl shadow-lg cursor-pointer transition-transform transform hover:scale-105`}
                            onClick={() => toggleGenre(genre.name)}
                        >
                            <img src={genre.image} alt={genre.name} className="w-full h-32 object-cover rounded-t-xl" style={{ height: '200px' }} />
                            <h2 className="text-xl font-semibold text-center mt-2 text-white">{genre.name}</h2>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-5">
                    <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
                        Personalize My News Feed
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsGenres;