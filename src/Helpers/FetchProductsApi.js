export const getData = async (url) => {
    const info = await fetch(url);
    const data = await info.json();
    const finalData = data.map((product) => ({
        image: product.image,
        name: product.title,
        price: product.price,
        category: product.category,
    }));
    return finalData;
};