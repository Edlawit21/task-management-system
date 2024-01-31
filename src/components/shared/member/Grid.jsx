import "./Grid.css";
import { Avatar } from "antd";

const Grid = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "24px",
          alignItems: "center",
        }}
      >
        <div className="col-team">
          <div
            style={{
              height: "8em",
              background: "grey",
              borderStartEndRadius: "10px",
              borderStartStartRadius: "10px",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              style={{
                border: "4px solid white",
                width: "100px",
                height: "100px",
                marginTop: "-50px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <button>abebe bseo</button>
            <h2>full stack</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingRight: " 20px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 10</h1>
              <h1>projects</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderLeft: "1px solid",
                paddingLeft: "30px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 11</h1>
              <h1>tasks</h1>
            </div>
          </div>
        </div>

        <div className="col-team">
          <div
            style={{
              height: "8em",
              background: "grey",
              borderStartEndRadius: "10px",
              borderStartStartRadius: "10px",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              style={{
                border: "4px solid white",
                width: "100px",
                height: "100px",
                marginTop: "-50px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <button>abebe bseo</button>
            <h2>full stack</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingRight: " 20px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 10</h1>
              <h1>projects</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderLeft: "1px solid",
                paddingLeft: "30px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 11</h1>
              <h1>tasks</h1>
            </div>
          </div>
        </div>

        <div className="col-team">
          <div
            style={{
              height: "8em",
              background: "grey",
              borderStartEndRadius: "10px",
              borderStartStartRadius: "10px",
            }}
          ></div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              style={{
                border: "4px solid white",
                width: "100px",
                height: "100px",
                marginTop: "-50px",
              }}
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <button>abebe bseo</button>
            <h2>full stack</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                paddingRight: " 20px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 10</h1>
              <h1>projects</h1>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                borderLeft: "1px solid",
                paddingLeft: "30px",
              }}
            >
              <h1 style={{ textAlign: "center" }}> 11</h1>
              <h1>tasks</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
