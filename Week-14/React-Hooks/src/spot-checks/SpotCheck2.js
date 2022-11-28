import React from "react";
import { useState } from "react";

export default function SpotCheck2() {
  const [isLoading, setIsLoading] = useState(true);
  const [lesson, setLesson] = useState({
    name: "React Hooks",
    completed: false,
    started: false,
  });

  function updateLesson(key) {
    setLesson({ ...lesson, [key]: true });
  }

  function getLessonStatus() {
    if (lesson.completed) {
      return "Completed";
    } else if (lesson.started) {
      return "In progress";
    } else {
      return "Not started";
    }
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 2</h4>
      <div className="exercise" id="sc-2">
        {isLoading ? (
          <div>"Page is loading..."</div>
        ) : (
          <div>
            <p>{lesson.name}</p>
            <p>Lesson Status: {getLessonStatus()}</p>
          </div>
        )}
        <button onClick={() => updateLesson("started")}>Begin Lesson</button>
        <button onClick={() => updateLesson("completed")}>
          Complete Lesson
        </button>
      </div>
    </div>
  );
}
