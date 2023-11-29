import React from 'react'
import classNames from 'classnames'

function Button({ title, variant, children }) {
    return (
        <button className={classNames("bg-cyan-500 transition-all hover:bg-solid px-6 p-3 rounded-md", {
            "bg-red-500 text-white hover:bg-red-400": variant === "danger",
            "bg-yellow-500 hover:bg-yellow-400": variant === "warning",
            "bg-green-500 hover:bg-green-400": variant === "success"
        })}>
            {title}
        </button>
    )
}

export default Button
