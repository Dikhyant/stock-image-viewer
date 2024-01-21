import React from "react";

type HeaderProps = {
    className?: string;
    style?: React.CSSProperties;
}

const Header:React.FC<HeaderProps> = ({
    className,
    style,
}) => {
    return (
        <div 
            className={`${className}`} 
            style={{
                ...{
                    width: "1217.48px",
                    height: "67.69px",
                },
                ...{
                    borderRadius: "8.906px",
                    boxShadow: "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
                    backdropFilter: "blur(25.034873962402344px)",
                },
                ...{
                    display: "flex",
                    alignItems: "center",
                },
                ...style
            }}
        >
            <div
                style={{
                    ...{
                        color: "#FFFFFF",
                        fontWeight: "600",
                        fontSize: "17.81px",
                        marginLeft: "2rem"
                    }
                }}
            >Homepage</div>

            <div style={{flexGrow: 1}} ></div>

            <button
                style={{
                    ...{
                        color: "#FFFFFF",
                        backgroundColor: "rgba(0,0,0,0)",
                        borderWidth: 0,
                        fontWeight: "600",
                        fontSize: "17.81px",
                        marginRight: "1rem",
                    }
                }}
            >Login</button>

            <div
                style={{
                    ...{
                        color: "#FFFFFF",
                        backgroundColor: "rgba(0,0,0,0)",
                        borderRadius: "8.91px",
                        borderWidth: "2.67px",
                        borderStyle: "solid",
                        borderColor: "#ffffff",
                        fontWeight: "600",
                        fontSize: "17.81px",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        paddingTop: "0.25rem",
                        paddingBottom: "0.25rem",
                        marginRight: "2rem",
                    }
                }}
            >Create Account</div>
        </div>
    )
}

export default Header;