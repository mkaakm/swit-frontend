const getProductsPrice = ({price}) => parseInt(price);

export const getMinPrice = products => Math.min(...products.map(getProductsPrice));
export const getMaxPrice = products => Math.max(...products.map(getProductsPrice));

export const getPriceFilterProducts = (priceRange, products) => {
    if (!priceRange) {
        return products;
    }
    const result = products.filter(({price}) => {
        const formatPrice = parseInt(price);
        return (formatPrice >= priceRange.min && formatPrice <= priceRange.max)
    });

    return result;
}

export const getSortProducts = (sort, products) => {
    if(!sort || sort === "popularity") {
        return products;
    }
    const result = [...products].sort((a, b) => {
        const formatPrice1 = parseInt(a.price);
        const formatPrice2 = parseInt(b.price);
        if(sort === "price: low-high") {
            return formatPrice1 - formatPrice2
        }
        return formatPrice2 - formatPrice1
    });

    return result;
}

export const getCategoriesId = categories => categories.map(({id}) => id);

export const getCategoriesWithStructure = (categories = []) => {
    const mainCategories = categories.filter(item => !item.parent).map(item => ({...item, subCategories: []}));
    const subCategories = categories.reduce((acum, item)=> {
        const {parent} = item;
        if(!parent) {
            return acum;
        }

        const parentCategory = acum.find(elem => elem.id === parent);
        if(parentCategory) {
            const subCategory = {...item, subSubCategories: []}
            parentCategory.subCategories.push(subCategory);
        }
        return acum;
    }, mainCategories);

    const result = categories.reduce((acum,item)=> {
        const {parent} = item;
        if(!parent) {
            return acum;
        }
        const parentCategory = acum.find(elem => {
            const result = elem.subCategories.find(subElem => subElem.id === parent);
            return Boolean(result);
        })
        if(parentCategory) {
            const subParentCategory = parentCategory.subCategories.find(subElem => subElem.id === parent);
            subParentCategory.subSubCategories.push(item);
        }
        return acum;
    }, subCategories);

    return result;
}

export const getSubCategoriesWithStructure = (categories = [], categoryId) => {
    const mainCategories = categories.filter(item => item.parent === Number(categoryId)).map(item => ({...item, subCategories: []}));
    const otherCategories = categories.filter(item => item.parent !== categoryId);
    const mainCategoriesIds = mainCategories.map(({id}) => id);

    otherCategories.forEach( item => {
        const {parent} = item;

        if(mainCategoriesIds.includes(parent)) {
            const parentCategory = mainCategories.find(item => item.id === parent);
            parentCategory.subCategories.push(item);
        }
    });

    return mainCategories;
}

export const getToggleCategoryHandler = (setCategories) => {
    const func = (item) => {
        setCategories(prevState => {
            const isExist = prevState.find(elem => elem.id === item.id);
            if(isExist) {
                return prevState.filter(elem => elem.id !== item.id);
            }
            return [...prevState, item]
        });
    };

    return func;
}


export const getSelectProductsWithBrands = ({products, selectBrands, selectCategories = [], selectSubCategories = [], selectSubSubCategories = []}) => {
    if(!selectCategories.length && !selectBrands.length) {
        return products;
    }
    let result = products;
    if(selectBrands.length) {
        result = products.filter(item => {
            const ids = item.categories.map(({id}) => id);
            const brand = selectBrands.find(({id}) => ids.includes(id));
            return Boolean(brand);
        });
    }

    return result;
    /*

    const result = products.filter(item => {
        const ids = item.categories.map(({id}) => id);
        const mainCategory = selectCategories.find(({id}) => ids.includes(id));
        if(!mainCategory) {
            return false;
        }
        if(!selectSubCategories.length) {
            return true;
        }
        const isParentCategory = selectSubCategories.find(subCategory => subCategory.parent === mainCategory.id);
        if(!isParentCategory) {
            return true;
        }
        const subCategory = selectSubCategories.find(({id}) => ids.includes(id));
        if(!subCategory) {
            return false;
        }
        if(!selectSubSubCategories.length) {
            return true
        }
        const isParentSubCategory = selectSubSubCategories.find(subSubCategory => subSubCategory.parent === subCategory.id);
        if(!isParentSubCategory) {
            return true;
        }
        const subSubCategory = selectSubSubCategories.find(({id}) => ids.includes(id));
        return Boolean(subSubCategory);
    });

    return result;
    */
}

export const getSelectProducts = ({products, selectCategories, selectSubCategories = [], selectSubSubCategories = []}) => {
    if(!selectCategories.length) {
        return products;
    }
    const result = products.filter(item => {
        const ids = item.categories.map(({id}) => id);
        const mainCategory = selectCategories.find(({id}) => ids.includes(id));
        if(!mainCategory) {
            return false;
        }
        if(!selectSubCategories.length) {
            return true;
        }
        const isParentCategory = selectSubCategories.find(subCategory => subCategory.parent === mainCategory.id);
        if(!isParentCategory) {
            return true;
        }
        const subCategory = selectSubCategories.find(({id}) => ids.includes(id));
        if(!subCategory) {
            return false;
        }
        if(!selectSubSubCategories.length) {
            return true
        }
        const isParentSubCategory = selectSubSubCategories.find(subSubCategory => subSubCategory.parent === subCategory.id);
        if(!isParentSubCategory) {
            return true;
        }
        const subSubCategory = selectSubSubCategories.find(({id}) => ids.includes(id));
        return Boolean(subSubCategory);
    });

    return result;
}

export const toggleFavorite = (product) => {
    const products = JSON.parse(localStorage.getItem("favorite-products")) || [];
    const index = products.findIndex(item => item.id === product.id);
    if(index === -1) {
        products.push(product);
    }
    else {
        products.splice(index, 1);
    }
    localStorage.setItem("favorite-products", JSON.stringify(products));
}