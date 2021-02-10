/* import CardTecnologias from '../../components/tecnologias/index'; */
import Loading from '../../components/loading/index';
import { lazy, Suspense } from 'react';

const CardTecnologias = lazy(() => import('../../components/tecnologias/index'));


export default function Tecnologias() {
    return (
        <>
            <Suspense fallback={<Loading />}>
                <CardTecnologias />
            </Suspense>
        </>
    )
}
