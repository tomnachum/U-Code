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
entry_level_agencies = set(
    [job["agency"] for job in nyc_jobs if job["career_level"] == "Entry-Level"]
)
broadway_agencies = set(
    [job["agency"] for job in nyc_jobs if "Broadway" in job["work_location"]]
)
relevant_agencies = entry_level_agencies & broadway_agencies
print(relevant_agencies)

# Max Hourly Salary
not_entry_level_salarys = set(
    [job["salary_range_to"] for job in nyc_jobs if job["career_level"] != "Entry-Level"]
)
hourly_salarys = set(
    [job["salary_range_to"] for job in nyc_jobs if job["salary_frequency"] == "Hourly"]
)
max_salary = max(not_entry_level_salarys & hourly_salarys)
print(max_salary)

# Salaries in range
agencies_in_range = set(
    [
        job["agency"]
        for job in nyc_jobs
        if float(job["salary_range_from"]) >= 17 and float(job["salary_range_to"]) <= 21
    ]
)
print(agencies_in_range)
