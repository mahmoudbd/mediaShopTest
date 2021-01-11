import React from 'react';
import { Carousel } from 'react-bootstrap';

export default function Slides() {
    return (
        <Carousel
            className="p-0"
            style={{ position: 'unset', height: '10rem' }}
        >
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/kindle/journeys/OGM2OTg3NjEt/OGM2OTg3NjEt-ODRkMTVlYzgt-w1500._CB412394063_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-eu.ssl-images-amazon.com/images/G/37/Gateway-New/hero/XCM_Manual_ORIGIN_1300850_1534414_NL_NYNY_nl_homeoffice_nl_nl_3621937_1500x600_1X_nl_NL._CB412324919_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/Other/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-AU_FT_PVD6151._CB416178734_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/15/CA-hq/2020/img/Consumer_Electronics/XCM_Manual_1298147_1521800_CA_BFCM20_ca_ce_gw_hero_3608020_1500x600_1X_en_CA._CB412225545_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/Amazon-co-uk-hq/2018/img/Prime/XCM_Manual_1133281_gatewayRedesignAcq_1500x600_Prime_1133280_30free-1x_1534769204-jpg._CB484986347_.jpg"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}
