
import { useState } from 'react';
import './App.css';
import A from './Component/A';

function App() {
  
       let obj =[{
        name:"sam",
        age:32,
        city:"nanded"
       },
       {
        name:"ravi",
        age:22,
        city:"nanded"
       },{
        name:"shreya",
        age:25,
        city:"nanded"
       }
      ] 

      let [button ,updatebtn]=useState("Click Here To view Data");


      let [data,updatedata] = useState([]);
         
      function showData(event){
 
        //  already checked aasel tr 
        if(event.target.value === "checked"){ 
          updatebtn("Click here To hide data");
          updatedata(obj);
          event.target.value ="unchecked";
        }else{

          updatedata([]);
          updatebtn("Click here To view data");
        
          event.target.value ="checked";
        

        }

      }
  
  
  return (
    
    
    
    <div >

      <h2 className='h2ref'>This is App main component we are sending data from App 
        to TableInnerComponent using props drilling technique</h2>
        <button type="button" value={"checked"}  onClick={showData} className="buttoncss text-green-700 hover:text-white border 
        border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none 
        focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 
        dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
         {button} </button>
      <A pass={data}></A>      

    </div>
  );
}

export default App;
