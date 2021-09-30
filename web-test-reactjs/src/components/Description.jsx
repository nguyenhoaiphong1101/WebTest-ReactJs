import React from 'react';
import "./styles/Description.scss"

function Description(props) {
    return (
        <div className="description">
            <img className="logo" style={{ height: "100px", top: 0, left: "200px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/02A23C31-CC33-47E8-B82E-A2F7096698DC.png" alt="" />
            <img className="logo" style={{ height: "100px", top: "1075px", left: "200px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/0168196A-9DD5-4EFB-A15E-43380584A616.png" alt="" />
            <img className="logo" style={{ height: "150px", top: "1150px", left: "285px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/08804C0C-0536-4A1F-8644-0170465B99ED.png" alt="" />
            <img className="logo" style={{ height: "50px", top: "1150px", left: "1000px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/1267AB49-5A78-4D94-B40E-EFA936BA4FDA.png" alt="" />
            <img className="logo" style={{ height: "350px", top: "350px", left: "-230px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/85532AFA-8994-46BF-A9A7-66FC3A0A2FE3.png" alt="" />
            <img className="logo" style={{ height: "100px", top: "170px", right: "150px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/E9B2E4AC-E71B-46E6-B37D-1B57ECCB1D66.png" alt="" />
            <img className="logo" style={{ height: "80px", top: "250px", right: "210px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/C99E5644-469D-43F9-8888-BE44962056ED.svg" alt="" />
            <img className="logo" style={{ height: "300px", top: "600px", right: "-140px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/37E287A8-7805-476D-AB29-D81007456DCC.svg" alt="" />
            <img className="logo" style={{ height: "400px", top: "800px", right: "-150px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/B0B9D88B-F067-4CC7-B337-22512D0B78D5.png" alt="" />
            <img className="logo" style={{ width: " 64%", top: "480px", left: "18%" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/5F0B319D-9E21-414D-85AC-D3B176A1376C.png" alt="" />
            <h2 className="title">WHAT HAPPEND</h2>
            <p className="content">How to create mobile-optimized videos in minutes. Not a designer,<br />
                every team makes a lot of videos Can be trimmed. Take the first </p>
            <button className="btn-custom">SEE MORE</button>
        </div>
    );
}

export default Description;