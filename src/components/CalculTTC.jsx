import Button from "./Button"
import Pht from "./Pht"
import Res from "./Res"
import Tva from "./Tva"


const CalculTTC = () => {
    return <fieldset>
        <legend>Calcul de PTTC</legend>
        <Pht />
        <Tva />
        <Button />
        <Res />
    </fieldset>
}

export default CalculTTC;