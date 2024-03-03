import React from 'react';
import img1 from '../../assets/blogs/1.png';
import img2 from '../../assets/blogs/2.jpg';
import img3 from '../../assets/blogs/3.jpg';

const blogPosts = [
    {
        id: 1,
        image: img1,
        categories: ['Category 1', 'Category 2'],
        readTime: '4 min. read',
        title: 'AI-Driven Traffic Management',
        description: ' Revolutionize urban mobility with real-time insights and optimized routing.'
    },
    {
        id: 2,
        image: img2,
        categories: ['Category 3', 'Category 4'],
        readTime: '5 min. read',
        title: 'AI-Powered Public Health Surveillance',
        description: 'Early detection and rapid response to disease outbreaks for healthier communities.'
    },
    {
        id: 3,
        image: img3,
        categories: ['Category 5', 'Category 6'],
        readTime: '3 min. read',
        title: 'ML Automation for Government Procurement',
        description: 'Streamlined processes, transparent decisions, and cost savings in procurement.'
    }
];

const Latestupdate = () => {
    return (
        <div id="Latestupdate">

            <div>
                <section className="m-auto flex w-full max-w-screen-2xl flex-col gap-12 px-6 py-12 md:px-16 2xl:px-32 2xl:py-16">
                    <div className="flex justify-between">
                        <h3 className="text-4xl font-semibold text-slate-950">Blog</h3>
                    </div>
                    <div className="grid w-full grid-flow-row gap-x-0 gap-y-6 md:grid-cols-2 md:gap-6 xl:grid-cols-3">
                        {blogPosts.map(post => (
                            <div key={post.id} className="flex max-w-[600px] flex-col items-start gap-6 overflow-hidden">
                                <div className="flex h-[280px] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] center">
                                    <img
                                        src={post.image}
                                        alt=""
                                        className="object-cover h-full w-full"
                                    />
                                </div>
                                <div className="flex flex-col items-start gap-3">
                                    <p className="inline-flex items-center justify-start gap-2">
                                        <span className="text-xs leading-none text-slate-400">Categories</span>
                                        {post.categories.map((category, index) => (
                                            <span key={index} className="size-1.5 rounded-full bg-blue-700" />
                                        ))}
                                        <span className="text-xs leading-none text-slate-400">{post.readTime}</span>
                                    </p>
                                    <div className="flex flex-col gap-2">
                                        <h3 className="text-2xl font-semibold">{post.title}</h3>
                                        <h4 className="max-w-[90%] text-sm leading-tight text-slate-400">{post.description}</h4>
                                    </div>
                                    <button
                                        type="button"
                                        className="group inline-flex items-center justify-center whitespace-nowrap rounded-lg align-middle text-sm font-semibold leading-none transition-all duration-300 ease-in-out disabled:cursor-not-allowed stroke-blue-700 text-blue-600 h-[42px] min-w-[42px] gap-2 disabled:stroke-slate-400 disabled:text-slate-400 hover:stroke-blue-950 hover:text-blue-950 p-0"
                                    >
                                        <span>Read More</span>
                                        <svg
                                            width={24}
                                            height={24}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#1D4ED8"
                                            strokeWidth="1.5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="size-6 stroke-inherit"
                                        >
                                            <path
                                                d="M11 16L15 12L11 8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <circle cx={12} cy={12} r={9} />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Latestupdate;
