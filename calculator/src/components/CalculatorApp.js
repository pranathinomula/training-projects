import React from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import {useDispatch, useSelector} from 'react-redux'
import {loadAnswer, loadButtons,loadClear, loadBackspace} from '../redux/calculatorRedux/calculator.actions'
import {CALCULATOR_KEY} from '../redux/calculatorRedux/calculator.reducer'
import Button from 'react-bootstrap/Button';


const CalculatorApp = () => {
    const dispatch = useDispatch()


      // handle answer 
    const handleAnswer = (e) =>{
        e.preventDefault()
        // alert(number)
      dispatch(loadAnswer())
    }

    // view store 
    const viewCalculator = useSelector((state) =>{
        return state[CALCULATOR_KEY]
    })

    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewCalculator)}</pre> */}
            
           <section>
            
           <center>
                <div className='hii'>
                   {/*<div className='text-gray-200 w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>
                       <GiHamburgerMenu/>
                       <p>CALCULATOR APP</p>
                   </div>

                   {/* screen */}
                  
                   <div >
                       <input
                       type='text' className="calculator-screen" 
                       placeholder='0'
                       value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans}
                       //className=' w-full h-full border border-white bg-white text-gray-900 text-4xl text-right pr-5 '
                        //style={{padding: 20, marginTop:20,marginBottom:20}}
                        />
                     
                  </div>

                   {/* keypad */}
                   
                   <div className="calculator-keys">
                    
                   {/*<button className="fun-keys" onClick={() =>dispatch(loadClear())} >AC</button>*/}
                   <button className="digit-keys" onClick={() =>dispatch(loadButtons(7))} >7</button>
                   <button className="digit-keys" onClick={() =>dispatch(loadButtons(8))} >8</button>
                       

                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(9))} >9</button> 

                       

                       <button className="operator-keys" onClick={() =>dispatch(loadButtons('/'))}  >/</button>

                       
                       

                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(4))}>4</button>
                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(5))}>5</button>
                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(6))} >6</button>
                       <button className="operator-keys" onClick={() =>dispatch(loadButtons('*'))} >*</button>

                       
                        <button className="digit-keys" onClick={() =>dispatch(loadButtons(1))} >1</button>
                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(2))} >2</button>
                       <button className="digit-keys" onClick={() =>dispatch(loadButtons(3))} >3</button>
                       
                       
                       <button className="operator-keys" onClick={() =>dispatch(loadButtons('-'))} >-</button> 



                       
                       <button className="digit-keys bottom-left-corner" onClick={() =>dispatch(loadButtons(0))} >0</button> 
                       <button className="operator-keys" onClick={() =>dispatch(loadButtons('%'))} >%</button>
                       
                       <button className="fun-keys" style={{textAlign:'center'}}onClick={() =>dispatch(loadButtons('.'))} >.</button>

                       <button className="operator-keys bottom-right-corner" onClick={() =>dispatch(loadButtons('+'))} >+</button> 

                        
                       <button className="fun-keys" onClick={() =>dispatch(loadClear())} >AC</button> 
                       <button className="fun-keys" onClick={() =>dispatch(loadBackspace())} >C</button>
                       <button className="fun-keys" onClick={handleAnswer}>=</button> 
                        
                        


        
                   </div>
                   
                   
               </div>
               </center> 
            
           </section>
        </React.Fragment>
        
    )
}

export default CalculatorApp