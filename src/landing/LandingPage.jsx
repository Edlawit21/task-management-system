import "./LandingPage.css";
import people from "./image/people.jpg";
import timemanage from "./image/timemanage.jpg";
import team1 from "./image/team1.jpg";
import dash from "./image/dash.jpg";
import team2 from "./image/team2.png";
import teamimage from "./image/teamimage.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow, Autoplay } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { useState } from "react";
import { Button, Modal } from "antd";
import collaborative3 from "./image/collaborative3.png";
import background from "./image/background.jpg";
import partners from "./image/partners.png";
//import SignUp from "../login/SignUp";
import { Link } from "react-router-dom";

const slider = [
  {
    description:
      ' "SCHEDULING" involves planning and allocating time for specific activities, ensuring a balanced and organized approach to daily responsibilities.',
    image: team1,
    backgroundColor: "#F5EBE1",
    color: "orange",
  },
  {
    description:
      'Effective "COMMUNICATION" enhances coordination, fosters collaboration, and ensures everyone is aligned towards project goals.',
    image: team2,
    backgroundColor: "#8a63a6",
    color: "#ffffff",
  },
  {
    description:
      'A "PROJECT MANAGEMENT DASHBOARD" provides real-time insights and key metrics for streamlined decision-making in project success.',
    image: dash,
    backgroundColor: "#D4E7EE",
    color: "blue",
  },

  {
    description:
      '"TIME MANAGEMENT" is the art of prioritizing tasks efficiently, making the most of each moment. ',
    image: timemanage,
    backgroundColor: "#68A0B1",
    color: "green",
  },
  {
    description:
      'In a "COLLABORATIVE" environment, individuals contribute their skills and insights, fostering innovation, efficiency, and a sense of collective achievement.',
    image: people,
    backgroundColor: "#FAFAFA",
    color: "lightblue",
  },
  {
    description:
      ' "TEAMWORK" is the collaborative effort of individuals pooling their skills and resources to achieve common goals.',
    image: teamimage,
    backgroundColor: "#f08080",
    color: "red",
  },
];

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="carousel">
      <div>
        <div className="carousel-content">
          <h1>Team Collaboration and Management </h1>
          <hr />
          <p>
            Step into a realm where teamwork transcends ordinary bounds. Elevate
            your team synergy on our platform, a canvas for brilliance, turning
            shared aspirations into a harmonious masterpiece of achievement.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Link to="/signup" className="slider-btn">
              Get Started
            </Link>

            <Button
              className="more"
              onClick={showModal}
              style={{
                display: "display-flex",
                alignItems: "center",
                color: "#8d4bff",
                border: "2px solid #8d4bff",
                borderRadius: "3.125rem",
                padding: "1.325rem 1.875rem",

                textTransform: "uppercase",
                transition: "0.3s ease-in-out",
                fontSize: "clamp(0.8rem, 3vw, 1rem)",
                marginLeft: "20px",
              }}
            >
              <h3 style={{ marginTop: "-12px" }}>Learn More</h3>
            </Button>
            <Modal
              title={
                <div
                  style={{
                    display: "flex",
                    fontSize: "80px",
                    color: "#8d4bff",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={collaborative3}
                    alt="Icon"
                    style={{ marginRight: "8px" }}
                  />
                  TC&M
                </div>
              }
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
              width={1000}
              style={{
                top: 20,
              }}
            >
              <div
                style={{
                  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${background})`,
                  backgroundSize: "cover",
                }}
                className="paragraph"
              >
                <p style={{ margin: "30px" }}>
                  Welcome to our collaborative workspace, where teamwork meets
                  efficiency! Our website is designed to streamline team
                  collaboration and management with a simple and effective
                  approach. Within our platform, you will find three key roles:
                  the Leader, the Manager, and the Member.
                </p>
                <p style={{ margin: "15px" }}>
                  <h1 style={{ fontSize: "medium", fontWeight: "bold" }}>
                    1. Leader:
                  </h1>{" "}
                  The Leader is the visionary and initiator of projects. They
                  have the power to create new projects, outline tasks, and
                  assign responsibilities to team members. Once the project plan
                  is ready, the Leader seeks approval from the Manager to
                  proceed.
                </p>
                <p style={{ margin: "15px" }}>
                  <h1 style={{ fontSize: "medium", fontWeight: "bold" }}>
                    1. Manager:
                  </h1>{" "}
                  The Manager plays a crucial role in overseeing the team&apos;s
                  progress. They have the ability to view the entire project
                  landscape, offer suggestions, and provide valuable advice.
                  While the Manager doesn&apos;t directly assign tasks, their
                  approval is needed for projects to move forward. Think of them
                  as the guiding hand ensuring everything aligns with the
                  overall team goals.
                </p>
                <p style={{ margin: "15px" }}>
                  <h1 style={{ fontSize: "medium", fontWeight: "bold" }}>
                    1. Member:
                  </h1>{" "}
                  Members are the heart of the team, responsible for carrying
                  out assigned tasks. They collaborate with each other, follow
                  the project plan laid out by the Leader, and contribute to the
                  overall success of the team.
                </p>
                <p style={{ margin: "30px" }}>
                  Our platform fosters a collaborative environment where every
                  team member&apos;s strengths come together to achieve shared
                  objectives. From project inception to task completion, our
                  streamlined process ensures effective communication, seamless
                  coordination, and ultimately, success in reaching team goals.
                  Experience the power of teamwork, simplified. Our website is
                  your go-to solution for efficient collaboration and
                  management, ensuring that every member contributes their best
                  to the collective success of the team.
                </p>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <Swiper
        className="myswiper"
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: true,
        }}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1560: {
            slidesPerView: 3,
          },
        }}
      >
        {slider.map((data, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${data.image})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              height: "400px",
              backgroundColor: data.backgroundColor || "#f0f0f0",
            }}
            className="myswiper-slider"
          >
            <div>
              <p style={{ color: data.color || "black" }}>{data.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <img src={partners} alt="hey" className="people" />
      {/*<img src={hand} alt="hey" className="timemanage" />*/}
    </div>
  );
};

export default LandingPage;
