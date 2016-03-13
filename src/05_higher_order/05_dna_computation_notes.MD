# Family Tree - DNA computation 

                        ancestor
                            |
                           / \
                          /   \
                         /     \
                     Mother    Father 
                       |         |  
                      / \       / \
                     /   \     /   \
                                
**Solution statement**: 

 *Given a person, a function combines values from two parents from of given person, and a given default value, reduceAncestor condenses
a value from family tree and determine how much DNA relation to the target ancestor* 

**Assumption**: 
 
 *we are assuming a finite set for this recursive problem, and give a default values
for individuals who are not in the set*

# Algorithm 

1. Determine starting point 
2. recursively walk up family tree from parents, grand-parents... etc 
3. The end point "Pauwels van Haverbeke" is set a initial point with value 1
   (that is the target ancestor)
4. Finite Data set - Reach a point where both parent is null
