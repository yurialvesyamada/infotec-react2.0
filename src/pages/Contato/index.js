import FaleConosco from '../../components/form/Form_contato';
import Logos from '../../components/logos/Contact';

export default function Contatos() {
    return (

        <>
            <div className="text-center text-info bg-light py-4">
                 <p className="h1">Fale Conosco</p>
                    <FaleConosco />
                    <Logos />
            </div>
        </>
    )
}   