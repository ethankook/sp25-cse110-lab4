1. Line 9 will print "values added: 20"
2. Nothing is printed by line 13 because the program never enters the else section since add is true. However, if it is false, hte function will return "final result:  undefined" because result is defined as a var in the if block, but because add is false, it does not get assigned to 0 in the if block. 
3. Var should not be used because result will be a global variable. If we used let instead of var, the result variable would only be visible in the if block. It can lead to naming conflicts and scoping issues. 
4. Line 9 will print "values added: 20"
5. Nothing is printed by line 13 because the program never enters the else section since add is true. However, if add is false instead, the function call will return an error because result is not defined in the else block.
6. Line 9 returns an error because we declare result as a const and immediately try to assign it to something else. 
7. Nothing is printed by line 13 because add is true. However, if it is false, it will return an error because result is not defined in the scope of the else block. 
