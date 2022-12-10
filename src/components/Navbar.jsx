import React from 'react'
import { useDispatch } from 'react-redux'
import { updateMenu } from '../features/MenuSlice'
const Navbar = () => {
  const dispatch = useDispatch()

  const handleMenuChange = (menu) => {
    dispatch(updateMenu(menu))
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
              <a
                className='navbar-brand'
                onClick={() => {
                  handleMenuChange('./pages/ListStudent')
                }}
              >
                Navbar
              </a>
              <button
                className='navbar-toggler'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#navbarNav'
                aria-controls='navbarNav'
                aria-expanded='false'
                aria-label='Toggle navigation'
              >
                <span className='navbar-toggler-icon'></span>
              </button>
              <div className='collapse navbar-collapse' id='navbarNav'>
                <ul className='navbar-nav'>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      aria-current='page'
                      onClick={() => {
                        handleMenuChange('./pages/ListStudent')
                      }}
                    >
                      List Student
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a
                      className='nav-link'
                      onClick={() => {
                        handleMenuChange('./pages/AddStudent')
                      }}
                    >
                      Add Student
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
