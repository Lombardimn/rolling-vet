import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "../models"
import { AppStore } from "../redux/store"
import React from "react"

interface Props {
  privateValidation: boolean
}

const PrivateValidationFragment = <Outlet/>
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />

export const AuthGuard = ({ privateValidation }: Props) =>{
  const userState = useSelector((store: AppStore) => store.user)
  
  // lo correcto es consultar el ID, pero para el caso practico usamos el nombre
  return userState.name ? 
    privateValidation  
        ? PrivateValidationFragment 
        : PublicValidationFragment
    : <Navigate replace to={PublicRoutes.LOGIN} />
  
}

export default AuthGuard