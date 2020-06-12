
export interface IPosting {
    name: string;
    city: string;
    address: string;
    description: IDescription;
    qualification: IQualification;
    load: (any) => IPosting
}

interface ILocation {
    city: string;
    address: string;
}

interface IDescription {
    title: string;
    text: string;
}

interface IQualification {
    title: string;
    text: string;
}

const descriptionObj = {
    title: '',
    text: ''
}

export class Posting implements IPosting {
    name = '';
    location: ILocation;
    jobAd;

    constructor() {}

    load(input:any): IPosting {
        return Object.assign(this, input);
    }

    get length() {
        return Object.keys(this).length;
    }

    get city(): string {
        return this?.location?.city;
    }

    get address() {
        return this?.location?.address;
    }

    get description() {
        return this?.jobAd?.sections?.jobDescription || descriptionObj;
    }

    get qualification() {
        return this?.jobAd?.sections?.qualifications || descriptionObj;
    }
}