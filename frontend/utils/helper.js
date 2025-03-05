export const getDiscountedPricePercentage=(originalPrice,discountdPrice)=>{
    const discount= originalPrice-discountdPrice;
    const discountPercentage= (discount/originalPrice)*100;
    return discountPercentage.toFixed(2);
};