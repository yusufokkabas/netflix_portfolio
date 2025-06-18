// Reading.tsx

import React from "react";
import "./Reading.css";
import atomicHabits from "../images/atomic_habits.jpg";
import richDadPoorDad from "../images/rich_dad_poor_dad.jpg";
import alchemist from "../images/alchemist.jpg";
import eatThatFrog from "../images/eat_that_frog.jpg";

const books = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    imgSrc: atomicHabits,
    description:
      "A practical guide to building good habits and breaking bad ones.",
  },
  {
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    imgSrc: richDadPoorDad,
    description: "An eye-opener on wealth, assets, and financial literacy.",
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    imgSrc: alchemist,
    description: "A magical journey of following one's dreams.",
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    imgSrc: eatThatFrog,
    description: "A motivational book on overcoming procrastination.",
  },
];

const Reading: React.FC = () => {
  return (
    <div className="reading-container">
      <h2 className="reading-title">📚 Books That Shaped My Journey</h2>
      <p className="reading-intro">
        These books have influenced my perspectives, motivation, and
        self-growth.
      </p>
      <div className="books-grid">
        {books.map((book, index) => (
          <div
            key={index}
            className="book-card"
            style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
          >
            <img src={book.imgSrc} alt={book.title} className="book-cover" />
            <div className="book-info">
              <h3 className="book-title">{book.title}</h3>
              <h4 className="book-author">{book.author}</h4>
              <p className="book-description">{book.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reading;
