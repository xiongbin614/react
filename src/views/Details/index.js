import { Carousel, WingBlank } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
import React, { Component } from 'react';
import './index.less';
class Details extends Component {
  render() {
    return (
      <div className="details">
        <div className="lzy-swiper">




             <WingBlank>
                <Carousel
                  autoplay={true}
                  infinite
                  dots={true}
                >
                  <img src="https://res.vmallres.com/pimages//sale/2019-02/ugfxv1s1vEseKNice2ok.jpg" alt="" />
                  <img src="https://res.vmallres.com/pimages//sale/2019-02/6Km8n1Rwe94ttWlNKtsE.jpg" alt="" />
                  <img src="https://res.vmallres.com/pimages//sale/2019-02/8Kl2w0EsqEH45Nx6e74B.jpg" alt="" />
                  <img src="https://res.vmallres.com/pimages//sale/2019-02/EnaGwaeJbrWGfyhlnzJo.png" alt=""/>
                </Carousel>
              </WingBlank>

        </div>
      </div>
    )
  }
}

export default Details;
