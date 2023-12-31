import TableInnerCompo from "./TableInnerCompo";



var A=(props)=>{

    return <div>
        <TableInnerCompo passFromAtoInner={props.pass}></TableInnerCompo>
    </div>
}

export default A;