# Read from the file file.txt and output the tenth line to stdout.

lines=$(wc -l file.txt | cut -d ' ' -f 1)

if [ ${lines} -lt 10 ]; then
    echo ''
else
    head -n 10 file.txt | tail -n 1
fi
