import Image from "next/image";
import Animate from "../components/Animate";
import { Block, Row, Col } from "../components/Grid";
import { Twitter, Dribbble, Instagram, Tumbler } from "../components/Icon";
import CoverImage from './cover-imagehome';
import styles from "../styles/Magazine.module.scss";

const Magazine = (props) => (
    <div className={`${props.className} ${styles.magazine}`}>
        <div className={styles.row}>{props.children}</div>
    </div>
);

Magazine.Cover = (props) => {
    const style = {
        backgroundImage: `url(${props.image.coverImage.url})`,
    };

    return (
        <div className={`${styles.col} ${styles.magazine__cover}  ${props.className}`} >
         
            <div className={styles.magazine__loading}>
                <span className="afc-spinner afc-spinner--primary"></span>
            </div>
            <Animate name="fadeIn" delay=".1ms" duration="3s">
                <div className={styles.cover} >
                <CoverImage title={props.title} slug={props.slug} url={props.image.coverImage.url || '/default-image.jpg'} />
                {props.children}
                </div>
            </Animate>
        </div>
    );
};

Magazine.Content = (props) => (
    <div className={`${styles.col} ${props.className}`} style={props.style}>
        <div className={styles.content}>{props.children}</div>
    </div>
);

Magazine.Footer = (props) => {
    const color = props.color || "#fff";

    return (
        <div className={` ${props.className}`} >
            {props.children || (
                <Block className="px-8 py-1">
                    <Animate name="fadeIn" delay="2s">
                        <Row className="row">
                            <Col className="col-12 col-sm-6">
                                <p className="text-sm text-center md:text-left" style={{ color }}>
                                    © 2024 Всі права захищені )
                                </p>
                            </Col>
                            <Col className="col-12 col-sm-6">
                                <ul className="flex items-center  justify-end social-icons">
                                    <li className="md:ml-3">
                                        <a href="https://www.tiktok.com/@aliona_statkevych?_t=8oJhspJpbUG&_r=1" className="hover:opacity-60">
                                            <Twitter fill={color} width={14} height={14} />
                                        </a>
                                    </li>
                                   

                                    <li className="ml-3">
                                        <a href="https://www.instagram.com/alyona_statkevich?igsh=MWZ4MTRubTU0b2g5MA%3D%3D&utm_source=qr" className="hover:opacity-60">
                                            <Instagram fill={color} width={14} height={14} />
                                        </a>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Animate>
                </Block>
            )}
        </div>
    );
};

export default Magazine;