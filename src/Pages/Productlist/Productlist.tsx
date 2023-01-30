import axios from "axios";
import { useEffect, useState } from "react";


const Productlist: React.FC = () => {

    const [apidata, setApidata] = useState('')
    useEffect(() => {
        fetchData();
      }, [])
      
      
    const fetchData = async () => {
        try {
          const Apidata = await axios.get(`http://localhost:4000/product`)
        //   console.log("what ",data);
        setApidata(Apidata.data)
        console.log("ddd",apidata);
        
        }
        catch (err) {
          console.log(err);
        }
      }
    return(
        <div>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Image</th>
                    <th>Product Description</th>
                </tr> 
                </thead>
                <tbody>
                 {
                   apidata.map((d:any,i:any)=>{
                    return(
                        <tr key={i}>
                            <td>{d.product_name}</td>
                            <td>{d.product_price}</td>
                            <td>{d.product_image}</td>
                            <td>{d.product_description}</td>
                        </tr>
                    )
                   })
                } 
                </tbody>
             </table>
        </div>
    )
}
export default Productlist