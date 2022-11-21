import config from "../config.json";
import styled from "styled-components";
import { CSSReset } from "../src/components/CSSReset";
import Menu from "../src/components/Menu";
import { StyledTimeline } from "../src/components/Timeline";

const HomePage = () => {
    // const homeStyle = { backgroundColor: "" };
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1
            }}>
                <Menu />
                <Header></Header>
                <Timeline playlists={config.playlists}>
                    Conteudo
                </Timeline>
                <Footer></Footer>
            </div>
        </>
    );
}
export default HomePage



// const Menu = () => {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .user_info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const Header = () => {
    return (
        <StyledHeader>
            {/* <div className="banner">
                <img src="banner" alt="banner" />
            </div> */}
            <section className="user_info">
                <img src={`https://github.com/${config.github}.png`} alt="foto perfil" />
                <div>
                    <h2>{config.name}</h2>
                    <p>{config.job}</p>
                </div>
            </section>
        </StyledHeader>
    )
}

const Timeline = (props) => {
    const playlistNames = Object.keys(props.playlists)

    // statement (for)
    // retorno por expressao (forEach) => map
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName];
                console.log(videos);
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.titulo}
                                        </span>
                                    </a>
                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
}

const Footer = () => {
    return (
        <div>
            Footer
        </div>
    )
}