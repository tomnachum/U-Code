import string


class YouTubeLessonManager:
    def __init__(self) -> None:
        self._lessons = {}
        self._youtube_url = "https://www.youtube.com/watch?v="
        self.counter = {}

    def save(self, name, url):
        self._lessons[self._edit_name(name)] = url[-11:]
        self.counter[self._edit_name(name)] = 0

    def get(self, lesson_name):
        lessons = []
        for name, postfix in self._lessons.items():
            if self._edit_name(lesson_name) in name:
                lessons.append(self._youtube_url + postfix)
                self.counter[self._edit_name(name)] += 1
        return lessons

    def _edit_name(self, name):
        return (
            name.lower()
            .translate(str.maketrans("", "", string.punctuation))
            .replace(" ", "")
        )

    def get_counts(self, name):
        return self.counter[self._edit_name(name)]

    def get_most_popular_lesson(self):
        return sorted(self.counter.items(), key=lambda item: item[1])[-1][0]


lesson_manager = YouTubeLessonManager()
lesson_manager.save("Dictionaries", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.get("For-Loops")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
lesson_manager.get("For-Loops")
lesson_manager.get("Dictionaries")
print(lesson_manager.get_counts("For-Loops"))  # outputs: 3
print(lesson_manager.get_counts("Dictionaries"))  # outputs: 2
lesson_manager.get("For-Loops")
lesson_manager.get("Loops")
print(lesson_manager.get_counts("For-Loops"))
print(lesson_manager.get_most_popular_lesson())
