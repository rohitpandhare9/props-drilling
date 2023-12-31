
import "./TableInnerCompo.css";


var TableInnerCompo=(props)=>{

        let obj = props.passFromAtoInner;

    return <div className="check">
    
    <table className="border-collapse border border-slate-400 ...">
  <thead>
    <tr>
      <th className="border border-slate-300 p-3">Name</th>
      <th className="border border-slate-300 p-3">Age</th>
      <th className="border border-slate-300 p-3">City</th>
    </tr>
  </thead>
  <tbody>

    {
        obj.map((ele,index)=>{
             
            return <tr>
                <td  className="border border-slate-300 p-3">{ele.name}</td>
                <td className="border border-slate-300 p-3">{ele.age}</td>
                <td className="border border-slate-300 p-3">{ele.city}</td>
            
            
            </tr>

        })
     

    }

  

  </tbody>
</table>


    </div>
}

export default TableInnerCompo;