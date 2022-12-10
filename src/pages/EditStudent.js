import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudent } from '../features/EditSlice'
import { UpdateStudents } from '../features/UpdateSlice'
import { updateMenu } from '../features/MenuSlice'

const EditStudent = ({ id }) => {
  const students = useSelector((state) => state.edit.students)
  console.log(students)
  const dispatch = useDispatch()

  // const { id } = useParams()
  console.log({ id })
  const [student, setStudent] = useState({
    name: '',
    course: '',
    email: '',
    phone: '',
    id: '',
    ...students,
  })
  const { name, course, email, phone } = student
  //change to ListStudent
  const handleMenuChange = (menu) => {
    dispatch(updateMenu(menu))
  }
  //
  //get Student by id
  useEffect(() => {
    dispatch(fetchStudent({ id: id }))
  }, [])
  //handle Inputs
  const handleChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value })
  }
  const updateForm = (e) => {
    e.preventDefault()
    setStudent({
      name: '',
      course: '',
      email: '',
      phone: '',
    })
    dispatch(
      UpdateStudents({
        id,
        name: name,
        course: course,
        email: email,
        phone: phone,
      })
    )
    alert('Student Updated Successfully')
    handleMenuChange('./pages/ListStudent')
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <div className='card'>
            <div className='card-header'>
              <h4>
                Update Student
                {/* <Link to={'/'} className='btn btn-primary float-end'>
                  Student Data
                </Link> */}
              </h4>
            </div>
            <div className='card-body'>
              <form onSubmit={(e) => updateForm(e)}>
                <div className='form-group mb-3'>
                  <label>Student Name</label>
                  <input
                    type='text'
                    name='name'
                    className='form-control'
                    value={name}
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>{error_list.name}</span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Course</label>
                  <input
                    type='text'
                    name='course'
                    className='form-control'
                    value={course}
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>{error_list.course}</span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Email</label>
                  <input
                    type='text'
                    name='email'
                    className='form-control'
                    value={email}
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>{error_list.email}</span> */}
                </div>
                <div className='form-group mb-3'>
                  <label>Student Phone</label>
                  <input
                    type='text'
                    name='phone'
                    className='form-control'
                    value={phone}
                    onChange={(e) => handleChange(e)}
                  />
                  {/* <span className='text-danger'>{error_list.phone}</span> */}
                </div>
                <div className='form-group mb-3'>
                  <button className='btn btn-success'>Update Student</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditStudent
