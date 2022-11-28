"use strict";
class JobPosition {
    constructor(builder) {
        this.publishedDate = builder.publishedDate;
        this.title = builder.title;
        this.isRemote = builder.isRemote;
        this.description = builder.description;
        this.location = builder.location;
        this.salaryCap = builder.salaryCap;
        this.yearsOfExperienceRequired = builder.yearsOfExperienceRequired;
    }
}
JobPosition.Builder = class {
    constructor(publishedDate, title, isRemote) {
        // Required Parameters
        this.publishedDate = publishedDate;
        this.title = title;
        this.isRemote = isRemote;
        // Optional Parameters (with defaults)
        this.description = "";
        this.location = "Tel Aviv";
        this.salaryCap = 22000;
        this.yearsOfExperienceRequired = 2;
    }
    setDescription(description) {
        this.description = description;
        return this;
    }
    setLocation(location) {
        this.location = location;
        return this;
    }
    setSalaryCap(salaryCap) {
        this.salaryCap = salaryCap;
        return this;
    }
    setyYearsOfExperienceRequired(yearsOfExperienceRequired) {
        this.yearsOfExperienceRequired = yearsOfExperienceRequired;
        return this;
    }
    build() {
        return new JobPosition(this);
    }
};
//# sourceMappingURL=jobPosition.js.map