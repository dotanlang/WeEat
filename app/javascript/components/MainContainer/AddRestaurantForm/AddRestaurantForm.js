import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import './add_restaurant_form.css'

class AddRestaurantForm extends Component {
    constructor(props){
        super(props);
    }

    render () {
        const { handleSubmit, createRestaurant, cuisines, cancel} = this.props;
        // cuisines.shift();
        cuisines[0] = "";
        const options = cuisines.map((x) => <option key={x} value={x.toLowerCase()}>{x}</option>);

        return (
            <div className='form'>
                <h1 className='headline'>Add Restaurant</h1>
                <form onSubmit={handleSubmit(createRestaurant)}>
                    <div>
                        <label className='label' htmlFor="name">Name</label>
                        <Field className='input' name="name" component="input" type="text" />
                    </div>
                    <div>
                        <label className='label' htmlFor="cuisine">Cuisine</label>
                        <div>
                            <Field className="select" name="cuisine" component="select">
                                {options}
                            </Field>
                        </div>
                    </div>
                    <div>
                        <label className='label' htmlFor="address">Address</label>
                        <Field className='input' name="address" component="input" type="text" />
                    </div>
                    <div>
                        <label className='label' htmlFor="delivery_time">Delivery Time</label>
                        <Field className='input' name="delivery_time" component="input" type="text" />
                    </div>
                    <div className='check-box-container'>
                        <label className='label' htmlFor="ten_bis">Ten Bis?</label>
                        <div>
                            <Field className='check-box'
                                   name="ten_bis"
                                   component="input"
                                   type="checkbox"
                                   placeholder="Ten Bis"
                            />
                        </div>
                    </div>

                    <div className="buttons">
                        <button className='button' type="submit">Submit</button>
                        <button className='button' onClick={cancel}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

AddRestaurantForm = reduxForm({
    form: 'add-restaurant'
})(AddRestaurantForm)

export default AddRestaurantForm;
