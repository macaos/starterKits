import classNames from 'classnames';
import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';
import viewReducer from '../store/view';
import Core from './Core';

const PageManager = () => {

    let { showPages } = useSelector((state: RootStateType) => ({
        showPages: state.view.showPages,
    }));

    const [isFirstLoaded, setIsFirstLoaded] = useState(false);

    let Comp1 = React.lazy(() => import('../pages/Waiting'));
    let Comp2 = React.lazy(() => import('../pages/Waiting'));
    let slideClass1: string = 'show';
    let slideClass2: string = 'hide';
    if (showPages.length === 0) {
        return <></>;
    }

    if (showPages.length > 1) {
        // 페이지 전환
        Core.view.pageContainerToggle = Core.view.pageContainerToggle === 1 ? 2 : 1;
        if (Core.view.pageContainerToggle === 1) {
            Comp1 = Core.view.CacheCompPage1;
            Comp2 = React.lazy(() => import(`../pages/${showPages[1]}`));
            if (!Comp2) {
                alert('ss')
            }
            Core.view.CacheCompPage2 = Comp2;
            // Core.view.lastChackPageDir = 
            // if (Core.view.lastCheckPageDir === 'next') {
            //     slideClass1 = 'slide-hide-next';
            //     slideClass2 = 'slide-show-next';
            // } else if(Core.view.lastCheckPageDir === 'prev') {
            //     slideClass1 = 'slide-hide-prev';
            //     slideClass2 = 'slide-show-prev';

            // }
        } else {
            Comp2 = Core.view.CacheCompPage2;
            Comp1 = React.lazy(() => import(`../pages/${showPages[1]}`));
            if (!Comp1) {
                alert('ss1')
            }
            Core.view.CacheCompPage1 = Comp1;


        }


    } else {
        if (Core.view.pageContainerToggle === 1) {
            Comp2 = Core.view.CacheCompPage2;

        } else if (Core.view.pageContainerToggle === 2) {
            Comp1 = Core.view.CacheCompPage1;

        } else {
            // 최초
            // if (isFirstLoaded) {
            //     Comp1 = Core.view.CacheCompPage1;
            // } else {
            //     Comp1 = React.lazy(() => import(`../pages/${showPages[0]}`));
            //     Core.view.CacheCompPage1 = Comp1;
            // }
            Comp1 = React.lazy(() => import(`../pages/${showPages[0]}`));
            Core.view.CacheCompPage1 = Comp1;
        }
    }

    if (Core.view.lastCheckPageDir === 'next') {
        slideClass1 = 'slide-hide-next';
        slideClass2 = 'slide-show-next';
    } else if (Core.view.lastCheckPageDir === 'prev') {
        slideClass1 = 'slide-hide-prev';
        slideClass2 = 'slide-show-prev';

    }

    return (
        <section className={classNames(["page-manager", showPages[0]])}>
            <div className={classNames(["page-container toggle1", slideClass1])}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Comp1 />
                </Suspense>
            </div>
            <div className={classNames(["page-container toggle2", slideClass2])}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Comp2 />
                </Suspense>
            </div>

        </section>
    );
};

export default PageManager;