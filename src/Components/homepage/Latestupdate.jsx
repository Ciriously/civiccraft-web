import React from 'react';

const Latestupdate = () => {
    const techBlogs = [
        {
            title: 'The Coldest Sunset',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tags: [
                { name: '#Machine Learning', outlineColor: 'bg-blue-500', textColor: 'text-white' },
                { name: '#Data Science', outlineColor: 'bg-green-500', textColor: 'text-white' }
            ],
            image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'Tech Blog 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.',
            tags: [
                { name: '#Tech', outlineColor: 'bg-yellow-500', textColor: 'text-black' },
                { name: '#Programming', outlineColor: 'bg-red-500', textColor: 'text-white' }
            ],
            image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'AI Revolution',
            description: 'Artificial Intelligence is revolutionizing the world. Learn how AI is changing the tech industry.',
            tags: [
                { name: '#AI', outlineColor: 'bg-purple-500', textColor: 'text-white' },
                { name: '#Tech', outlineColor: 'bg-yellow-500', textColor: 'text-black' }
            ],
            image: 'https://images.unsplash.com/photo-1696258686454-60082b2c33e2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            title: 'The Future of Programming',
            description: 'Explore the future trends in programming. What languages and frameworks are on the rise?',
            tags: [
                { name: '#Programming', outlineColor: 'bg-red-500', textColor: 'text-white' },
                { name: '#Future', outlineColor: 'bg-green-500', textColor: 'text-white' }
            ],
            image: 'https://images.unsplash.com/photo-1526948531399-320e7e40f0ca?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];

    return (
        <div className="max-w-8xl mt-44 mb-28 mx-auto">
            <h1 className="text-3xl ml-44 font-gordita-bold mt-8 mb-28">Latest Updates</h1>
            <div className="flex flex-wrap justify-start">
                {techBlogs.map((blog, index) => (
                    <div key={index} className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded ml-44 overflow-hidden shadow-lg m-4">
                        <img className="w-full" src={blog.image} alt="Blog" />
                        <div className="px-6 py-4">
                            <div className="font-gordita-medium  text-xl mb-2">{blog.title}</div>
                            <p className="text-gray-700 font-gordita-regular text-base">{blog.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className={`inline-block rounded-full px-3 py-1 text-sm font-gordita-bold mr-2 mb-2 ${tag.outlineColor} ${tag.textColor}`}>{tag.name}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Latestupdate;
