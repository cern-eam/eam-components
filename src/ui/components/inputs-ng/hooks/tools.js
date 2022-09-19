
export const extractOptions = result => {
    // No-Content 
    if (result.status === 204) {
        return []
    }

    return result.body.data;
}