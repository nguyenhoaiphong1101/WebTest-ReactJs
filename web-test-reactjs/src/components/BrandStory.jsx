import React from 'react';
import "./styles/BrandStory.scss"
import book1 from "./img/object-06.png"
import book2 from "./img/object-07.png"
import note from "./img/object-01.png"
import tree from "./img/object-04.png"
import calendar from "./img/object-05.png"

function BrandStory(props) {
    return (
        <div className="brand-story">
            <img className="img-note" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/D5C7C5A4-ED98-4F3F-8DBC-9581EF4FDEB5.png" alt="" />
            <img className="img-note-before" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/138E9440-88B2-4FAB-8FCF-7A0EFB6959DD.png" alt="" />
            <img className="img-book-left" src={book1} alt="" />
            <img className="img-book-left-next" src={book2} alt="" />
            <img className="img-note-left" src={note} alt="" />
            <img className="img-tree" src={tree} alt="" />
            <img className="img-calendar" src={calendar} alt="" />
            <h2 className="title">BRAND STORY</h2>
            <p className="content">모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서<br />
                다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.</p>
            <div className="sub-table">
                <img style={{ height: "350px" }} src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/7945AB48-AD01-44FD-8EFD-85A64F99E55D.png" alt="" />
                <div className="sub-table-main">
                    <h2 className="sub-table-title">WHAT HAPPENDED’S BRAND STORY</h2>
                    <p className="sub-table-content">청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을 풀이 옷을
                        봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서 살았으며, 듣는다. 수 있는
                        긴지라 사는가 낙원을 웅대한 아니다. 내는 이상 할지라도 피다. 피부가 불러 피고
                        인간의 타오르고 이성은 끝까지 칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을
                        아름답고 고행을 끝에 설산에서 황금시대를 이상을 운다. </p>
                    <button className="btn-custom">SEE MORE</button>
                </div>
            </div>
        </div>
    );
}

export default BrandStory;