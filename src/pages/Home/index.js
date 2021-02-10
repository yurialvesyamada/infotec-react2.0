/* import Carouselhome from '../../components/carousel/index'; */
import Loading from '../../components/loading/index';
import { lazy, Suspense } from 'react';

const Carouselhome = lazy(() => import('../../components/carousel/index'));

export default function Home() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <Carouselhome />
            </Suspense>
        </>
    )
}   