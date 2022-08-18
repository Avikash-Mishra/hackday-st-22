import React from "react";
import ReactCardFlip from "react-card-flip";

export default function CardCopy({ card, index }) {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const styles = {
    card: {
      border: "1px solid #eeeeee",
      borderRadius: "3px",
      padding: "15px",
      // width: "350px",
      // height: "300px",
    },
    image: {
      height: "450px",
      width: "300px",
    },
  };

  const frontStyle = {
    backgroundImage: `url(${card.thumbnail})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: `center`,
    backgroundSize: `cover`,
  };

  const backStyle = {
    // card: styles.card,
    // image: styles.image,
    backgroundImage: `url("https://i.pinimg.com/564x/c3/75/95/c3759587aac95a0d8a3f5bc4b8a9c1ef.jpg")`,
    height: "450px",
    width: "300px",
    backgroundSize: "contain",
    // borderRadius: "3px",
  };

  function handleClick(e) {
    e.preventDefault();
    setIsFlipped(!isFlipped);
  }

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className={`tile`} style={styles.card} onClick={handleClick}>
        <img style={styles.image} src={card.thumbnail} />

        {/* <button onClick={handleClick}>Flip Card</button> */}
      </div>

      <div className={`tile`} style={styles.card} onClick={handleClick}>
        <div className="backStyle" style={backStyle}>
          <div className="backHeader">{card.name}</div>
          <div className="backTextDescription">{card.description}</div>
          <div className="backText">
            <ul style={{ listStyleType: "square" }}>
              <li>Comics: {card.comics}</li>
              <li>Series: {card.series}</li>
              <li>Stories: {card.stories}</li>
              <li>Events: {card.events}</li>
            </ul>
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
