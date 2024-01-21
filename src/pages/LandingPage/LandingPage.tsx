import React, { useState } from "react";
import Header from "../../components/LandingPage/Header/Header";
import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import BackgroundImage from "../../assets/images/fuji-berg-mit-milchstrasse-in-der-nacht.svg";
import { searchImages } from "../../api/requests/images.requests";
import SearchTermsContainer from "../../components/LandingPage/SearchTermsContainer/SearchTermsContainer";

type LandingPageProps = {

}

const LandingPage:React.FC<LandingPageProps> = () => {
    const [searchInputText, setSearchInputText] = useState<string>("");
    const [isSearchResultFound, setIsSearchResultFound] = useState<boolean>(false);

    function onSearchInputChangeText(text: string) {
        setSearchInputText(text);
    }

    async function onSearchActionClicked() {
        const resp = await searchImages(searchInputText);
        console.log("image search results", resp);
    }
    return (
        <div
            style={{
                ...{
                    minHeight: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                },
                ...{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "100%"
                }
            }}
        >
            <Header 
                style={{
                    ...{
                        marginTop: "39.19px"
                    },
                    ...{
                        width: "90%"
                    }
                }}
            />

            <div
                style={{
                    ...{
                        color: "#FFFFFF",
                        // fontSize: "71.25px",
                        fontWeight: "700",
                        width: "65.7%",
                        textAlign: "center",
                        marginTop: "83.72px",
                        
                    },
                    ...{
                        display: isSearchResultFound ? "none" : ""
                    }
                }}
                className={`${styles.heroText}`}
            >
            Discover over 2,000,000 free Stock Images
            </div>

            <SearchBar
                onChangeText={onSearchInputChangeText}
                onSearchActionClicked={onSearchActionClicked}
                style={{
                    ...{
                        width: "59.14%",
                        marginTop: "76.05px"
                    }
                }}
            />

            <div
                style={{
                    ...{
                        color: "#FFFFFF",
                        fontSize: "71.25px",
                        fontWeight: "700",
                        width: "65.7%",
                        textAlign: "center",
                        marginTop: "23.72px",
                        
                    },
                    ...{
                        display: isSearchResultFound ? "" : "none"
                    }
                }}
            >
                Results: {searchInputText}
            </div>

            <SearchTermsContainer
                style={{
                    ...{
                        display: isSearchResultFound ? "" : "none"
                    },
                    ...{
                        marginTop: "23px",
                    }
                }}
            />
        </div>
    )
}

export default LandingPage;