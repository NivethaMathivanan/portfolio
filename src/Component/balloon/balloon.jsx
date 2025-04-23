import React, { useEffect, useState } from "react";
import './balloon.css'
const getRandom = (min, max) => Math.random() * (max - min) + min;

const Glitter = ({ x, y }) => {
  const particles = Array.from({ length: 10 });

  return (
    <div className="glitter" style={{ top: y, left: x }}>
      {particles.map((_, i) => (
        <span
          key={i}
          style={{
            transform: `rotate(${Math.random() * 360}deg) translate(${getRandom(5, 30)}px)`,
            background: `hsl(${Math.random() * 360}, 100%, 70%)`,
          }}
        />
      ))}
    </div>
  );
};

const Bubble = ({ id, onClick }) => {
    const [style, setStyle] = useState({});
    const [blast, setBlast] = useState(false);
  
    useEffect(() => {
      const x = getRandom(10, 90);
      const y = getRandom(10, 80);
      const size = getRandom(30, 80);
      setStyle({
        left: `${x}%`,
        top: `${y}%`,
        width: `${size}px`,
        height: `${size}px`,
      });
    }, []);
  
    const handleTouchOrClick = () => {
      if (blast) return; // prevent multiple triggers
      setBlast(true);
      setTimeout(() => {
        onClick(id); // remove after animation
      }, 300); // matches CSS animation duration
    };
  
    return (
      <div
        className={`bubble ${blast ? "blast" : ""}`}
        style={style}
        onMouseDown={handleTouchOrClick}
        onTouchStart={handleTouchOrClick}
      />
    );
  };
    

export default function Nive() {
  const [bubbles, setBubbles] = useState([]);
  const [glitters, setGlitters] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setGameOver(true);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((t) => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setBubbles((b) => [...b, { id: Date.now() }]);
    }, 1500);
    return () => clearInterval(interval);
  }, [gameOver]);

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((b) => [...b, { id: Date.now() }]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleBubbleClick = (id) => {
    setBubbles((prev) => prev.filter((b) => b.id !== id));
    setScore((s) => s + 1);
  };

  const handleMouseClick = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const id = Date.now();
    setGlitters((g) => [...g, { id, x, y }]);
    setTimeout(() => {
      setGlitters((g) => g.filter((glit) => glit.id !== id));
    }, 700);
  };

  return (
    <div className="game" onClick={handleMouseClick}>
      {!gameOver ? (
        <>
          <h2 className="AboutBubbles"> Time Left: <span className="score">{timeLeft}s</span></h2>
          <h2 className="AboutBubbles">Score: <span className="score">{score}</span></h2>
          {bubbles.map((b) => (
            <Bubble key={b.id} id={b.id} onClick={handleBubbleClick} />
          ))}
          {glitters.map((g) => (
            <Glitter key={g.id} x={g.x} y={g.y} />
          ))}
        </>
      ) : (
        <div className="result-message">
          <h2 className="AboutBubbles">Final Score: <span className="score">{score}</span></h2>
          <h4 className="betterluck">
            {score >= 30 ? "🎉 Your Win! Super!" : "😓 Better luck next time!"}
          </h4>
        </div>
      )}
    </div>
  );
}
