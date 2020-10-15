export const updateObjectInArray = (items, itemId, objPropName, newObjectProps) => {
    return items.map(elem => {
        if (elem[objPropName] === itemId) {
            return {
                ...elem,
                ...newObjectProps
            };
        }

        return elem;
    });
};