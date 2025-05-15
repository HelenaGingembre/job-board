import Hero from './components/Hero';
import Jobs from './components/Jobs';

// import Header from './components/Header';
import SignInButton from './components/sign-in-button';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* {user ? ( */}
            <>
                <div className="flex flex-col gap-2 bg-yellow-100 items-center">
                    <h2 className="text-blue-500 text-xl mb-4 justify-center">
                        Welcome back
                        {/* {user?.firstName && `, ${user?.firstName}`} */}
                    </h2>
                    <p className="text-gray-500 mb-4 justify-center">
                        You are now authenticated into the application
                    </p>
                </div>
                <Hero />
                <Jobs />
            </>
            {/* ) : ( */}
            <>
                <div className="flex flex-col gap-2 bg-yellow-100 items-center">
                    <h2 className="text-blue-500 text-xl mb-4 justify-center">
                        AuthKit authentication example
                    </h2>
                    <p className="text-gray-500 mb-4 justify-center">
                        Sign in to view your account details Увійдіть, щоб
                        переглянути дані свого облікового запису
                    </p>
                </div>
                <Hero />
            </>
            {/* )} */}
        </>
    );
}
