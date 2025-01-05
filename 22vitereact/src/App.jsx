import './App.css'
import { useForm } from "react-hook-form"

// Form Handling using 'react-hook-form'
// useForm

function App() {
  // Step 1: create form
  const { register, handleSubmit, watch, formState: { errors, isSubmitting } } = useForm();

  async function onSubmitHandle(data) {
    // API call ko simulate krte hain
    await new Promise((resolve) => setTimeout(resolve, 3000))
    console.log('submitting the form ', data);
  }

  return (
    <>
    {/* Step 4: onSubmit={handleSubmit()} */}
      <form action="" onSubmit={handleSubmit(onSubmitHandle)}>

        <div>
          <label>First Name : </label>
          {/* Step 2: fields register and Validation*/}
          <input className={errors.firstName ? "input-error" : ""} type="text" {...register('firstName',
            {
              required: true,
              minLength: { value: 3, message: 'min length atleast 3' },
              maxLength: { value: 6, message: 'max length atmost 6' },
              pattern: { value: /^[A-Za-z]+$/i, message: 'first name is not as per the rules' }
            }
          )} />
          {/* Step 3: Errors Handle and Styling  */}
          {errors.firstName && <p className='error-mssg'>{errors.firstName.message}</p>}
        </div><br />

        <div>
          <label>Middle Name : </label>
          <input className={errors.middleName ? "input-error" : ""} type="text" {...register('middleName',
            {
              required: true,
              minLength: { value: 3, message: 'min length atleast 3' },
              maxLength: { value: 6, message: 'max length atmost 6' },
              pattern: { value: /^[A-Za-z]+$/i, message: 'first name is not as per the rules' }
            }
          )} />
          {errors.middleName && <p className='error-mssg'>{errors.middleName.message}</p>}
        </div><br />

        <div>
          <label>Last Name : </label>
          <input className={errors.lastName ? "input-error" : ""} type="text" {...register('lastName',
            {
              required: true,
              minLength: { value: 3, message: 'min length atleast 3' },
              maxLength: { value: 6, message: 'max length atmost 6' },
              pattern: { value: /^[A-Za-z]+$/i, message: 'first name is not as per the rules' }
            }
          )} />
          {errors.lastName && <p className='error-mssg'>{errors.lastName.message}</p>}
        </div><br />

        <div>
          {/* Step 5: Disabled Submit Feature for (Multiple Submittion Prevent!)  */}
          {/* disable krdo jab isSubmitting true hoga */}
          <input style={{cursor: 'pointer'}} type="submit" disabled={isSubmitting} value={isSubmitting ? "Submitting" : "Submit"} />
        </div>

      </form>
    </>
  )
}

export default App
