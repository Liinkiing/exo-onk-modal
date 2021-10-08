import React from "react";

import './modal.css';
import {Button} from '@ornikar/kitt';

export default function Modal() {
  return (
    <div class='modal-screen'>
        <div class='modal-main'>
          
          <div class='modal-header'>
            <div><p>Titre</p></div>
            <div><Button icon='cross' /></div>
          </div>
         
          <div class='modal-content'>
           <p>Hello !</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
           <p>haaaa</p>
          </div>
          
          <div class='modal-footer'>
             <div><p>Label</p></div>
            <div><Button>Label</Button></div>
          </div>
          
    


        </div>

    
    </div>
  );
}
