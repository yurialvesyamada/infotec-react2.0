import { Spinner } from 'react-bootstrap';

export default function Loading() {
    return (
        <>
            <div className="text-center text-info py-4" title="Loading...">
                <h3>Carregando...</h3>
                <Spinner animation="border" role="status" />
            </div>
        </>
    )
}
