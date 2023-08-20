export default function Validation(data, type) {
    const err = []
    const { Email, Password, Name } = data

    if (type === "register") {

        // For FirstName 
        if (!Name) {
            err.push({ key: "Name", message: "Please Enter Name" })
        } else if (!(/^[a-zA-Z '.-]{2,10}$/.test(Name))) {
            err.push({ key: "Name", message: "Invalid Name" })
        }

        // For Email
        if (!Email) {
            err.push({ key: "Email", message: "Please Enter Email" })
        } // eslint-disable-next-line
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {
            err.push({ key: "Email", message: "Inavalid Email" })
        }

        //For Password
        if (!Password) {
            err.push({ key: "Password", message: "Please Enter Password" })
        }
        else if (!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(Password))) {
            err.push({ key: "Password", message: "Password is To Weak Plaese Enter Strong Password " })
        }

    }
    else {
        // For Email
        if (!Email) {
            err.push({ key: "Email", message: "Please Enter Email" })
        } // eslint-disable-next-line
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))) {
            err.push({ key: "Email", message: "Inavalid Email" })
        }

        //For Password
        if (Password.length <= 2) {
            err.push({ key: "Password", message: "Please Enter Password" })
        } // eslint-disable-next-line
        else if (!(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(Password))) {
            err.push({ key: "Password", message: "Password is To Weak Plaese Enter Strong Password " })
        }
    }
    return err

}