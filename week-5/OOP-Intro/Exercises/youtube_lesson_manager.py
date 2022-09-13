class YouTubeLessonManager:
    def __init__(self) -> None:
        self.lessons = {}

    def save(self, name, url):
        self.lessons[name] = url
