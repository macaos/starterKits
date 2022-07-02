import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { RootStateType } from '../store';

const ModalManager = () => {

    const { showModals } = useSelector((state: RootStateType) => ({
        showModals: state.view.showModals,
    }));

    if (showModals.length === 0) {
        return <></>
    }

    const CompModals = showModals.map((modalName: string) => {
        // 팝업 종료시 기존 오픈 팝업의 재 랜더링 방지를 위해 key를 idx가 아닌 name으로 한다 
        return <LazyModal modalName={modalName} key={modalName} />
    })
    return (
        <div className="modal-manager">
            {CompModals}
        </div>
    );
};

const LazyModal = ({
    modalName,
}: {
    modalName: string
}) => {
    const LazyComp = React.lazy(() => import(`../modals/${modalName}`));
    return (
        <Suspense fallback={'...lading'}>
            <LazyComp />
        </Suspense>
    )
}

export default ModalManager;