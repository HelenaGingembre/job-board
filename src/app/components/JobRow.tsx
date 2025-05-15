'use client';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface Job<Type> {
    id: string;
    type: string;
    title: string;
    description?: string;
    location: string;
    salary?: string;
    company: {
        name?: string;
        description: string;
        contactEmail: string;
        contactPhone: string;
    };
}

const JobRow = ({ job }: any) => {
    const { type, title, description, salary, location } = job;

    const [showFullDesc, setShowFullDesc] = useState(false);
    let descriptionMod = description;
    if (!showFullDesc) {
        descriptionMod = descriptionMod.substring(0, 90) + '...';
    }

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm relative flex gap-4">
            <div className="absolute cursor-pointer top-4 right-4">
                <FontAwesomeIcon
                    className="size-4 text-gray-300"
                    icon={faHeart}
                />
            </div>

            <div className="flex grow gap-4">
                <div className="content-center w-12 basis-12 shrink-0">
                    <img
                        className="size-12"
                        src={'https://www.w3schools.com/images/lamp.jpg'}
                        alt="logo spotify"
                    />
                </div>
                <div className="grow ">
                    <div className="text-gray-500 text-sm">
                        {descriptionMod}
                    </div>
                    <button
                        onClick={() => setShowFullDesc(prev => !prev)}
                        className="h-[36px] text-red-500 px-4 py-2  text-center text-sm"
                    >
                        {showFullDesc ? 'Moins' : 'Plus'}
                    </button>
                    <div className="font-bold mb-2">{title}</div>
                    <div className="text-gray-400 text-xs">
                        Remote &middot; {location} &middot; {type}
                    </div>
                </div>
                <div className="content-end text-gray-500 text-xs">
                    2 weeks ago {/* <TimeAgo createdAt={jobDoc.createdAt} /> */}
                </div>
            </div>
        </div>
    );
};

export default JobRow;
