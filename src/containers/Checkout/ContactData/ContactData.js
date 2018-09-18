import React, {Component} from 'react'
import Button from '../../../components/UI/Button/Button'
import Spinner from '../../../components/UI/Spinner/Spinner'
import classes from './ContactData.css'
// import axios from 'axios'
import axios from '../../../axios-orders'
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component{
    state= {
        name:'',
        email:'',
        address:{
            street:"",
            postalCode:""
        },
        loading:false
    }

    orderHandler = (event)=>{
        event.preventDefault()
        this.setState({loading:true})
        // alert("you continue .... ")
        const order = {
            ingredients:this.props.ingredients,
            price:this.props.totalPrice,
            customer:{
                name:"navjot",
                address:{
                    street:'sevenhills',
                    zipcode:2147,
                    country:'Australia',
                },
                email:'test@test.com',
            },
            deliveryMethod:'uber eats'
        }
        axios.post('/orders.json',order).then((response)=>{
            // console.log("response firebase",response)
            this.setState({loading:false})
            this.props.history.push('/')
        }).catch((error)=>{
            this.setState({loading:false})
            console.log("error",error)
        })    
    }
    render() {

        let form = (
            <form>
                <Input type="text" name="name" placeholder = "your name"  inputtype="input"/>
                <Input type="email" name="email" placeholder = "your email" inputtype="input"/>
                <Input type="text" name="street" placeholder = "Street address" inputtype="input"/>
                <Input type="text" name="postal" placeholder = "postal code" inputtype="input"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        )
        if(this.state.loading){
            form = <Spinner/>
        }
        return(
            <div className = {classes.ContactData}>
                <h4> enter you contact information</h4>
                {form}
            </div>
        )
    }
}

export default ContactData