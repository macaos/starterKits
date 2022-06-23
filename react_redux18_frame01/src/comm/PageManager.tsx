import React, { Suspense } from 'react';

const PageManager = () => {

    const Comp = React.lazy(() => import('../pages/Elements'));

    return (
        <section className="page-container">
            <Suspense fallback={<div>Loading...</div>}>
                <Comp />
            </Suspense>
        </section>
    );
};

export default PageManager;