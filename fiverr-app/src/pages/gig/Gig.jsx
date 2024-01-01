import React from "react";
import "./gig.scss";
import { Slider } from "infinite-react-carousel";

export const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FIVERR > GRAPHICS & DESIGN ></span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Melisa Doe</span>
            <div className="stars">
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <img src="/images/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slideToShow={1} arrowsScroll={1}>
            <img
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            libero qui distinctio doloribus possimus? Sequi ipsum odit fugiat
            odio, eos recusandae, dolorum hic eligendi aliquam illo neque,
            voluptates praesentium? Quibusdam fuga quam quisquam recusandae
            ipsam aspernatur eaque, expedita illum modi repellendus, maxime
            nihil quidem animi nisi aliquid beatae velit delectus ipsa. Fugiat
            cupiditate reiciendis cum aperiam perferendis voluptatem odio
            doloremque iusto. At rem assumenda iure blanditiis culpa, fugiat qui
            tenetur esse, modi ullam incidunt, deserunt commodi. Dignissimos
            modi rerum explicabo. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Facere illo esse omnis, inventore suscipit error
            nostrum porro tempore expedita obcaecati in impedit, veniam sed quod
            doloribus hic explicabo minima vitae laboriosam animi perferendis
            repellat perspiciatis. Doloribus voluptatum praesentium quia
            inventore. Culpa maiores tempora aliquid nostrum fugiat? Quod eos
            quaerat ut iusto aut asperiores soluta error.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Melisa Doe</span>
                <div className="stars">
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <img src="/images/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">USA</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Avg response time</span>
                  <span className="desc">4 hours</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Language </span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Melisa, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};
