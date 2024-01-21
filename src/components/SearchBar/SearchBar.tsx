import React from "react";
import SearchIcon from "../icons/SearchIcon/SearchIcon";
import styles from "./index.module.css";

type SearchBarProps = {
    style?: React.CSSProperties;
}

const SearchBar:React.FC<SearchBarProps> = ({
    style,
}) => {
    return (
        <div
            style={{
                ...{
                    width: "757.03px",
                    height: "67.69px",
                    borderRadius: "8.91px",
                    boxShadow: "-3.943px 3.943px 3.943px 0px rgba(255, 255, 255, 0.43) inset, 3.943px -3.943px 3.943px 0px rgba(182, 182, 182, 0.43) inset",
                    backdropFilter: "blur(25.034873962402344px)",
                    display: "flex",
                    alignItems: "center",
                },
                ...style
            }}
        >
            <SearchIcon
                style={{
                    ...{
                        marginLeft: "1rem",
                        marginRight: "1rem",
                    }
                }}
            />

            <div
                style={{
                    ...{
                        height: "50%",
                        width: 0,
                        borderStyle: "solid",
                        borderLeftWidth: "1.78px",
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 50,
                        
                        borderLeftColor: "#fff",
                    }
                }}
            ></div>

            <input
                type="text"
                style={{
                    ...{
                        flex: 1,
                        color: "#fff",
                        fontSize: "17.81px",
                        fontWeight: "600",
                        marginLeft: "1rem",
                        backgroundColor: "rgba(0,0,0,0)",
                        borderStyle: "none",
                        outline: "none",
                    }
                }}
                className={`${styles.searchBar}`}
                
                
                placeholder="Search"
            />

           {/*  <div style={{
                flexGrow: 1
            }} ></div> */}

            <button
                style={{
                    ...{
                        color: "#fff",
                        fontSize: "17.81px",
                        fontWeight: "600",
                        backgroundColor: "rgba(0,0,0,0)",
                        borderStyle: "solid",
                        borderColor: "#fff",
                        borderWidth: "2.67px",
                        borderRadius: "8.91px",
                        paddingLeft: "18px",
                        paddingRight: "18px",
                        paddingTop: "7px",
                        paddingBottom: "7px",
                        marginRight: "1rem",
                        marginLeft: "1rem",
                    }
                }}
            >GO!</button>
        </div>
    )
}

export default SearchBar;