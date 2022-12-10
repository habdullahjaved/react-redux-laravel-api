import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchStudents, deleteStudentthunk } from '../features/StudentSlice'
import { updateMenu, updateProps } from '../features/MenuSlice'
const ListStudent = (props) => {
  const student = useSelector((state) => state.students.data)
  // console.log(student)

  const handleMenuChange = (menu, id) => {
    dispatch(updateProps({ id: id }))
    dispatch(updateMenu(menu))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchStudents())
  }, [])

  // const deleteStudent = ({ id }) => {
  //   dispatch(deleteStudentthunk(id))
  // }
  const deleteStudent = (id) => {
    if (window.confirm(`Are you sure you want to delete this Student?`)) {
      dispatch(deleteStudentthunk({ id }))
    }
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12 mt-3'>
          <table className='table table-bordered table-striped'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Course</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {student.map((student, index) => (
                <tr key={index}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.course}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>
                    <button
                      className='btn btn-primary'
                      onClick={() => {
                        handleMenuChange(`./pages/EditStudent`, student.id)
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-danger'
                      onClick={
                        () => {
                          // dispatch(deleteStudentthunk({ id: student.id }))
                          // handleMenuChange('./pages/ListStudent')
                          deleteStudent(student.id)
                          alert('Data Deleted Successfully')
                        }
                        // console.log({ id: student.id })
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default ListStudent
