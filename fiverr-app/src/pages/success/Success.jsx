import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export const Success = () => {
  const navigate= useNavigate();
  const {search} = useLocation()
  return (
    <div>Payment successful. You are being redirected to the orders page. Please do not close the page.
      
    </div>
  )
}
