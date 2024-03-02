/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import React from "react";


const Field = ({ label, children, htmlFor, error }) => {

    const id = htmlFor || getChildId(children);

    return (
        <>
            <div className="form-control">
                {
                    label && (
                        <label className="auth-label" htmlFor={id}>
                            {label}
                            {children}
                            {
                                !!error && <div role="alert" className="text-red-500">{error.message}</div>
                            }
                        </label>
                    )
                }
            </div>
        </>
    );
};

const getChildId = (children) => {
    const child = React.Children.only(children);

    if ("id" in child?.props) {
        return child.props.id;
    }
};
export default Field;