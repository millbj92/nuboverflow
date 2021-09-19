interface IUser {
    userName: string;
    email: string;
    github: string;
    linkedin: string;
    userScore: number;
    bio: string;
    profession: string;
    workPlace: string;
    interests: string[];
    userAwards: IAward[];
}

enum AwardLevel {
    Bronze = 0,
    Silver = 1,
    Gold = 2,
}

interface IAward {
    awardName: string;
    awardDescription: string;
    awardLevel: AwardLevel;
    awardScore: number;
}

export default IUser;
