var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+router2 socks5 proxy", {
    "+router2 socks5 proxy": function(url, host, scheme) {
        "use strict";
        if (host[host.length - 1] >= 0 && isInNet(host, "0.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "10.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "127.0.0.0", "255.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "169.254.0.0", "255.255.0.0") || host[host.length - 1] >= 0 && isInNet(host, "172.16.0.0", "255.240.0.0") || host[host.length - 1] >= 0 && isInNet(host, "192.168.0.0", "255.255.0.0") || host[host.length - 1] >= 0 && isInNet(host, "224.0.0.0", "240.0.0.0") || host[host.length - 1] >= 0 && isInNet(host, "240.0.0.0", "240.0.0.0") || /^localhost$/.test(host) || /^[^:]+:\/\/localhost:8080\//.test(url) || /^lshost2$/.test(host) || /^router$/.test(host) || /^routerb$/.test(host) || /^router2$/.test(host) || /^wpad$/.test(host) || /^esxi$/.test(host) || /^tivo$/.test(host) || /^tivo\.gearol\.com$/.test(host) || /^wpad\.gearol\.com$/.test(host) || /^esxi\.gearol\.com$/.test(host) || /^lshost2\.gearol\.com$/.test(host) || /^router\.gearol\.com$/.test(host) || /^router2\.gearol\.com$/.test(host) || /^routerb\.gearol\.com$/.test(host) || /\.alipay\.com$/.test(host) || /\.aliyun\.com$/.test(host) || /\.taobao\.com$/.test(host) || /\.tmall\.com$/.test(host) || /\.jd\.com$/.test(host) || /\.baidu\.com$/.test(host) || /\.sina\.com\.cn$/.test(host) || /\.163\.com$/.test(host) || /\.autohome\.com\.cn$/.test(host) || /\.gitee\.com$/.test(host) || /\.189\.cn$/.test(host) || /\.iqiyi\.com$/.test(host) || /rrentv\.com$/.test(host) || /\.csdn\.net$/.test(host) || /\.youku\.com$/.test(host)) return "DIRECT";
        return "SOCKS5 192.168.2.3:1080; SOCKS 192.168.2.3:1080";
    }
});