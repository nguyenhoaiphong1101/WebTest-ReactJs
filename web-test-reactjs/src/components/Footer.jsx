import React from 'react';
import "./styles/Footer.scss"

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer-list">
                <div className="footer-left">
                    <div className="footer-group">
                        <span className="footer-label">what happened</span>
                        <ul>
                            <li className="footer-item">[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                            <li className="footer-item">[공지] 29CM 강남 스토어 영업 종료</li>
                            <li className="footer-item">[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                            <li className="footer-item">[공지] iOS 10 이하 버전 지원 중단 안내</li>
                            <li className="footer-item">[공지] 개인 정보 처리 방침 변경 사전 안내</li>
                        </ul>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="footer-group">
                        <span className="footer-label">about us</span>
                        <ul>
                            <li className="footer-item">회사 소개</li>
                            <li className="footer-item">인재 채용</li>
                            <li className="footer-item">상시 할인 혜택</li>
                        </ul>
                    </div>
                    <div className="footer-group">
                        <span className="footer-label">my order</span>
                        <ul>
                            <li className="footer-item">내 주문</li>
                            <li className="footer-item">주문 배송</li>
                            <li className="footer-item">취소 / 교환 / 반품 내역</li>
                            <li className="footer-item">상품 리뷰 내역</li>
                            <li className="footer-item">증빙 서류 발급</li>
                        </ul>
                    </div>
                    <div className="footer-group">
                        <span className="footer-label">my account</span>
                        <ul>
                            <li className="footer-item">회원 정보 수정</li>
                            <li className="footer-item">회원 등급</li>
                            <li className="footer-item">마일리지 현황</li>
                            <li className="footer-item">쿠폰</li>
                        </ul>
                    </div>
                    <div className="footer-group">
                        <span className="footer-label">help</span>
                        <ul>
                            <li className="footer-item">1 : 1 상담 내역</li>
                            <li className="footer-item">상품 Q & A 내역</li>
                            <li className="footer-item">공지 사항</li>
                            <li className="footer-item">자주하는 질문</li>
                            <li className="footer-item">고객의 소리</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-contact">
                <span>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr<br />
                    서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</span>
                <div className="social">
                    <img className="logo" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/47959620-B596-4CB3-9301-6A6FD4FCE3AE.svg" alt="" />
                    <img className="logo" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/A6ACFF4A-EF2B-4E29-B8FB-C9491AE57767.svg" alt="" />
                    <img className="logo" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/D825897E-ECCF-4669-9258-46907353579D.svg" alt="" />
                </div>
            </div>
        </div>
    );
}

export default Footer;