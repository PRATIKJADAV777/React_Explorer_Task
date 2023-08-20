
export default function Input(props) {

    if (props.style) {
        props.style.width = "100%"
    }

    // const {} = props
    return (
        <div style={{ width: "100%" }}>
            <input type={props.type || "text"} name={props.name} onChange={props.onChange || null} className={props.className || ""} value={props.value || ""  } placeholder={props.placeholder || ""} style={props.style || { width: "100%" }} />

            {
                props.IsError ? <span className="text-danger">{props.helperText}</span> : ""
            }

        </div>
    )
}
