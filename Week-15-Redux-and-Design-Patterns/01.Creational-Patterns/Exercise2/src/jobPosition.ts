class JobPosition {
  publishedDate: string; // required
  title: string; // required
  isRemote: string; // required
  description: string;
  location: string;
  salaryCap: number;
  yearsOfExperienceRequired: number;

  private constructor(builder: any) {
    this.publishedDate = builder.publishedDate;
    this.title = builder.title;
    this.isRemote = builder.isRemote;
    this.description = builder.description;
    this.location = builder.location;
    this.salaryCap = builder.salaryCap;
    this.yearsOfExperienceRequired = builder.yearsOfExperienceRequired;
  }

  public static Builder = class {
    publishedDate: string; // required
    title: string; // required
    isRemote: boolean; // required
    description: string;
    location: string;
    salaryCap: number;
    yearsOfExperienceRequired: number;

    constructor(publishedDate: string, title: string, isRemote: boolean) {
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

    setDescription(description: string) {
      this.description = description;
      return this;
    }

    setLocation(location: string) {
      this.location = location;
      return this;
    }

    setSalaryCap(salaryCap: number) {
      this.salaryCap = salaryCap;
      return this;
    }

    setyYearsOfExperienceRequired(yearsOfExperienceRequired: number) {
      this.yearsOfExperienceRequired = yearsOfExperienceRequired;
      return this;
    }

    build() {
      return new JobPosition(this);
    }
  };
}
