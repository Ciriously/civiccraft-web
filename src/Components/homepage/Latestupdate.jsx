import React from 'react';

const blogPosts = [
    {
        id: 1,
        image: 'https://www.tailframes.com/images/illustration-2.webp',
        categories: ['Category 1', 'Category 2'],
        readTime: '4 min. read',
        title: 'Blog Post Heading 1',
        description: 'We\'ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.'
    },
    {
        id: 2,
        image: 'https://www.tailframes.com/images/illustration.webp',
        categories: ['Category 3', 'Category 4'],
        readTime: '5 min. read',
        title: 'Blog Post Heading 2',
        description: 'Another blog post description here.'
    },
    {
        id: 3,
        image: 'https://www.tailframes.com/images/illustration-3.webp',
        categories: ['Category 5', 'Category 6'],
        readTime: '3 min. read',
        title: 'Blog Post Heading 3',
        description: 'Yet another blog post description.'
    }
];

const Latestupdate = () => {
    return (
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
                                    className="h-[134px] w-[235px] -translate-x-1/4"
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
    );
}

export default Latestupdate;
