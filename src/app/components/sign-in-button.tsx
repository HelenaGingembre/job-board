'use client';
import { signIn, signOut, useSession } from 'next-auth/react';

const SignInButton = ({ session }: any) => {
    // const { data: session } = useSession();
    console.log('session in BTN==>', session);
    return (
        <>
            {session?.user ? (
                <div className="flex gap-3">
                    <form>
                        <button
                            className="bg-blue-500 hover:bg-blue-800 text-white text-xl py-2 px-4 rounded-md"
                            type="submit"
                            onClick={() => signOut({ redirectTo: '/login' })}
                        >
                            Sign Out( {session?.user.name})
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex gap-2">
                    <button
                        className=" text-xl justify-center *:py-2 *:px-4 *:rounded-md "
                        type="submit"
                    >
                        <a
                            className="bg-gray-500 hover:bg-gray-800 text-white  "
                            href={'/login'}
                        >
                            SignIn
                        </a>
                    </button>

                    {/* <button
                    className=" text-xl justify-center *:py-2 *:px-4 *:rounded-md "
                    type="submit"
                >
                    <a
                        className="bg-gray-500  hover:bg-gray-800 text-white  "
                        href={'/'}
                    >
                        SignUP
                    </a>
                </button> */}
                </div>
            )}
        </>
    );
};

export default SignInButton;
