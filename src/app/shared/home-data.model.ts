export interface HomeData {
    type:     string;
    features: Feature[];
}

export interface Feature {
    id:         string;
    properties: Properties;
    type:       string;
    geometry:   Geometry;
}

export interface Geometry {
    type:        string;
    coordinates: Array<Array<Array<number[] | number>>>;
}

// export enum ShapeEnum {
//     MultiPolygon = "MultiPolygon",
//     Polygon = "Polygon",
// }

export interface Properties {
    id?:              number;
    NAME:             string;
    abbr?:            string;
    bbox:             number[];
    name?:            string;
    type:             string;
    STATE?:           string;
    color:            string;
    GEO_ID?:          string;
    bounds?:          Array<number[]>;
    cluster:          boolean;
    density?:         number;
    stateCode:        string;
    synthetic:        boolean;
    CENSUSAREA?:      number;
    background:       string;
    background_hover: string;
    shape?:           string;
    category?:        string;
    LSAD?:            string;
    ALAND?:           number;
    CSAFP?:           string;
    GEOID?:           string;
    metro?:           string;
    state?:           number;
    AWATER?:          number;
    CBSAFP?:          string;
    AFFGEOID?:        string;
    market?:          number;
}

// export enum Lsad {
//     M1 = "M1",
//     M2 = "M2",
// }

// export enum PurpleType {
//     Market = "market",
//     State = "state",
// }

// export enum FeatureType {
//     Feature = "Feature",
// }
