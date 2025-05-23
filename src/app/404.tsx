import Link from 'next/link';

const NotFoundPage = () => {
    return (
        <section className="text-center flex flex-col justify-center items-center h-96">
            <i className="fas fa-exclamation-triangle text-yellow-400 fa-4x mb-4"></i>
            <h1 className="text-6xl font-bold mb-4">404 Page non trouvée</h1>
            <p className="text-xl mb-5">Cette page n'existe pas</p>
            <Link
                href="/"
                className="text-white bg-red-700 hover:bg-red-900 rounded-md px-3 py-2 mt-4"
            >
                Retour
            </Link>
        </section>
    );
};

export default NotFoundPage;
