import { useState } from 'react'

const DynamicForm = () => {
  const [form, setForm] = useState([
    {
      name: '',
      age: ''
    }
  ])

  const handleFormValues = (event, index) => {
    setForm(pre => {
      const newForm = [...pre]
      newForm[index][event.target.name] = event.target.value
      return newForm
    })
  }

  const handleDelete = index => {
    setForm(pre => {
      const newForm = [...pre]
      newForm.splice(index, 1)
      return newForm
    })
  }

  const handleAddFormItem = () => {
    setForm(pre => {
      const newForm = [...pre]
      newForm.push({
        name: '',
        age: ''
      })
      return newForm
    })
  }
  return (
    <div>
      <form>
        {form.map((item, index) => (
          <div key={index}>
            <input
              type='text'
              placeholder='Name'
              value={item.name}
              name='name'
              onChange={event => handleFormValues(event, index)}
            />
            <input
              type='text'
              placeholder='age'
              value={item.age}
              name='age'
              onChange={event => handleFormValues(event, index)}
            />
            {index !== 0 && (
              <button onClick={() => handleDelete(index)} type='button'>
                Delete
              </button>
            )}
          </div>
        ))}
      </form>
      <button onClick={() => handleAddFormItem()}>Add item ➕</button>
    </div>
  )
}

export default DynamicForm
