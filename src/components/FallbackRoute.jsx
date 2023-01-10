import { Navigate, useLocation } from "react-router-dom"
import NotFound from "../pages/NotFound"


export default function FallbackRoute({relativePath}){
  let location = useLocation()

  const pathArr = location.pathname.split('/')
  if(pathArr[1] !== relativePath && pathArr.length > 1){
    return <Navigate to={`/${relativePath}/${pathArr.slice(1, pathArr.length).join('/')}`}/>
  }
  return (<NotFound />)
}