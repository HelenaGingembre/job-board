import { logout } from '@/lib/actions';
import { auth } from '@/lib/auth';
import React from 'react';
import Button from '../components/ui/button';

const Protected = async () => {
    const session = await auth();

    session?.user?.email;

    return (
        <form
            action={logout}
            className="h-screen w-screen flex flex-col justify-center items-center gap-10"
        >
            <div>
                <p className="text-red-500">{session?.user?.name}</p>
                <p className="text-red-500">{session?.user?.email}</p>
            </div>
            <Button type="submit" className="w-40" variant="secondary">
                logout
            </Button>
        </form>
    );
};

export default Protected;
