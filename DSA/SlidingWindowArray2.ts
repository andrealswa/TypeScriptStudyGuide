// Sliding window problem
// 121. Best Time to Buy and Sell Stock

// Description:
// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in
// the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

// Code:
// O(n^2) time (way too slow)
// O(1) space - only using 4 variables (maxProfit, buyPrice,
// sellPrice, profit = Constant space (1))

// function maxProfit(prices: number[]): number {
//     let maxProfit = 0;
//     for (let i = 0; i < prices.length - 1; i++) {
//         const buyPrice = prices[i];
//         for (let j = i + 1; j < prices.length; j++) {
//             const sellPrice = prices[j];
//             let profit = sellPrice - buyPrice;
//             maxProfit = Math.max(maxProfit, profit)
//         }
//     }
//     return maxProfit;
// };

// O(n) time | O(1) space
function maxProfit(prices: number[]): number {
	let maxProfit = 0;
	let minPrice = prices[0];
	for (let i = 0; i < prices.length; i++) {
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		}
		let profit = prices[i] - minPrice;
		if (profit > maxProfit) {
			maxProfit = profit;
		}
	}
	return maxProfit;
}
