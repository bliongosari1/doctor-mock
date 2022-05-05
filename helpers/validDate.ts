const isValidDate = (d: Date | null) => {
    return d && !isNaN(d.valueOf());
};

export default isValidDate;
