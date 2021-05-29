'''
Problem statement: Write a function that provides change directory (cd) function for an abstract file system.
    Notes:
        -> Root path is '/'
        -> Path separator is '/'
        -> Parent directory is addressable as '..'
        -> Directory names consist only of English alphabet letters (A-Z and a-z)
        -> The function should support both relative and absolute paths
        -> The function will not be passed any invalid paths
        -> Do not use built-in path-related functions.
Sample Input:
path = Path('a/b/c/d')
path.cd('../x')
print(path.current_path)

Sample Output:
'/a/b/c/x'

'''
class Path:
    def __init__(self, path):
        self.current_path = path
    def cd(self, new_path):
        x = 0
        newPathList = new_path.split('/')
        pathLen = len(newPathList)
        pathList = self.current_path.split('/')
        if newPathList[0] == '':
            del pathList[:]
            pathList.append('/' + newPathList[1])
            x += 2
        for i in range(pathLen):
            y = len(pathList) - 1
            if newPathList[x] == '..':
                pathList.pop(y)
            else:
                pathList.append(newPathList[x])
            x += 1
        self.current_path = "/".join(pathList)
    
path = Path('/a/b/c/d')
path.cd('../x')
print(path.current_path) #output : /a/b/c/x