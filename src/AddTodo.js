import React,{Component} from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class AddTodo extends Component{
    state= {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label>Yeni yapılacak ekle: </Label>
                        <Input type="text" onChange={this.handleChange} value={this.state.content}/>
                    </FormGroup>
                </Form>

            </div>
        )
    }
}

export default AddTodo;