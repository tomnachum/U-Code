import string


class YouTubeLessonManager:
    def __init__(self) -> None:
        self._lessons = {}
        self._youtube_url = "https://www.youtube.com/watch?v="

    def save(self, name, url):
        self._lessons[self._edit_name(name)] = url[-11:]

    def get(self, lesson_name):
        return [
            self._youtube_url + self._lessons[name]
            for name in self._lessons
            if self._edit_name(lesson_name) in name
        ]

    def _edit_name(self, name):
        return (
            name.lower()
            .translate(str.maketrans("", "", string.punctuation))
            .replace(" ", "")
        )


lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
print(lesson_manager._lessons["forloops"])  # outputs: OnDr4J2UXSA
print(
    lesson_manager.get("For-Loops")
)  # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
