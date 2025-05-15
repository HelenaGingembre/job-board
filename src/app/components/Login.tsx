'use client';
import { signIn } from 'next-auth/react';

const Login = () => {
    return (
        <>
            <section className="container my-16 mx-auto">
                <div className="flex gap-3 justify-center *:py-2 *:px-4 *:rounded-md  *:bg-blue-500 *:hover:bg-blue-800 *:text-white *:text-xl">
                    <button
                        onClick={() =>
                            signIn('github', { redirectTo: '/dashboard' })
                        }
                    >
                        SignIn (GitHub)
                    </button>

                    <button
                        onClick={() =>
                            signIn('google', { redirectTo: '/dashboard' })
                        }
                    >
                        SignIn (Google)
                    </button>
                </div>
            </section>
        </>
    );
};

export default Login;
