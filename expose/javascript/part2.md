1. Line 12 will print 3 to the console becuase at the end of the for loop, i = prices.length = 3. 
2. Line 13 will print 150 to the console because at the end of the for loop, discountedPrice = 300 * (1-0.5) = 150.
3. Line 14 will print 150 to the console because at the end of the for loop, discountedPrice = 150. Therefore, finalPrice = (150 * 100) / 100 = 150.
4. The function will return [50, 100, 150]. This is because the for loop will calcualte the discount and apply it to each item in the prices array, so [100, 200, 300] will turn into [50, 100, 150] after the 50% discount.
5. Line 12 causes an error because i is declared with let, so it is not defined outside of the for loop.
6. Line 13 also causes an error because discountedPrice is declared with let, and is not defined outside the for loop.
7. Line 14 prints 150 because finalPrice at the last instance of i is 300 * 0.5 = 150. 
8. This function returns [50, 100, 150]. The for loop will calcualte the discount and apply it to each item in the prices array, so [100, 200, 300] will turn into [50, 100, 150] after the 50% discount. Using 'let' instead of 'var' does not affect the function because the variables are not being used outside of the for loop. 
9. The code causes an error because i is not defined outside of the for loop due to the use of 'let' 
10. At line 12, 3 will be returned because it is within scope of the variable length.
11. The function will return [ 50, 100, 150 ]. In the for loop, discountedPrice is calculated one by one by applying the discount to each item in prices return them. Because the discount is 50%, [100, 200, 300] will turn into [50, 100, 150].
12. 
    1.  You can access the value of the name property with ```student.name```
    2.  You can access the value of the grad year property with ```student["Grad Year"]```
    3.  You can call the function for the greeting property with ```student.greeting();```
    4.  You can access the name property of the Favorite Teacher property with ```student['Favorite Teacher'].name```
    5.  You can access index 0 of the courseLoad property with ```student.courseLoad[0]```
13. 
    1.  '32'
    2.  1
    3.  3
    4.  '3null'
    5.  4
    6.  0
    7.  '3undefined'
    8.  NaN
14. 
    1.  true
    2.  false
    3.  true
    4.  false
    5.  false
    6.  true
15. === is a strict equality operator that checks comparisons without type conversions. On the other hand, == will convert data types if the two are different. 
16. In part2-question16.js
17. The function will return [ 2, 4, 6 ]. This is because the for loop will push doSomething(array[i]) for each value in array. Thus, 1x2=2, 2x2=4, and 3x2=6 will be pushed to newArr and returned.
18. In part2-question18.js
19. The output will be 1 4 3 2, where each number is output on separate lines. 