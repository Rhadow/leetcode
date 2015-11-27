# Read from the file words.txt and output the word frequency list to stdout.
sed "s/ /\n/g" words.txt | sort | uniq -c | sort -rn | awk '$2 {print $2" "$1}'
