import React from "react";
import Header from "../../components/LandingPage/Header/Header";
import styles from "./index.module.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import BackgroundImage from "../../assets/images/fuji-berg-mit-milchstrasse-in-der-nacht.svg";

type LandingPageProps = {

}

const LandingPage:React.FC<LandingPageProps> = () => {
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
                        
                    }
                }}
                className={`${styles.heroText}`}
            >
            Discover over 2,000,000 free Stock Images
            </div>

            <SearchBar
                style={{
                    ...{
                        marginTop: "76.05px"
                    }
                }}
            />
        </div>
    )
}

export default LandingPage;