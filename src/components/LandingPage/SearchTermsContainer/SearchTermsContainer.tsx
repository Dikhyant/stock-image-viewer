import React, { useState } from "react";

type SearchTermsContainerProps = {
    style?: React.CSSProperties;
}

type SeachTerms = {
    id: string;
    text: string;
}

const SearchTermsContainer:React.FC<SearchTermsContainerProps> = ({
    style,
}) => {
    const [searchTerms, setSearchTerms] = useState<SeachTerms[]>([
        {
            id: "Digital",
            text: "Digital",
        },
        {
            id: "Computer",
            text: "Computer",
        },
        {
            id: "Codierung",
            text: "Codierung",
        },
        {
            id: "Tech",
            text: "Tech",
        },
        {
            id: "Netz",
            text: "Netz",
        },
        {
            id: "Code",
            text: "Code",
        },
        {
            id: "Finanzieren",
            text: "Finanzieren",
        },
        {
            id: "Marketing",
            text: "Marketing",
        },
        {
            id: "Car",
            text: "Car",
        },
    ]);
    return (
        <div
            style={{
                ...{
                    width: "100%",
                    height: "101.21px",
                    backgroundColor: "#F5F5F5",
                    overflowX: "scroll",
                    overflowY: "hidden",
                },
                ...style,
            }}
        >
            <div
                style={{
                    ...{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        top: "50%",
                        transform: "translateY(-50%)",
                    }
                }}
            >
            {
                searchTerms.map((item, index) => {
                    return (
                        <button
                            key={item.id}
                            style={{
                                ...{
                                    borderStyle: "solid",
                                    borderColor: "#D1D1D1",
                                    borderWidth: "1.06px",
                                    borderRadius: "4.23px",
                                    paddingLeft: "55px",
                                    paddingRight: "55px",
                                    paddingTop: "13.74px",
                                    paddingBottom: "13.74px",
                                    marginRight: "1rem"
                                },
                                ...{
                                    marginLeft: index === 0 ? "5rem" : ""
                                }
                            }}
                        >
                            {item.text}
                        </button>
                    )
                })
            }
            </div>
        </div>
    )
}

export default SearchTermsContainer;