interface ICase {
    Id: string;
    Image: string;
    Title: string;
    CaseColor: string;
    FeaturesTitle: string;
    FriendlyURL: string;
    Filters: IFilters[];
}

interface IFilters {
    Id: string;
    Name: string;
}
