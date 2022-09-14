import json

with open("week-5\Sets\\nyc_jobs.json") as nyc_jobs_file:
    nyc_jobs = json.load(nyc_jobs_file)

# search in description
def find_jobs_by_word(word):
    relevant_jobs = []
    for job in nyc_jobs:
        if word in job["job_description"]:
            relevant_jobs.append(job)
    return relevant_jobs


# Junior Jobs in Brooklin
