"""
Implement a group_by_owners function that:
    Accepts a dictionary containing the file owner name for each file name.
    Returns a dictionary containing a list of file names for each owner name, in any order.
For example, for dictionary {'Input.txt': 'Randy', 'Code.py': 'Stan', 'Output.txt': 'Randy'}
the group_by_owners function should return {'Randy': ['Input.txt', 'Output.txt'], 'Stan': ['Code.py']}.
    def group_by_owners(files):
        return None
    files = {
        'Input.txt': 'Randy',
        'Code.py': 'Stan',
        'Output.txt': 'Randy'
    }
    print(group_by_owners(files))
"""

from collections import defaultdict


def group_by_owners(files):
    owners = defaultdict(list)
    for file, owner in files.items():
        owners[owner].append(file)
    return owners

if __name__ == "__main__":

    files={}
    inp = int(input("Enter No of files : "))

    print("Enter file name and owner of the file")
    for i in range(inp):
        fileName, owner  = input().split()
        files[fileName] = owner

    print(group_by_owners(files))
