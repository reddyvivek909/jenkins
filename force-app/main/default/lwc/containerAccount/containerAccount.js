import { LightningElement , track} from 'lwc';

export default class ContainerAccount extends LightningElement {

   @track msg;
    @track show = false;
    
    
    handleCustomEvent(event) {
        const textVal = event.detail;
        show = true;
        console.log('Inis');
        this.msg = textVal;
        }
}