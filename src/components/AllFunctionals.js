import React, { Component } from 'react';

export default class AllFunctionals extends Component {
    render() {
        let {FilterData,Refthis} = this.props;
        function SearchByName() {
            const name = document.querySelector('.SearchTextBox').value;
            FilterData(Refthis,name)
        }
        return (
            <>
                <div className='FunctionalCover'>
                    <div className='FunctionalFilterButtons'>
                        <select className='FunctionButton FilterStatus' onChange={(e)=>FilterData(Refthis,e.target.value)} >
                            <option value="All" >Filter By Status </option>
                            <option value="Completed" >Completed</option>
                            <option value="Delivered" >Delivered</option>
                            <option value="Prepared" >Prepared</option>
                            <option value="Prepone" >Prepone</option>
                        </select>
                    </div>
                    <div className='SearchFunctionCover'>
                        <div className='SearchTextBoxCover'>
                            <span><i class="fas fa-search"></i></span>
                            <input type='text' placeholder='Type here to search ...' className='SearchTextBox' />
                        </div>
                        <button className='SearchButton' onClick={()=>SearchByName()}>Search</button>
                    </div>
                </div>
            </>
        );
    }
}
