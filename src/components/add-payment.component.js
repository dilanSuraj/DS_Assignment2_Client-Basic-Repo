import React, {Component} from 'react';
import axios from 'axios';

export default class AddTicket extends Component{

    constructor(props){
        super(props);
        this.onChangePaymentAmount = this.onChangePaymentAmount.bind(this);
        this.onChangePaymentDate = this.onChangePaymentDate.bind(this);
        this.onChangePaymentDescription = this.onChangePaymentDescription.bind(this);
        this.onChangePaymentType = this.onChangePaymentType.bind(this);
        this.onChangeTicketCount = this.onChangeTicketCount.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        
        this.state={
            payment_amount:'',
            payment_type:'',
            payment_date:'',
            ticket_cont:0,
            payment_description:''
        }

        

    }

    onChangePaymentAmount(e){
        this.setState({
            payment_amount:e.target.value
        });
    } 
    onChangePaymentType(e){
        this.setState({
            payment_type: e.target.value
        });
    }
    onChangePaymentDate(e){
        this.setState({
            payment_date: e.target.value
        });
    }
    onChangeTicketCount(e){
        this.setState({
            ticket_cont: e.target.value
        });
    }
     onChangePaymentDescription(e){
        this.setState({
            payment_description: e.target.value
        });
    }

    onSubmit(e){

        e.preventDefault();
        console.log('Form Submitted');
        console.log('Payment_amount'+this.state.payment_amount);
        console.log('Payment_date'+this.state.payment_date);
         console.log('Payment_description'+this.state.payment_description);
        console.log('Payment_type'+this.state.payment_type);
        console.log('Ticket count'+this.state.ticket_cont);

        let newPayment;
        if(this.state.payment_type == 'M')
        {
          newPayment = {

            total:this.state.payment_amount,
            subTotal: this.state.payment_amount,
            pin:this.state.payment_type,
            email:this.state.payment_description+ '@yahoo.com',
            name:this.state.payment_description

        }
       }

        axios.post('http://localhost:4000/mobileCards/',newPayment)
             .then(res => console.log(res.data));

    }
    render(){
        return(
           <div>
               <div style={{marginTop: 20}}>
                   <h3>Add a payment</h3>
                   <div className="container">
                       <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                          <label> Description</label>
                          <input type="text"
                                className="form-control"
                                value={this.state.payment_description}
                                onChange={this.onChangePaymentDescription}/>
                        </div>

                        <div className="form-group">
                          <label> Payment Amount: Rs.</label>
                          <input type="text"
                                className="form-control"
                                value={this.state.payment_amount}
                                onChange={this.onChangePaymentAmount}/>
                        </div>
                        
                        <div className='form-group'>
                               <label> Payment Date:</label>
                          <input type="text"
                                className="form-control"
                                value={this.state.payment_date}
                                onChange={this.onChangePaymentDate}/>
                        </div>
                        
                        <div className='form-group'>
                               <label> Ticket Count</label>
                          <input type="text"
                                className="form-control"
                                value={this.state.ticket_cont}
                                onChange={this.onChangeTicketCount}/>
                        </div>
                        
                        <div className='form-group'>
                                <label> Payment Type</label>
                          <input type="text"
                                className="form-control"
                                value={this.state.payment_type}
                                onChange={this.onChangePaymentType}/>
                        </div>

                        <div className='form-group'>
                          <input type="submit"
                                className="btn btn-primary"
                                value="Finish"
                                />
                        </div>
                      
                             
                                
                   </form>
                   </div>
               </div>
           </div>
        );
    }
}