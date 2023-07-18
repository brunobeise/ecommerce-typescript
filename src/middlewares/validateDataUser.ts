function validateDataUser(data:any): boolean {
    if (!data.name || !data.email || !data.username) {
        return false;
    }
    return true;
}

export default validateDataUser;