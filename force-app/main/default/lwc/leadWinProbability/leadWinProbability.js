

  import { LightningElement, api } from 'lwc';

export default class LeadWinProbability extends LightningElement {
  @api leadConversionRate;
  
  get fillStyle() {
    const percentage = this.leadConversionRate / 100;
    const circumference = 2 * Math.PI * 20;
    const offset = circumference * (1 - percentage);
    return `stroke-dasharray: ${circumference}; stroke-dashoffset: ${offset};`;
  }
}