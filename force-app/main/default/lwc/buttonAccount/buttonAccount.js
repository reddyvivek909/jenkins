import { LightningElement, track } from 'lwc';

export default class ButtonAccount extends LightningElement {
    
    handleClick() {
        
        const name = 'buttonCLicked';
        const selectEvent = new CustomEvent('mycustomevent', {
        detail: name
        });
        this.dispatchEvent(selectEvent);
    }
    
    
}