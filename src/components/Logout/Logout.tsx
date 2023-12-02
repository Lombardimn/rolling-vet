import { UserKey, resetUser } from "../../redux/states/user"
import { clearLocalStore } from "../../utilities"
import { useNavigate } from "react-router-dom"
import { PublicRoutes } from "../../models"
import { useDispatch } from "react-redux"
import React from "react"
import "./logout.css"
import { useReduceLogin } from "../../stores"

export function Logout () {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { isLogin, loginChange } = useReduceLogin()
  
  const logOut = () => {
    clearLocalStore(UserKey)
    dispatch(resetUser())
    navigate(PublicRoutes.LANDING , {replace: true})
    loginChange(isLogin)
  } 

  return (
    <>
      <button 
        onClick={logOut}
        className="btn-logout"
      >
        Logout
      </button>
    </>
  )
}