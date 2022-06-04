# import pandas as pd
# import json
# import os
# import requests
# import json
# from lxml import etree
#
# def json_csv():
#      file='./getDomainsGroupBySubject.json'
#      f=open(file ,mode='r',encoding='utf8').read()
#      subject=json.loads(f)
#      out=pd.DataFrame (subject['data'])
#
#      out.to_csv('./Subject.csv',index=False)
# def req_xml():
#      url='http://47.95.145.72:8087/dependency/\
# getDependenciesByDomainNameSaveAsGexf?domainName=%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84'
#      header={
#
# 'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36'
#
#
#           }
#      xml=requests.post(url=url,headers=header)
#      req=xml.content
#      data=json.loads(req.decode('utf8'))['data'].encode('gbk')
#
#
#      return data
# if __name__=='__main__':
#      xml=req_xml()
#      tree=etree.HTML(xml)
#      nodes=tree.xpath('//nodes')
#
#
import requests

headers = {
    'authority': 'zh.wikipedia.org',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
    'cache-control': 'max-age=0',
    'cookie': 'GeoIP=HK:::22.26:114.17:v4; zhwikimwuser-sessionId=80a4c8c6525641546e0f; zhwikiBlockID=318778^%^214e85f1094d652cf4e2ad5ee252086faaa5555e9fa2d5bf84037d89f3d4e5c87eec4987a316f2f7435a436e829280d6691e906017ee85226040859a08f90de55f; WMF-Last-Access=12-May-2022; WMF-Last-Access-Global=12-May-2022; zhwikiwmE-sessionTickLastTickTime=1652340647153; zhwikiwmE-sessionTickTickCount=23; zhwikiel-sessionId=203d5aef072cbcb2fce8',
    'sec-ch-ua': '^\\^',
    'sec-ch-ua-arch': '^\\^x86^\\^',
    'sec-ch-ua-bitness': '^\\^64^\\^',
    'sec-ch-ua-full-version-list': '^\\^',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-model': '^\\^^\\^',
    'sec-ch-ua-platform': '^\\^Windows^\\^',
    'sec-ch-ua-platform-version': '^\\^10.0.0^\\^',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'none',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.54 Safari/537.36 Edg/101.0.1210.39',
}

response = requests.get('https://zh.wikipedia.org/wiki/%5E%%5EE4%5E%%5EB8%5E%%5EAD%5E%%5EE6%5E%%5E96%5E%%5E87%5E%%5EE7%5E%%5EBB%5E%%5EB4%5E%%5EE5%5E%%5E9F%5E%%5EBA%5E%%5EE7%5E%%5E99%5E%%5EBE%5E%%5EE7%5E%%5EA7%5E%%5E91', headers=headers)
