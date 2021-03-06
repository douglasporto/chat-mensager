import React,{useState} from "react";
import './style.css'
import Api from '../../service/api.json'
import Topo from '../topo/topo';


function Menu(){
  const [isFiltersVisible,setIsFiltersVisible] = useState(false)


  function nameChannel(name){
    setIsFiltersVisible(!isFiltersVisible)
    
  }
  function countMensagens(id){
    let count = 0
    for(var i = 0;i < api.messages.length;i++){
      if(id === api.messages[i].channel_id) count++
    }
    return count
  }
  const api = Api
  const channels = Api.channels
  return (
    <div className="Menu">
      <h3>XYZ Company</h3>
      <p>Channels</p> 
      <ul className="MenuList">
        {channels.map(data =>(
           <li key={data.id} onClick={() => nameChannel(data.name)} className="row">
            <div id='icon'>#</div>
            
              {isFiltersVisible ? 
              <div id='click_title'>{data.name}
              </div>
              :
              <div id='title'>{data.name}
                <div className="mensagem-naoLida">
                  <span>{countMensagens(data.id)}</span>
                </div>  
              </div>  
            }
            </li>
        ))}
      </ul>
  </div>
  );
}

export default Menu;
