import React, { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import Button from '@mui/material/Button'
import { logout, useAuth } from '../../firebase'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

const MainPage = ({setLogout}) => {
    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()

    const handleLogout = async () => {
        setLoading(true)
        try {
            await logout()
            setTimeout(() => {
                setLogout()
                setLoading(false)
                toast.success('Logged out')
            }, 2000)
        } catch {
            toast.error('Something went wrong!')
        }
    }

    return (
        <div>
            <h1>Logged in as: {currentUser?.email}</h1>
            <Button onClick={handleLogout}>Logout</Button>
            {loading &&
                <Spinner loading={loading}/>
            }
        </div>
    )
}

MainPage.propTypes = {
    setLogout: PropTypes.func
  }

export default MainPage