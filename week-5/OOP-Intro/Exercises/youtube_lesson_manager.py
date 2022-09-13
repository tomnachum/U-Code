class YouTubeLessonManager:
    # ex1
    def __init__(self) -> None:
        self.lessons = {}

    # ex2
    def save(self, name, url):
        self.lessons[name.lower()] = url

    # ex3
    def get(self, lesson_name):
        return self.lessons[lesson_name.lower()]


# Tests
# ex1
lesson_manager = YouTubeLessonManager()
print(lesson_manager.lessons)

# ex2
lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(
    lesson_manager.lessons
)  # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
# print(
#     lesson_manager.lessons["For-Loops"]
# )  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

# ex3
print(
    lesson_manager.get("For-Loops")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

# ex4
print(
    lesson_manager.get("for-loops")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(
    lesson_manager.get("fOr-LooPS")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
