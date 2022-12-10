import React, { useState } from 'react'
import { addStudents } from '../features/AddStudentSlice'
import { useDispatch } from 'react-redux'
import { updateMenu } from '../features/MenuSlice'
const AddStudent = () => {
  const dispatch = useDispatch()
  const [student, setStudent] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
  })
  //
  const handleMenuChange = (menu) => {
    dispatch(updateMenu(menu))
  }
  //
  const { name, course, email, phone } = student
  //savedata
  const saveStudent = (e) => {
    e.preventDefault()
    dispatch(
      addStudents({
        name,
        course,
        email,
        phone,
      })
    )
    if (addStudents) {
      setStudent({ name: '', course: '', email: '', phone: '' })
      alert('data Added')
      handleMenuChange('./pages/ListStudent')
    }
  }
  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h4>
                Students Data
                {/* <Link to={'/'} className='btn btn-primary float-end'>
                  Student Data
                </Link> */}
              </h4>
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => saveStudent(e)}>
                <div className='form-group mb-3'>
                  <label>Student Name</label>
                  <input
                    type='text'
                    name='name'
                    value={name}
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>{student.error_list.name}</span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Course</label>
                  <input
                    type='text'
                    name='course'
                    value={course}
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>
                    {student.error_list.course}
                  </span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Email</label>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>
                    {student.error_list.email}
                  </span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Phone</label>
                  <input
                    type='text'
                    name='phone'
                    value={phone}
                    className='form-control'
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>
                    {student.error_list.phone}
                  </span> */}
                </div>
                <div className='form-group mb-3'>
                  <button className='btn btn-success'>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddStudent
