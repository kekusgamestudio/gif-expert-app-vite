import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export const AddCategory = ({onNewValue}) => {

  const [inputValue, setInputValue] = useState('')

  const onInputChange = (event) => {
    setInputValue( event.target.value )
  }

  const onFormSubmit = (event) => {
    event.preventDefault();  // Para que no recargue el formulario
    if (inputValue.trim().length <= 1) return;

    onNewValue(inputValue.trim())
    setInputValue('');
  }

  return (
    <div>
      <form onSubmit={ onFormSubmit }>
        <input type="text" 
              placeholder="Buscar GIFs"
              value={inputValue}
              onChange={ onInputChange }/>
      </form>
    </div>
  )
}
