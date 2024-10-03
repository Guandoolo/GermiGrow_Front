import BasicModal from "../componentes/modal";
import TablaPlanta from "../componentes/tablaPlanta";

// eslint-disable-next-line react/prop-types
export default function Rplanta({ id }) {
    return (
        <>
            <TablaPlanta id={id} />
            <BasicModal id2={id} />
        </>
    );
}