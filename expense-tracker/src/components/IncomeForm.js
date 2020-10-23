import React, { useRef } from "react";

function IncomeForm({ income, setIncome }) {
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);


    const addIncome = (e) => {
        e.preventDefault();

        console.log(desc.current.value);
        let d = date.current.value.split('-');
        let newD = new Date(d[0], d[1], d[2]);
        setIncome([...income, {
            'desc': desc.current.value,
            'price': price.current.value,
            'date': newD.getTime(),
        }]);
        desc.current.value = '';
        price.current.value = null;
        date.current.value = null;
    };

    return (
        <form className='income-form' onSubmit={addIncome}>
            <div className='form-inner'>
                <input
                    type='text'
                    name='desc'
                    id='desc'
                    placeholder='Income Description...'
                    ref={desc}
                />
                <input
                    type='number'
                    name='price'
                    id='price'
                    placeholder='Income Amount'
                    ref={price}
                />
                <input type='date' name='date' id='date' placeholder='Income Date' ref={date} />
                <input type='submit' value='Add Income' />
            </div>
        </form>
    );
}

export default IncomeForm;
