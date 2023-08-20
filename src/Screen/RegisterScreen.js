import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Validation from "../Common/Validation"
import Input from "../Component/Input"

export default function RegisterScreen({ setVerify }) {
    const [user, setuser] = useState({
        Name: "",
        Email: "",
        Password: ""
    })
    const navigate = useNavigate()
    const [Error, SetError] = useState([])
    const [Clicked, setClicked] = useState(false)

    const RegisterHanler = () => {
        setClicked(true)
        const Valid = Validation(user, "register")
        if (Valid.length > 0) {
            SetError(Valid)
            return
        }

        let UserData = JSON.parse(localStorage.getItem("UserData") || "[]")
        const result = UserData.find(x => x.Email === user.Email)
        if (result) {
            SetError([{ key: "Email", message: "Email Is Already Exit" }])
            return
        }
        UserData.push(user)
        localStorage.setItem("UserData", JSON.stringify(UserData))
        localStorage.setItem("user", JSON.stringify(user))
        setVerify(true)
        navigate("/")

    }

    const HandleValue = (name, e) => {
        user[name] = e.target.value
        setuser({ ...user })
    }

    console.log(Error)
    return <>
        <section className="vh-100 bg-image">
            <div className="mask d-flex align-items-center h-100 gradient-custom-3">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                            <div className="card" style={{ borderRadius: "15px" }}>
                                <div className="card-body p-5">
                                    <h2 className="text-uppercase text-center mb-5">Create an account</h2>

                                    <form className="text-start">

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example1cg">Your Name</label>
                                            <Input
                                                IsError={Error.find(x => x.key === "Name")}
                                                value={user.Name}
                                                helperText={Error.find(x => x.key === "Name")?.message}
                                                type="text" id="form3Example1cg" name="Name" onChange={(e) => {
                                                    HandleValue(e.target.name, e)
                                                    if (Clicked) {
                                                        const Valid = Validation({ ...user, Name: e.target.value }, "register")
                                                        SetError([...Valid])
                                                    }
                                                    // setuser({ ...user, Name: e.target.value })
                                                }} className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example3cg">Your Email</label>
                                            <Input type="email" id="form3Example3cg" name="Email"
                                                IsError={Error.find(x => x.key === "Email")}
                                                value={user.Email}
                                                helperText={Error.find(x => x.key === "Email")?.message}
                                                onChange={(e) => {
                                                    HandleValue(e.target.name, e)
                                                    if (Clicked) {
                                                        const Valid = Validation({ ...user, Email: e.target.value }, "register")
                                                        SetError([...Valid])
                                                    }
                                                    // setuser({ ...user, Email: e.target.value })
                                                }} className="form-control form-control-lg" />
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="form3Example4cg">Password</label>
                                            <Input type="password" id="form3Example4cg"
                                                IsError={Error.find(x => x.key === "Password")}
                                                value={user.Password}
                                                helperText={Error.find(x => x.key === "Password")?.message}
                                                name="Password" onChange={(e) => {
                                                    HandleValue(e.target.name, e)
                                                    if (Clicked) {
                                                        const Valid = Validation({ ...user, Password: e.target.value }, "register")
                                                        SetError([...Valid])
                                                    }
                                                    // setuser({ ...user, Password: e.target.value })
                                                }} className="form-control form-control-lg" />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button type="button"
                                                className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body" onClick={RegisterHanler}>Register</button>
                                        </div>

                                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <a href="/login"
                                            className="fw-bold text-body"><u>Login here</u></a></p>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
}