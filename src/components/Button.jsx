
//*PROPS
export default function Button(props){
    const {text, color, disabled} = props;

    return (<button disabled={disabled} className="{`btn-${color}`">{text}</button>
    );}