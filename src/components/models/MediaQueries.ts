const size = {
    mobileM: '500px',
    tablet: '720px',
    laptop: '1020px',
    laptopL: '1440px',
    desktop: '1920px',
};

export const device: typeof size = {
    mobileM: `(min-width: ${size.mobileM})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
};