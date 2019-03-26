import tushare as ts

#设置token
ts.set_token('667cebb835b7c7c4b92adf730806e90a2b7849ae573eb3a24f1c3a7a')
#初始化pro接口
pro = ts.pro_api()

#查询当前所有正常上市交易的股票列表
def stock_basic(exchange='', list_status='L', fields='ts_code,symbol,name,area,industry,market,exchange,list_date'):
    return pro.stock_basic(exchange=exchange, list_status=list_status, fields=fields)
# print( stock_basic() )
