function validateDataProduct(data:any): boolean {
    if(!data.name || !data.value) {
        return false;
    }

    return true;
}

export default validateDataProduct;