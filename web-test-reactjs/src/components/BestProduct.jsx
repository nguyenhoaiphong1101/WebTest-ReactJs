import React from 'react';
import "./styles/BestProduct.scss"

function BestProduct(props) {
    return (
        <div className="best-product">
            <h2 className="title">BEST PRODUCT</h2>
            <p className="content">How to create mobile-optimized videos in minutes. Not a designer,
                every team makes a lot of videos Can be trimmed. Take the first </p>
            <div className="list-product">
                <div className="product-card">
                    <img className="logo-rank" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/80E3BAB1-B937-4221-8175-E8D3B1B95A3B.png" alt="" />
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/8B8780DD-667D-4AF8-99A7-EE4DD9D721B8.png" alt="" />
                    <div className="sub-product">
                        <p>
                            How to create<br />
                            mobile-optimized
                        </p>
                        <img src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" alt="" />
                    </div>
                </div>
                <div className="product-card">
                    <img className="logo-rank" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/B07AE951-5105-48B2-8C27-69E06D222F63.png" alt="" />
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/0DDED704-0F29-4235-8F7E-A8FD3A65A6E4.png" alt="" />
                    <div className="sub-product">
                        <p>
                            How to create<br />
                            mobile-optimized
                        </p>
                        <img src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" alt="" />
                    </div>
                </div>
                <div className="product-card">
                    <img className="logo-rank" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/E656571C-7D6B-4819-AC80-8938E09F4AA5.png" alt="" />
                    <img className="main-img" src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/392FF024-EA35-4734-B226-9F4D4AC05DE2.png" alt="" />
                    <div className="sub-product">
                        <p>
                            How to create<br />
                            mobile-optimized
                        </p>
                        <img src="https://cdn.zeplin.io/610079a8a166fd10c34366e0/assets/831C827A-2FCB-4239-AB7F-ADBFD62479DC.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
}

export default BestProduct;