// Color interface
export interface Color {
    name: string;
    color: string;
}

// { colors } prop interface
export interface ColorsProps {
    colors: Color[];
}

// { colors, setColor prop interface}
export interface ColorsSetProps {
    colors: Color[];
    setColors: React.Dispatch<React.SetStateAction<Color[]>>;
}
