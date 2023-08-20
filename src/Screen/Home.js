import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Home({Verify}) {
  const navigate = useNavigate()
    useEffect(() => {
        if (!Verify) {
          navigate("/login")
        }
      }, [])
    return <>
        <img src="../wall.jpg" width={"100%"} height={"100%"}/>
    </>
}