import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';
import viewReducer from '../store/view';
import Core from './Core';

const PageManager = () => {

    let { showPages } = useSelector((state: RootStateType) => ({
        showPages: state.view.showPages,
    }));

    let Comp1 = React.lazy(() => import('../pages/Waiting'));
    let Comp2 = React.lazy(() => import('../pages/Waiting'));
    let slideClass1: string = 'show';
    let slideClass2: string = 'hide';

    if (showPages.length > 1) {
        // 페이지 전환
        Core.view.pageConatinerToggle = Core.view.pageConatinerToggle === 1 ? 2 : 1;
        if (Core.view.pageConatinerToggle === 1) {
            Comp1 = Core.view.CacheCompPage1;
            Comp2 = React.lazy(() => import(`../pages/${showPages[1]}`));
            Core.view.CacheCompPage2 = Comp2;
            // Core.view.lastChackPageDir = 
            // if (Core.view.lastCheckPageDir)
        } else {

        }
    }

    return (
        <section className="page-container">
            {showPages}
            <Suspense fallback={<div>Loading...</div>}>
                <Comp1 />
            </Suspense>
        </section>
    );
};

export default PageManager;