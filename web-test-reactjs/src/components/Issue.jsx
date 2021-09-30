import React from 'react';
import "./styles/Issue.scss"
import logo from "./img/news-object-03.png"

function Issue(props) {
    return (
        <div className="issue">
            <img style={{ position: "absolute", height: "60px", top: "40px", right: "40px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/297831BF-7E68-4E36-B1F8-C68C4CC32C24.png" alt="" />
            <img style={{ position: "absolute", height: "70px", top: "120px", right: "40px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/AFFD1B68-D3E8-48B8-9900-87E09160EC1A.png" alt="" />
            <h2 className="title">HAPPENED'S ISSUE</h2>
            <p className="content">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br />
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            <button className="btn-custom">SEE MORE</button>
            <div className="list-brand">
                <div className="card-brand-start">
                    <img className="logo-start" src={logo} alt="" />
                    <span className="title-issue">
                        WHPN<br />ISSUE
                    </span>
                    <img className="logo" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/F70680D9-7FC7-4E04-884A-44FC7A8BE9F2.png" alt="" />
                </div>
                <div className="card-brand">
                    <img className="logo-hot" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/4C723DB7-B4BD-433D-B2E3-D34A2E0F1DB7.png" alt="" />
                    <div className="title-brand">
                        <span>B BRAND</span>
                    </div>
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/91CBB349-20B7-46E7-B635-EFECDFF4A374.png" alt="" />
                </div>
                <div className="card-brand" >
                    <div className="title-brand" >
                        <span>C BRAND</span>
                    </div>
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/6FD14C5C-BB25-4BD0-AE68-61919E51E95D.png" alt="" />
                </div>
                <div className="card-brand" style={{ backgroundColor: "#ff5500" }}>
                    <div className="title-brand" style={{ backgroundColor: "#ff5500" }}>
                        <span>D BRAND</span>
                    </div>
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/91CBB349-20B7-46E7-B635-EFECDFF4A374.png" alt="" />
                </div>
                <div className="card-brand">
                    <img className="logo-lol" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/A967E2DB-5BED-433E-BFB9-D47716B994C0.png" alt="" />
                    <div className="title-brand">
                        <span>E BRAND</span>
                    </div>
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/440C3E2B-28AB-4047-8880-C0A54D79AE96.png" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Issue;