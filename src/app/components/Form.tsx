'use client';
import { useFormState } from 'react-dom';
import Input from './ui/input';
import Button from './ui/button';
import { login } from '@/lib/actions';
import { useActionState } from 'react';

const loginInitialState = {
    message: '',
    errors: {
        email: '',
        password: '',
        credentials: '',
        unknown: '',
    },
};
const Form = () => {
    const [formState, formAction] = useActionState(login, loginInitialState);

    return (
        <form action={formAction}>
            <Input required name="email" placeholder="email" />
            <Input
                required
                name="password"
                type="password"
                placeholder="password"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <Button variant="secondary" className="w-full" type="submit">
                submit
            </Button>
        </form>
    );
};

export default Form;
