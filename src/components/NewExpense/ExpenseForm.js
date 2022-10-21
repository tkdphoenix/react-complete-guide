import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('') // one method for state
  const [enteredAmount, setEneteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')
  // const [userInput, setUserInput] = useState({ // another method for state
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // })

  const titleChangeHandler = e =>{
    setEnteredTitle(e.target.value) // one method for state
    // setUserInput({ // another method for state
    //   ...userInput,
    //   enteredTitle: e.target.value,
    // })
    // setUserInput((prevState) => { // this method for handling state keeps updates in order so you can depend on a previous state
    //   return { ...prevState, enteredTitle: e.target.value, }
    // })
  }

  const amountChangeHandler = e => {
    setEneteredAmount(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // })
    // setUserInput((prevState) => { // this method for handling state keeps updates in order so you can depend on a previous state
    //   return { ...prevState, enteredAmount: e.target.value, }
    // })
  }

  const dateChangeHandler = e => {
    setEnteredDate(e.target.value)
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // })
    // setUserInput((prevState) => { // this method for handling state keeps updates in order so you can depend on a previous state
    //   return { ...prevState, enteredDate: e.target.value, }
    // })
  }

  const submitHandler = e => {
    e.preventDefault()

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData)
    setEnteredTitle('')
    setEneteredAmount('')
    setEnteredDate('')
  }
  
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
            type="text" 
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount`</label>
          <input 
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
            type="Date" 
            min="01-01-2022" 
            max="12-31-2025"
            value={enteredDate}
            onChange={dateChangeHandler} 
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm