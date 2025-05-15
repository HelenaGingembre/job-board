'use client';
import { useSession } from 'next-auth/react';
import Link from '../../../node_modules/next/link';
import SignInButton from './sign-in-button';

const Header = () => {
    const { data: session } = useSession();
    console.log('session in Header===>', session);

    return (
        <header>
            <div className="container flex item-center justify-between  mx-auto my-4">
                <Link href="/" className="font-bold text-xl">
                    Job Board
                </Link>
                <nav className="flex gap-2  *:py-2 *:px-4 *:rounded-md">
                    {session?.user ? (
                        <>
                            <Link
                                className="bg-blue-500 text-white"
                                href="/new-listing"
                            >
                                Post a job
                            </Link>
                            <Link
                                href="/dashboard"
                                className="bg-blue-500 text-white"
                            >
                                Account
                            </Link>
                        </>
                    ) : (
                        <Link
                            className="bg-blue-500 text-white"
                            href="/new-listing"
                        >
                            Post a job
                        </Link>
                    )}

                    <SignInButton session={session} />
                </nav>
            </div>
        </header>
    );
};

export default Header;
