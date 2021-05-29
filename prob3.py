file_in = open('sample.log','r') # Read file
file_out = open('output.log','w') # Read file

for line in file_in: # Loop every line
    if 'WARNING' in line or 'ERROR' in line: # Search for ERROR in line
        file_out.write(line)

file_in.close()
file_out.close()

