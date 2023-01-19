import React, { useState } from 'react';
import { FaBed, FaCalendar, FaMale } from "react-icons/fa";
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';

const HeaderSearch = () => {
    const [openDate, setOpendate] = useState(false)
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);


    const [openOption, setOpenoption] = useState(false)
    const [options, setOptions] = useState({
        adult : 1,
        children : 0,
        room : 1
    })

    const handleOption = (name, operation)=>{
        setOptions(prev =>{return{
            ...prev, 
            [name] : operation === 'i' ? options[name] + 1 : options[name] - 1
        }})
    }

    return (
        <div >

            <div className='headerSearch'>

                {/* SEARCH DESTINATION  */}
                <div className="headerSearchItem">
                    <FaBed className='headerSearchIcon'></FaBed>
                    <input type="text" placeholder='Where are you going?'/>
                </div>

                {/* CHECK IN - OUT CALENDER */}
                <div className="headerSearchItem">
                    <FaMale className='headerSearchIcon'></FaMale>
                    <span onClick={()=> setOpendate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, "MM/dd/yyyy")}`} to {`${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                </div>

                {/* DATE RANGE SELECTOR  */}
                { openDate &&
                    <DateRange
                        editableDateInputs={true}
                        onChange={item => setDate([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={date}
                        className='select-h-date'
                    />
                 }

                {/* TOTAL PERSON  */}
                <div className="headerSearchItem">
                    <FaCalendar className='headerSearchIcon'></FaCalendar>
                    <span onClick={()=> setOpenoption(!openOption)} className='headerSearchText'>{`${options.adult}`} adult {`${options.children}`} children {`${options.room}`} room </span>
                </div>
                {
                    openOption && 
                    
                    <div className="option-container">

                        <div className='option-ins-dec'>
                            <h4>Adults</h4>
                            <div className='option-numbers'>
                                <button onClick={()=>handleOption('adult', 'i')}>+</button>
                                <span>{options.adult}</span>
                                <button onClick={()=>handleOption('adult', 'd')} disabled={options.adult < 1}>-</button>
                            </div>
                        </div>

                        <div className='option-ins-dec'>
                            <h4>children</h4>
                            <div className='option-numbers'>
                                <button onClick={()=>handleOption('children', 'i')}>+</button>
                                <span>{options.children}</span>
                                <button onClick={()=>handleOption('children', 'd')} disabled={options.children < 1}>-</button>
                            </div>
                        </div>

                        <div className='option-ins-dec'>
                            <h4>room</h4>
                            <div className='option-numbers'>
                                <button onClick={()=>handleOption('room', 'i')}>+</button>
                                <span>{options.room}</span>
                                <button onClick={()=>handleOption('room', 'd')} disabled={options.room < 1}>-</button>
                            </div>
                        </div>
                    </div>
                }


                <div className="headerSearchItem">
                    <button>Search</button> 
                </div>
                
            </div>
        </div>
    );
};

export default HeaderSearch;