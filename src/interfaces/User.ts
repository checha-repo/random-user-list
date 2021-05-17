export interface User {
    gender:     string;
    name:       Name;
    location:   Location;
    email:      string;
    dob:        Dob;
    registered: Dob;
    phone:      string;
    cell:       string;
    picture:    Picture;
    nat:        string;
    id:         ID;
}

export interface Dob {
    date: Date;
    age:  number;
}

export interface Location {
    street:      Street;
    city:        string;
    state:       string;
    country:     string;
    postcode:    number;
}

export interface Street {
    number: number;
    name:   string;
}

export interface Name {
    title: string;
    first: string;
    last:  string;
}

export interface Picture {
    large:     string;
    medium:    string;
    thumbnail: string;
}

export interface ID {
    name:  string;
    value: null;
}

export interface GroupedContacts {
    [key: string]: Array<User>;
}