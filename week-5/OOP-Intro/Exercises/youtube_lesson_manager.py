class YouTubeLessonManager:
    def __init__(self) -> None:
        self.lessons = {}

    def save(self, name, url):
        self.lessons[name] = url

    def get(self, lesson_name):
        return self.lessons[lesson_name]


# Tests
lesson_manager = YouTubeLessonManager()
print(lesson_manager.lessons)

lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(
    lesson_manager.lessons
)  # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
print(
    lesson_manager.lessons["For-Loops"]
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

print(
    lesson_manager.get("For-Loops")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
