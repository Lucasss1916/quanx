// 国内DNS服务器
const domesticNameservers = [
  "https://dns.alidns.com/dns-query", // 阿里云公共DNS
  "https://doh.pub/dns-query", // 腾讯DNSPod
  "https://doh.360.cn/dns-query" // 360安全DNS
];
// 国外DNS服务器
const foreignNameservers = [
  "https://1.1.1.1/dns-query", // Cloudflare(主)
  "https://1.0.0.1/dns-query", // Cloudflare(备)
  "https://208.67.222.222/dns-query", // OpenDNS(主)
  "https://208.67.220.220/dns-query", // OpenDNS(备)
  "https://194.242.2.2/dns-query", // Mullvad(主)
  "https://194.242.2.3/dns-query" // Mullvad(备)
];
// DNS配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    // 本地主机/设备
    "+.lan",
    "+.local",
    // Windows网络出现小地球图标
    "+.msftconnecttest.com",
    "+.msftncsi.com",
    // QQ快速登录检测失败
    "localhost.ptlogin2.qq.com",
    "localhost.sec.qq.com",
    // 微信快速登录检测失败
    "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5", "119.29.29.29", "1.1.1.1", "8.8.8.8"],
  "nameserver": [...domesticNameservers, ...foreignNameservers],
  "proxy-server-nameserver": [...domesticNameservers, ...foreignNameservers],
  "nameserver-policy": {
    "geosite:private,cn,geolocation-cn": domesticNameservers,
    "geosite:google,youtube,telegram,gfw,geolocation-!cn": foreignNameservers
  }
};
// 规则集通用配置
const ruleProviderCommon = {
  "type": "http",
  "format": "yaml",
  "interval": 86400
};
// 规则集配置
const ruleProviders = {
  "Steam": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Steam/Steam.yaml",
    "path": "./ruleset/loyalsoldier/Steam.yaml"
  },
  "reject": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt",
    "path": "./ruleset/loyalsoldier/reject.yaml"
  },
  "icloud": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt",
    "path": "./ruleset/loyalsoldier/icloud.yaml"
  },
  "apple": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt",
    "path": "./ruleset/loyalsoldier/apple.yaml"
  },  
  "bing": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Lucasss1916/quanx/main/clash/rules/bing.txt",
    "path": "./ruleset/lucas/bing.yaml"
  },
  "Microsoft": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Lucasss1916/quanx/main/clash/rules/microsoft.txt",
    "path": "./ruleset/lucas/Microsoft.yaml"
  },
  "Spotify": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Lucasss1916/quanx/main/clash/rules/spotify.txt",
    "path": "./ruleset/lucas/Spotify.yaml"
  },
  "Youtube": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Lucasss1916/quanx/main/clash/rules/youtube.txt",
    "path": "./ruleset/lucas/Spotify.yaml"
  },
  "google": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geoip/google.yaml",
    "path": "./ruleset/loyalsoldier/Youtube.yaml"
  },
  "proxy": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://raw.githubusercontent.com/Lucasss1916/quanx/main/clash/rules/proxy.txt",
    "path": "./ruleset/loyalsoldier/proxy.yaml"
  },
  "direct": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt",
    "path": "./ruleset/loyalsoldier/direct.yaml"
  },
  "private": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt",
    "path": "./ruleset/loyalsoldier/private.yaml"
  },
  "gfw": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt",
    "path": "./ruleset/loyalsoldier/gfw.yaml"
  },
  "tld-not-cn": {
    ...ruleProviderCommon,
    "behavior": "domain",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt",
    "path": "./ruleset/loyalsoldier/tld-not-cn.yaml"
  },
  "telegramcidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt",
    "path": "./ruleset/loyalsoldier/telegramcidr.yaml"
  },
    "Telegram": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "  https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Telegram/Telegram.yaml",
    "path": "./ruleset/loyalsoldier/Telegram.yaml"
  },
  "cncidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt",
    "path": "./ruleset/loyalsoldier/cncidr.yaml"
  },
  "lancidr": {
    ...ruleProviderCommon,
    "behavior": "ipcidr",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt",
    "path": "./ruleset/loyalsoldier/lancidr.yaml"
  },
  "applications": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt",
    "path": "./ruleset/loyalsoldier/applications.yaml"
  },
  "openai": {
    ...ruleProviderCommon,
    "behavior": "classical",
    "url": "https://fastly.jsdelivr.net/gh/blackmatrix7/ios_rule_script@master/rule/Clash/OpenAI/OpenAI.yaml",
    "path": "./ruleset/blackmatrix7/openai.yaml"
  },  
  "geolocation-!cn": {
            url: "https://mirror.ghproxy.com/https://raw.githubusercontent.com/MetaCubeX/meta-rules-dat/meta/geo/geosite/geolocation-!cn.yaml",
            path: "./ruleset/geolocation-!cn.yaml",
            behavior: "domain",
            interval: 86400,
            format: "yaml",
            type: "http",
  },
};
// 规则
const rules = [
  // 自定义规则
  "DOMAIN-SUFFIX,googleapis.cn,国外媒体", // Google服务
  "DOMAIN-SUFFIX,gstatic.com,国外媒体", // Google静态资源
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,节点选择", // Google Play下载服务
  "DOMAIN-SUFFIX,github.io,国外媒体", // Github Pages
  "DOMAIN,v2rayse.com,节点选择", // V2rayse节点工具
  "DOMAIN-SUFFIX,steamcontent,全局直连",
  "DOMAIN-SUFFIX,apple,苹果服务",
  // blackmatrix7 规则集
  "RULE-SET,openai,ChatGPT",
  // Loyalsoldier 规则集
  "RULE-SET,Telegram,电报消息"    
  "RULE-SET,applications,全局直连",
  "RULE-SET,Spotify,Spotify",
  "RULE-SET,private,全局直连",
  "RULE-SET,reject,广告过滤",
  "RULE-SET,icloud,苹果服务",
  "RULE-SET,bing,微软服务",
  "RULE-SET,Microsoft,微软服务",
  "RULE-SET,apple,苹果服务",
  "RULE-SET,Youtube,国外媒体",
  "RULE-SET,google,国外媒体",
  "RULE-SET,Steam,全局直连",
  "RULE-SET,proxy,节点选择",
  "RULE-SET,gfw,节点选择",
  "RULE-SET,tld-not-cn,节点选择",
  "RULE-SET,direct,全局直连",
  "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve",
  "RULE-SET,telegramcidr,电报消息,no-resolve",
  "RULE-SET,geolocation-!cn,节点选择", 
  // 其他规则
  "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve",
  "MATCH,漏网之鱼"
];
// 代理组通用配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "http://www.gstatic.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 程序入口
function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount =
    typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理");
  }

  // 覆盖原配置中DNS配置
  config["dns"] = dnsConfig;

  // 覆盖原配置中的代理组
  config["proxy-groups"] = [
        {
      ...groupBaseOption,
      "name": "HK",
      "type": "select",
      "filter": "(HK|香港|hong kong|Hong Kong)",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"  
},
    {
      ...groupBaseOption,
      "name": "JP",
      "type": "select",
      "filter": "(JP|日本|japan|Japan)",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"  
    },
    {
      ...groupBaseOption,
      "name": "KR",
      "type": "select",
      "filter": "(KR|韩国|korea|Korea)",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/kr.svg"
    },
    {
      ...groupBaseOption,
      "name": "TW",
      "type": "select",
      "filter": "(TW|台湾|taiwan|Twain|Taiwan)",
      "include-all": true,
      "icon":"https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg"
    },
    {
      ...groupBaseOption,
      "name": "SG",
      "type": "select",
      "filter": "(SG|新加坡|sg|Singapore|singapore)",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
    },
    {
      ...groupBaseOption,
      "name": "US",
      "type": "select",
      "filter": "(US|美国|United States|united state)",
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
    },
    {
      ...groupBaseOption,
      "name": "节点选择",
      "type": "select",
      "proxies": ["延迟选优",  ],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      "name": "延迟选优",
      "type": "url-test",
      "tolerance": 100,
      "proxies": ["HK","JP","KR","TW","SG","US"],
      "include-all": true,
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/speed.svg"
    },
    {
      ...groupBaseOption,
      "name": "国外媒体",
      "type": "select",
      "proxies": ["节点选择", "延迟选优",  "HK","JP","KR","TW","SG","US"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg"
    },
    {
      ...groupBaseOption,
      "name": "电报消息",
      "type": "select",
      "proxies": ["节点选择", "延迟选优",  "HK","JP","KR","TW","SG","US"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg"
    },
    {
      ...groupBaseOption,
      "url": "https://chatgpt.com",
      "expected-status": "200",
      "name": "ChatGPT",
      "type": "select",
      "proxies": ["节点选择", "延迟选优", "HK","JP","KR","TW","SG","US"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg"
    },
    {
      ...groupBaseOption,
      "name": "微软服务",
      "type": "select",
      "proxies": ["全局直连", "节点选择", "延迟选优",  ],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg"
    },
    {
      ...groupBaseOption,
      "name": "Spotify",
      "type": "select",
      "proxies": ["全局直连", "节点选择", "延迟选优", "HK","JP","KR","TW","SG","US"  ],
      "icon": "https://raw.githubusercontent.com/Koolson/Qure/master/IconSet/Color/Spotify.png"
    },
    {
      ...groupBaseOption,
      "name": "苹果服务",
      "type": "select",
      "proxies": ["节点选择", "延迟选优",  "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg"
    },
    {
      ...groupBaseOption,
      "name": "广告过滤",
      "type": "select",
      "proxies": ["REJECT", "DIRECT"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg"
    },
    {
      ...groupBaseOption,
      "name": "全局直连",
      "type": "select",
      "proxies": ["DIRECT", "节点选择", "延迟选优" ],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg"
    },
    {
      ...groupBaseOption,
      "name": "漏网之鱼",
      "type": "select",
      "proxies": ["节点选择", "延迟选优",  "全局直连"],
      "icon": "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg"
    },

  ];

  // 覆盖原配置中的规则
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 返回修改后的配置
  return config;
}
