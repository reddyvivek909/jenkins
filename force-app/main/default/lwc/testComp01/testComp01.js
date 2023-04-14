import { LightningElement, api } from 'lwc';

export default class TestComp01 extends LightningElement {

    name='Eelctra';
    description='A sweet bike for comfort';
    category='Mountain';
    material='Steel';
    price='$2,500';
    pictureurl='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
    ready = false;
    connectedCallback(){
        setTimeout(()=> {
            this.ready=true;
        }, 3000);
    }
}