import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';

const PageManager = () => {

    const Comp = React.lazy(() => import('../pages/Elements'));

    let { showPages } = useSelector((state: RootStateType) => ({
        showPages: state.view.showPages,
    }))

    return (
        <section className="page-container">
            {showPages}
            <Suspense fallback={<div>Loading...</div>}>
                <Comp />
            </Suspense>
        </section>
    );
};

export default PageManager;