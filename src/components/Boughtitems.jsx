import { Button } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";


function Boughtitems({boughtItems ,deleteitem}) {
    return   <div className="items-bought">
    Your total items in cart are : {boughtItems.length}
    <hr></hr>
    {boughtItems.map((item)=>(
        <li className="list-bought-item d-flex align-items-center" key={item}>{item}
        <div className="ml-auto">
        <Button variant="danger" className='m-1' onClick={()=>deleteitem(item)}><MdDelete /></Button>
        </div>
        </li>
    ))}
    </div>    

    
}

export default Boughtitems;