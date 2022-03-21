# braverocker.github.io
http://ftp.apnic.net/apnic/stats/apnic/delegated-apnic-latest
https://ftp.ripe.net/pub/stats/apnic/delegated-apnic-extended-latest
转换命令 wget -qO - "https://ftp.ripe.net/pub/stats/apnic/delegated-apnic-extended-latest" | awk -F'|' '/apnic\|CN\|ipv4/ {print $4"/"32-log($5)/log(2)}'
