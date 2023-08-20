import { useState } from "react"
import Validation from "../Common/Validation"
import Input from "../Component/Input"
import { useNavigate } from "react-router-dom"

export default function LoginScreen({ setVerify }) {
    const [user, setuser] = useState({
        Email: "",
        Password: ""
    })
    const [error, seterror] = useState([])
    const [Clicked, setClicked] = useState(false)
    const navigate = useNavigate()

    const LoginHandler = () => {
        setClicked(true)
        const Data = JSON.parse(localStorage.getItem("UserData") || "[]")
        const Valid = Validation(user, "login")
        if (Valid.length > 0) {
            seterror(Valid)
            return
        }
        const result = Data.find((x) => x.Email === user.Email && x.Password === user.Password)

        if (!result) {
            seterror([{ key: "Email", message: "Invalid Email Or Password" }])
            return
        }
        localStorage.setItem("user", JSON.stringify(result))
        setVerify(true)
        navigate("/")
    }
    return <>
        <div className="row justify-content-center align-items-center vh-100 m-0">
            <div className="col-4  border-3 p-5 shadow rounded">
                <form className="text-start">
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email Address</label>
                        <Input type="email" id="form2Example1"
                            name="email"
                            IsError={error?.find(x => x.key === "Email")}
                            helperText={error.find(x => x.key === "Email")?.message}
                            value={user.Email}
                            onChange={(e) => {
                                setuser({ ...user, Email: e.target.value })
                                if (Clicked) {
                                    const Valid = Validation({ ...user, Email: e.target.value }, "login")
                                    seterror(Valid)
                                }
                            }} className="form-control" />
                    </div>

                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <Input type="password" id="form2Example2"
                            IsError={error.find(x => x.key === "Password")}
                            helperText={error.find(x => x.key === "Password")?.message}
                            value={user.Password}
                            onChange={(e) => {
                                setuser({ ...user, Password: e.target.value })
                                if (Clicked) {
                                    const Valid = Validation({ ...user, Password: e.target.value }, "login")
                                    seterror(Valid)
                                }
                            }}
                            className="form-control" />
                    </div>
                    <button type="button" className="btn btn-primary btn-block mb-4" onClick={LoginHandler}>Sign in</button>

                    <div className="text-center">
                        <p>Create New Account ? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    </>
}